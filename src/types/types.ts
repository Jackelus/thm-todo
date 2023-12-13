export type Task = {
  _id: string;
  taskName: string;
  taskStatus?: string | undefined;
  dueDate?: string | undefined;
};

export type Project = {
  _id: string;
  name: string;
  completion: string;
  tasks: Task[] | [];
};
