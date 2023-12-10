type TaskProps = {
  task: { id: number; title: string; completed: boolean };
  toggleTask: (id: number) => void;
};

const Task: React.FC<TaskProps> = ({ task, toggleTask }) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <label style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.title}
      </label>
    </div>
  );
};

export default Task;
