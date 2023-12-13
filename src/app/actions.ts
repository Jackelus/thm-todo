'use server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function createProject(formData: FormData) {
  const name = formData.get('projectName');
  const notes = formData.get('projectNotes');

  await fetch('http://localhost:3003/api/project/create-project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      notes,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((json) => Promise.reject(json));
  });
}

export async function createTask(
  formData: FormData,
  project: { id: string; name: string }
) {
  const taskId = formData.get('taskId');
  const taskName = formData.get('taskName');
  const taskStatus = formData.get('taskStatus');
  const dueDate = formData.get('taskDate');

  await fetch(
    `http://localhost:3003/api/project/update-project?projectId=${project.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: {
          _id: taskId,
          taskName,
          taskStatus,
          dueDate,
        },
      }),
    }
  ).then((res) => {
    if (res.ok) {
      revalidatePath(`/project/${project.name}`);
      return res.json();
    }
    return res.json().then((json) => Promise.reject(json));
  });
}

export async function deleteTask(taskId: string, projectId: string) {
  const res = await fetch(
    `http://localhost:3003/api/project/delete-task?projectId=${projectId}&taskId=${taskId}`,
    {
      method: 'DELETE',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  revalidateTag('project');
  return res.json();
}
