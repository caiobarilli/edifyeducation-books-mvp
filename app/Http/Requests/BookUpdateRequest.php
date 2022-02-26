<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'max:50'],
            'author' => ['required', 'max:50'],
            'pages' => ['required', 'max:50'],
            'rating' => ['required','between:1,10'],
            'description' => ['nullable'],
            'started_at' => ['nullable'],
            'finished_at' => ['nullable'],
            'photo' => ['nullable', 'image'],
        ];
    }
}
