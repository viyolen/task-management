<?php

namespace App\Services;

use App\Models\Task;
use App\Repositories\Contracts\TaskRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class TaskService
{
    public function __construct(
        protected TaskRepositoryInterface $repository
    ) {}

    public function listTasks(array $filters, int $perPage = 15): LengthAwarePaginator
    {
        return $this->repository->getAllPaginated($filters, $perPage);
    }

    public function createTask(array $data): Task
    {
        return $this->repository->create($data);
    }

    public function updateTask(Task $task, array $data): Task
    {
        return $this->repository->update($task, $data);
    }

    public function deleteTask(Task $task): bool
    {
        return $this->repository->delete($task);
    }
}
