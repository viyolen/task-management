<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Enums\TaskStatus;
use App\Enums\TaskPriority;

class TaskFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'status' => fake()->randomElement([TaskStatus::TODO->value, TaskStatus::IN_PROGRESS->value, TaskStatus::DONE->value]),
            'priority' => fake()->randomElement([TaskPriority::LOW->value, TaskPriority::MEDIUM->value, TaskPriority::HIGH->value]),
        ];
    }
}
