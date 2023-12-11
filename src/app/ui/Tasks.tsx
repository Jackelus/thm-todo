type TaskProps = {
  tasks: [{ id: number; title: string; completed: boolean }];
  // toggleTask: (id: number) => void;
};

const Tasks: React.FC<TaskProps> = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type='checkbox'
              checked={task.completed}
              // onChange={() => toggleTask(task.id)}
            />
            <label
              style={{ textDecoration: task.completed ? 'line-through' : '' }}
            >
              {task.title}
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
