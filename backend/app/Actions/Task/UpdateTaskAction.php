<?php

namespace App\Actions\Task;

use App\Models\Task;
use App\Repositories\Contracts\TaskRepositoryInterface;

class UpdateTaskAction
{
    public function __construct(protected TaskRepositoryInterface $repository) {}

    public function execute(Task $task, array $data): Task
    {
        return $this->repository->update($task, $data);
    }
}
