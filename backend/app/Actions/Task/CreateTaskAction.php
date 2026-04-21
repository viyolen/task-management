<?php

namespace App\Actions\Task;

use App\Models\Task;
use App\Repositories\Contracts\TaskRepositoryInterface;

class CreateTaskAction
{
    public function __construct(protected TaskRepositoryInterface $repository) {}

    public function execute(array $data): Task
    {
        return $this->repository->create($data);
    }
}
