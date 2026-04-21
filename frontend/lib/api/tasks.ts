import { Task, TaskResponse, SingleTaskResponse } from '@/types/task';

// SSR (Server Component) container-to-container haberleşirken Docker DNS'i kullanmalı, Client ise tarayıcı localhost'unu.
const isServer = typeof window === 'undefined';
const API_BASE_URL = isServer 
  ? 'http://nginx/api/v1' 
  : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1');

export const getTasks = async (status?: string, priority?: string): Promise<TaskResponse> => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  if (priority) params.append('priority', priority);

  const res = await fetch(`${API_BASE_URL}/tasks?${params.toString()}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Görevler getirilirken hata oluştu.');
  }

  return res.json();
};

export const createTask = async (data: Partial<Task>): Promise<SingleTaskResponse> => {
  const res = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Görev eklenirken hata oluştu.');
  }

  return res.json();
};

export const updateTask = async (id: number, data: Partial<Task>): Promise<SingleTaskResponse> => {
  const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Görev güncellenirken hata oluştu.');
  return res.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Görev silinirken hata oluştu.');
};
