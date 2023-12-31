'use client';
import { useState } from 'react';
import { AddTaskForm } from './AddTaskForm';
import Modal from './Modal';
import { deleteTask } from '../actions';
import { Project } from '@/types/types';

const Tasks = ({ project }: { project: Project }) => {
  const [showTaskForm, setShowTaskForm] = useState<
    | {
        taskId: string;
        taskName: string;
        taskStatus: string;
        dueDate: string;
      }
    | null
    | {}
  >(null);
  const { tasks, _id: projectId } = project;

  return (
    <div className='w-full rounded'>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            const {
              _id: taskId,
              taskName,
              taskStatus = '',
              dueDate = '',
            } = task;
            return (
              <tr key={`task-${taskName}-${index}`} className='text-center'>
                <td>{taskName}</td>
                <td>{taskStatus}</td>
                <td>{!!dueDate ? new Date(dueDate).toDateString() : '-'}</td>
                <td>
                  <button
                    onClick={() =>
                      setShowTaskForm({ taskId, taskName, taskStatus, dueDate })
                    }
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='20'
                      height='20'
                      viewBox='0 0 32 32'
                    >
                      <path d='M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z'></path>
                    </svg>
                  </button>
                  <button onClick={() => deleteTask(taskId, projectId)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='20'
                      height='20'
                      viewBox='0 0 32 32'
                    >
                      <path d='M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z'></path>
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>
              <div
                className='flex h-full w-full items-center justify-center py-2'
                onClick={() => setShowTaskForm({})}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                >
                  <path d='M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z'></path>
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {showTaskForm && (
        <Modal isOpen={true} onClose={() => setShowTaskForm(null)}>
          <AddTaskForm project={project} task={showTaskForm} />
        </Modal>
      )}
    </div>
  );
};

export default Tasks;
