import TaskList, { TaskListProps } from './project/[id]';
import Link from 'next/link';

const ProjectsData = [
  {
    id: 1,
    name: 'Project 1',
    tags: ['tag1', 'tag2'],
    notes: 'Some notes',
    completion: '90%',
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        status: 'In Progress',
        dueDate: '2021-10-10',
        notes: 'Some notes',
      },
      { id: 2, title: 'Task 2', status: 'In Progress', dueDate: '2021-10-10' },
    ],
  },
  {
    id: 2,
    name: 'Project 2',
    tags: ['tag1', 'tag2'],
    notes: 'Some notes',
    completion: '90%',
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        status: 'In Progress',
        dueDate: '2021-10-10',
        notes: 'Some notes',
      },
      { id: 2, title: 'Task 2', status: 'In Progress', dueDate: '2021-10-10' },
    ],
  },
];

const ProjectCard = ({
  id,
  name,
  completion,
  tasks,
}: Partial<TaskListProps>) => {
  return (
    <Link href={`/project/${id}`}>
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          padding: '10px',
          margin: '10px',
          color: '#000',
        }}
      >
        <h3>{name}</h3>
        <p>Completion: {completion}</p>
        <h4>Tasks:</h4>
        {tasks?.slice(0, 2).map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className='flex'>
      {ProjectsData.map((project) => (
        <ProjectCard
          key={`Project-${project.name}-${project.id}`}
          name={project.name}
          completion={project.completion}
          tasks={project.tasks}
          id={project.id}
        />
      ))}
    </div>
  );
}

// Creating a new task with all the necessary information
// A user-friendly way to display existing tasks
// The ability to edit or delete tasks.

/* TODO: 
    - form to create new task
    - form to add new list of tasks
    - page to display all tasks of a tasklist
    - sort tasks by date, status, etc
    - archieve tasks
    - page to display all tasklists
    - user management / auth0?
    - due date for tasks
    - overdue tasks?
    - task categories/tags
    - task priority
    - task notes
    - task status
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
