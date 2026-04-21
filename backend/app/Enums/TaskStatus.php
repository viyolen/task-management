<?php

namespace App\Enums;

enum TaskStatus: string
{
    case TODO = 'todo';
    case IN_PROGRESS = 'in_progress';
    case DONE = 'done';

    public function label(): string
    {
        return match ($this) {
            self::TODO => 'Yapılacak',
            self::IN_PROGRESS => 'Devam Ediyor',
            self::DONE => 'Tamamlandı',
        };
    }
}
