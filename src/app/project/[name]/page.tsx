import Tasks from '../../components/Tasks';
import { AddTaskForm } from '../../components/AddTaskForm';
import { revalidatePath, revalidateTag } from 'next/cache';

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

async function getProject(name: string) {
  const res = await fetch(
    `http://localhost:3003/api/project/get-project?name=${name}`,
    { next: { tags: ['project'] } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProjectPage({
  params,
}: {
  params: { name: string };
}) {
  const name = params.name;
  const project = await getProject(name);

  // const handleEditClick = () => {
  //   setIsEditing(true);
  //   // Add your edit logic here
  // };

  return (
    <div className='flex w-full gap-2 p-4'>
      <div
        className='w-1/5'
        style={{
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          color: '#000',
          padding: '10px',
        }}
      >
        <h2>{project.name}</h2>
        <p>Notes: {project.notes}</p>
        <p>Progress: {project.completion ?? '0%'}</p>
        {/* <p>Tags: {project.tags?.join(', ')}</p> */}
      </div>
      <div
        className='w-full'
        style={{
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          color: '#000',
        }}
      >
        <Tasks project={project} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}
