<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm')->middleware('guest');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');
Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

// Dashboard
Route::get('/')->name('dashboard')->uses('DashboardController@index')->middleware('auth');

Route::group(['middleware' => ['role:owner']], function () {
    // Users
    Route::get('users')->name('users')->uses('UsersController@index')->middleware('auth');
    Route::post('users')->name('users.store')->uses('UsersController@store')->middleware('auth');
    Route::get('users/create')->name('users.create')->uses('UsersController@create')->middleware('auth');
    Route::delete('users/{user}')->name('users.destroy')->uses('UsersController@destroy')->middleware('auth');
    Route::put('users/{user}/restore')->name('users.restore')->uses('UsersController@restore')->middleware('auth');

    // Books
    Route::get('my-books')->name('books')->uses('BooksController@index')->middleware('remember', 'auth');
    Route::get('my-books/{book}/edit')->name('books.edit')->uses('BooksController@edit')->middleware('auth');
    Route::get('my-books/create')->name('books.create')->uses('BooksController@create')->middleware('auth');
    Route::post('my-books')->name('books.store')->uses('BooksController@store')->middleware('auth');
    Route::put('my-books/{book}/restore')->name('books.restore')->uses('BooksController@restore')->middleware('auth');
    Route::put('my-books/{book}')->name('books.update')->uses('BooksController@update')->middleware('auth');
    Route::delete('my-books/{book}')->name('books.destroy')->uses('BooksController@destroy')->middleware('auth');
});

Route::group(['middleware' => ['role:user']], function () {
    // Books
    Route::get('meus-livros')->name('livros')->uses('DashboardController@index')->middleware('auth');
    Route::get('meus-livros/adicionar-livro')->name('livros.create')->uses('DashboardController@create')->middleware('auth');

    // Users
    Route::get('users/{user}/edit')->name('users.edit')->uses('UsersController@edit')->middleware('auth');
    Route::put('users/{user}')->name('users.update')->uses('UsersController@update')->middleware('auth');

    // Images
    Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');
});

// 500 error
Route::get('500', function () {
    echo $fail;
});
