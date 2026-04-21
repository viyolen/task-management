export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface EnumType {
  value: string;
  label: string;
}

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: EnumType;
  priority: EnumType;
  created_at: string;
  updated_at: string;
}

export interface TaskResponse {
  data: Task[];
  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface SingleTaskResponse {
  data: Task;
}
