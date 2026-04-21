<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_tasks()
    {
        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/v1/tasks');

        $response->assertStatus(200)
                 ->assertJsonCount(3, 'data');
    }

    public function test_can_create_task()
    {
        $payload = [
            'title' => 'Test Title',
            'description' => 'Test Desc',
            'status' => 'todo',
            'priority' => 'high'
        ];

        $response = $this->postJson('/api/v1/tasks', $payload);

        $response->assertStatus(201)
                 ->assertJsonPath('data.title', 'Test Title');
    }
}
