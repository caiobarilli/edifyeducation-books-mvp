<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'author' => $this->faker->name,
            'pages' => $this->faker->randomNumber(3),
            'rating' => $this->faker->NumberBetween(0, 5),
            'description' => $this->faker->paragraph,
            'started_at' => $this->faker->dateTimeBetween('-30 days', '+30 days'),
            // 'finished_at' => $this->faker->dateTimeBetween('+30 days', '+60 days'),
        ];
    }
}
