import TaskList, { TaskListProps } from './ui/TaskList';

const TaksListsData = [
  {
    id: 1,
    name: 'Task List 1',
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
    name: 'Task List 2',
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

const TaskListCard = ({ name, completion, tasks }: Partial<TaskListProps>) => {
  return (
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
  );
};

export default function Home() {
  return (
    <>
      <div>THM Task Manager</div>
      <div className='flex'>
        {TaksListsData.map((taskList) => (
          <TaskListCard
            key={`Tasklist-${taskList.name}-${taskList.id}`}
            name={taskList.name}
            completion={taskList.completion}
            tasks={taskList.tasks}
          />
        ))}
      </div>
    </>
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
