<?php

namespace App\Actions\Task;

use App\Models\Task;
use App\Repositories\Contracts\TaskRepositoryInterface;

class DeleteTaskAction
{
    public function __construct(protected TaskRepositoryInterface $repository) {}

    public function execute(Task $task): bool
    {
        return $this->repository->delete($task);
    }
}
