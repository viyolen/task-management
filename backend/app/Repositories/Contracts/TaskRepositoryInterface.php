<?php

namespace App\Repositories\Contracts;

use App\Models\Task;
use Illuminate\Pagination\LengthAwarePaginator;

interface TaskRepositoryInterface
{
    /**
     * Tüm görevleri veya filtrelenmiş görevleri sayfalı getirir.
     * @param array $filters (status, priority vb.)
     * @param int $perPage
     * @return LengthAwarePaginator
     */
    public function getAllPaginated(array $filters = [], int $perPage = 15): LengthAwarePaginator;

    /**
     * Yeni görev oluşturur.
     * @param array $data
     * @return Task
     */
    public function create(array $data): Task;

    /**
     * Mevcut bir görevi günceller.
     * @param Task $task
     * @param array $data
     * @return Task
     */
    public function update(Task $task, array $data): Task;

    /**
     * Görevi siler.
     * @param Task $task
     * @return bool
     */
    public function delete(Task $task): bool;
}
