<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Account;
use Inertia\Testing\Assert;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UsersTest extends TestCase
{
    use WithoutMiddleware;

    protected function setUp(): void
    {
        parent::setUp();

        $owner = Role::create(['name' => 'owner']);

        $permissions = [
            'users-list',
            'users-create',
            'users-edit',
            'users-delete'
         ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $permissions = Permission::pluck('id', 'id')->all();

        $owner->syncPermissions($permissions);

        $account = Account::create(['name' => 'Acme Corporation']);

        $this->user = User::factory()->make([
            'account_id' => $account->id,
            'first_name' => 'João',
            'last_name' => 'Silva',
            'email' => 'joaodasilva@email.com',
            'role' => 'owner',
        ])->assignRole($owner);
    }

    public function test_cannot_list_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' =>  $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        $this->actingAs($this->user)
            ->get('/users')
            ->assertStatus(403);
    }

    public function test_can_list_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('/users')
            ->assertStatus(200);
    }

    public function test_can_view_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('/users')
            ->assertStatus(200)
            ->assertInertia(function (Assert $page) {
                $page->component('Users/Index');
                $page->has('users.data', 5, function (Assert $page) {
                    $page->hasAll(['id', 'name', 'email', 'role', 'photo', 'deleted_at']);
                });
            });
    }

    public function test_can_search_for_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        User::first()->update([
            'first_name' => 'Greg',
            'last_name' => 'Andersson',
            'role' => 'owner'
        ]);

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('/users?search=Greg')
            ->assertStatus(200)
            ->assertInertia(function (Assert $page) {
                $page->where('filters.search', 'Greg');
                $page->has('users.data', 1, function (Assert $page) {
                    $page->where('name', 'Greg Andersson')->etc();
                });
            });
    }

    public function test_cannot_view_deleted_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        User::first()->delete();

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('/users')
            ->assertStatus(200)
            ->assertInertia(function (Assert $page) {
                $page->has('users.data', 4);
            });
    }

    public function test_can_filter_to_view_deleted_users()
    {
        $this->withoutMiddleware();

        Role::create(['name' => 'user']);

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        User::first()->delete();

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('/users?trashed=with')
            ->assertStatus(200)
            ->assertInertia(function (Assert $page) {
                $page->where('filters.trashed', 'with');
                $page->has('users.data', 5);
            });
    }
}
