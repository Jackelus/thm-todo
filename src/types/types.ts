export type Task = {
  _id: string;
  taskName: string;
  taskStatus?: string | undefined;
  dueDate?: Date | undefined;
};

export type Project = {
  _id: string;
  name: string;
  completion: string;
  tasks: Task[] | [];
};
