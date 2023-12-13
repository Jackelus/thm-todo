import { useFormStatus } from 'react-dom';
import { createTask } from '@/app/actions';
import { Project, Task } from '@/types/types';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='rounded border-2 border-gray-400 p-1'
      aria-disabled={pending}
    >
      Add Task
    </button>
  );
}

export function AddTaskForm({
  project,
  task,
}: {
  project: Project;
  task?:
    | {
        taskId: string;
        taskName: string;
        taskStatus: string;
        dueDate: Date;
      }
    | {};
}) {
  const { taskId, taskName, taskStatus, dueDate } = task as {
    taskId: string;
    taskName: string;
    taskStatus: string;
    dueDate: Date;
  };
  const { _id: id, name } = project;

  return (
    <div className='flex w-full flex-grow'>
      <form
        className='w-full'
        action={(formData) => {
          createTask(formData, { id, name });
        }}
      >
        <div className='flex justify-around'>
          <div className='min-w-100'>
            <input
              type='hidden'
              id='taskId'
              name='taskId'
              defaultValue={taskId}
            />
            <input
              placeholder='Task name...'
              type='text'
              id='taskName'
              name='taskName'
              defaultValue={taskName}
            />
          </div>
          <div>
            <select id='taskStatus' name='taskStatus' defaultValue={taskStatus}>
              <option value='Todo'>To Do</option>
              <option value='In Progress'>In Progress</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
          <div>
            <input
              type='date'
              id='taskDate'
              name='taskDate'
              defaultValue={dueDate?.toLocaleDateString()}
            />
          </div>
        </div>
        <div className='my-2 flex justify-evenly'>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
