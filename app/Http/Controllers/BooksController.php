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

class BooksController extends Controller
{
    public function index()
    {
        $this->authorize('books-list');

        return Inertia::render('Books/Index', [
            'can' => [
                'books-list' => Auth::user()->can('books-list'),
            ],
            'filters' => Request::all('search', 'trashed'),
            'books' => new BookCollection(
                Book::where('user_id', Auth::id())
                    ->orderByName()
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('books-create');

        return Inertia::render('Books/Create');
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

    public function edit(Book $book)
    {
        $this->authorize('books-edit');

        return Inertia::render('Books/Edit', [
            'book' => new BookResource($book),
        ]);
    }

    public function update(Book $book, BookUpdateRequest $request)
    {
        $this->authorize('books-edit');
        $book->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Livro atualizado.');
    }

    public function destroy(Book $book, BookDeleteRequest $request)
    {
        $this->authorize('books-delete');
        $book->delete();

        return Redirect::back()->with('success', 'Livro apagado.');
    }

    public function restore(Book $book)
    {
        $this->authorize('books-delete');
        $book->restore();

        return Redirect::back()->with('success', 'Livro recuperado.');
    }
}
