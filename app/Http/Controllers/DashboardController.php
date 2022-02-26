<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Book;
use App\Http\Requests\BookDeleteRequest;
use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    public function index()
    {
        $this->authorize('books-list');

        return Inertia::render('Dashboard/Index', [
            'can' => [
                'books-list' => Auth::user()->can('books-list'),
            ],
            'books' => new BookCollection(
                Book::where('user_id', Auth::id())
                    ->where(['finished_at' => null])
                    ->orderByName()
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Create');
    }

    public function store(Book $book, BookStoreRequest $request)
    {
        $this->authorize('books-create');

        $book->create(
            $request->validated()
        );

        $book['user_id']= Auth::user()->id;

        return Redirect::route('books')->with('success', 'Livro criado.');
    }
}
