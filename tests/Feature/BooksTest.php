<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Account;
use App\Models\Book;
use Inertia\Testing\Assert;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class BooksTest extends TestCase
{
    use WithoutMiddleware;

    protected function setUp(): void
    {
        parent::setUp();

        $user = Role::create(['name' => 'user']);
        Role::create(['name' => 'owner']);

        $permissions = [
            'books-list',
            'books-create',
            'books-edit',
            'books-delete'
         ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $permissions = Permission::pluck('id', 'id')->all();

        $user->syncPermissions($permissions);

        $account = Account::create(['name' => 'Acme Corporation']);

        $this->user = User::factory()->make([
            'account_id' => $account->id,
            'first_name' => 'João',
            'last_name' => 'Silva',
            'email' => 'joaodasilva@email.com',
            'role' => 'user',
        ])->assignRole($user);
    }

    public function test_can_list_books()
    {
        $this->withoutMiddleware();

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
        ->each(function (User $user) {
            $user->assignRole('user');
        });

        $this->privilegedUser = User::first()->assignRole('owner');

        Book::factory()->count(5)->create([
            'user_id' => $this->privilegedUser->id
        ]);

        $this->actingAs($this->privilegedUser)
            ->get('/my-books')
            ->assertStatus(200)
            ->assertInertia(function (Assert $page) {
                $page->component('Books/Index');
                $page->has('books.data', 2, function (Assert $page) {
                    $page->hasAll([
                        'id',
                        'title',
                        'author',
                        'pages',
                        'rating',
                        'description',
                        'started_at',
                        'finished_at',
                        'photo',
                        'user',
                        'deleted_at']);
                });
            });
    }
}
