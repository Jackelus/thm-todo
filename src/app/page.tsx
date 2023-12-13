import Link from 'next/link';
import { AddProjectForm } from './components/AddProjectForm';
import { Project, Task } from '@/types/types';

const ProjectCard = ({
  id,
  name,
  completion,
  tasks,
}: {
  id: string;
  name: string;
  completion: string;
  tasks: Task[];
}) => {
  return (
    <Link href={`/project/${name}`}>
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          padding: '10px',
          color: '#000',
        }}
      >
        <div className='mb-2 text-center text-lg uppercase'>{name}</div>
        <p>Progress: {completion ?? '0%'}</p>

        {tasks?.slice(0, 2).map((task) => (
          <div key={task._id}>
            <p>{task.taskName}</p>
            <p>Status: {task.taskStatus}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

async function getProjects() {
  const res = await fetch('http://localhost:3003/api/project/get-projects', {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {projects?.map((project: Project) => (
        <ProjectCard
          key={`Project-${project.name}-${project._id}`}
          name={project.name}
          completion={project.completion}
          tasks={project.tasks}
          id={project._id}
        />
      ))}
      <AddProjectForm />
    </div>
  );
}

// Creating a new task with all the necessary information
// A user-friendly way to display existing tasks
// The ability to edit or delete tasks.

/* TODO: 
    - sort tasks by date, status, etc
    - archieve tasks
    - user management / auth0?
    - overdue tasks?
    - task categories/tags
    - task priority
    - dockerize app?
    - script to run all services
    - status types to enum
    - task search: name or tags
    - Dashboard home page?

*/

/* 
{
  name: 'Task List 1',
  tags: ['tag1', 'tag2'],
  notes: 'Some notes',
  completion: '90%',
  tasks: [{ id: 1, title: 'Task 1', status: false, dueDate: '2021-10-10', notes: 'Some notes'  },
    { id: 2, title: 'Task 2', status: false, dueDate: '2021-10-10' }]
}
*/
