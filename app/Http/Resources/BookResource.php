<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'pages' => $this->pages,
            'rating' => $this->rating,
            'description' => $this->description,
            'started_at' => $this->started_at,
            'finished_at' => $this->finished_at,
            'photo' => $this->photo,
            'deleted_at' => $this->deleted_at,
            'user_id' => $this->user_id,
        ];
    }
}
