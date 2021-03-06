<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BookCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id',
            'title',
            'author',
            'pages',
            'rating',
            'description',
            'started_at',
            'finished_at',
            'photo',
            'deleted_at',
            'user'
        );
    }
}
