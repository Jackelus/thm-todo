import TaskList from './ui/TaskList';

type Todo = {
  text: string;
  complete: boolean;
};

export default function Home() {
  return (
    <>
      <div>THM Task Manager</div>
      <TaskList />
    </>
  );
}

// Creating a new task with all the necessary information
// A user-friendly way to display existing tasks
// The ability to edit or delete tasks.
