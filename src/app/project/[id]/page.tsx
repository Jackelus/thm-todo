import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Tasks from '../../ui/Tasks';

type TaskType = {
  id: number;
  title: string;
  status: string;
  dueDate?: string | undefined;
  notes?: string | undefined;
};

export type TaskListProps = {
  id: number;
  name: string;
  tags?: string[];
  notes?: string | undefined;
  completion: string;
  tasks: TaskType[] | [] | undefined;
};

async function getProject(id: string) {
  const res = await fetch(`api/project/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);

  // const handleEditClick = () => {
  //   setIsEditing(true);
  //   // Add your edit logic here
  // };

  return (
    <div className='p-4'>
      <h1>{project.name}</h1>
      {/* <button onClick={handleEditClick}>Edit Project</button> */}
      <Tasks tasks={project.tasks} />
    </div>
  );
}
