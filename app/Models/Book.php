<?php

namespace App\Models;

namespace App\Models;

use League\Glide\Server;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use SoftDeletes, HasFactory;

    protected $perPage = 2;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getNameAttribute()
    {
        return $this->title;
    }

    public function setPhotoAttribute($photo)
    {
        if (!$photo) {
            return;
        }

        $this->attributes['photo_path'] = $photo instanceof UploadedFile ? $photo->store('books') : $photo;
    }

    public function getPhotoAttribute()
    {
        return $this->photoUrl(['w' => 152, 'h' => 202, 'fit' => 'crop']);
    }

    public function photoUrl(array $attributes)
    {
        if ($this->photo_path) {
            return URL::to(App::make(Server::class)->fromPath($this->photo_path, $attributes));
        }
    }
    public function scopeOrderByName($query)
    {
        $query->orderBy('title');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', '%'.$search.'%')
                    ->orWhere('author', 'like', '%'.$search.'%');
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
