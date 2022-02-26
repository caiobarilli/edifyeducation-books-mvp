<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class BookStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => ['nullable', Rule::exists('users', 'id')->where(function ($query) {
                $query->where('id', Auth::user()->id);
            })],
            'title' => ['required', 'max:50'],
            'author' => ['required', 'max:50'],
            'pages' => ['required', 'max:999999', 'numeric'],
            'rating' => ['required','between:1,10'],
            'description' => ['nullable'],
            'started_at' => ['nullable'],
            'finished_at' => ['nullable'],
            'photo' => ['nullable', 'image'],
        ];
    }
}
