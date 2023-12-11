import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Task from '../../ui/Tasks';

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

async function Tasks({ id }: { id: string }) {
  const tasks = await fetch(`/api/tasks/${id}`).then((res) => res.json());

  return (
    <ul>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <label
            style={{ textDecoration: task.completed ? 'line-through' : '' }}
          >
            {task.title}
          </label>
        </div>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // const [isEditing, setIsEditing] = useState(false);

  // const handleEditClick = () => {
  //   setIsEditing(true);
  //   // Add your edit logic here
  // };

  return (
    <div className='p-4'>
      <h1>{params.id}</h1>
      {/* <button onClick={handleEditClick}>Edit Project</button> */}
      <Tasks id={params.id} />
    </div>
  );
}
