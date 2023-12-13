'use client';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { createProject } from '@/app/actions';

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='rounded border-2 border-gray-400 p-1'
      aria-disabled={pending}
    >
      Add Project
    </button>
  );
}

export function AddProjectForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '10px',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className='flex flex-col items-center justify-center '
      onClick={() => setShowForm(true)}
    >
      {showForm ? (
        <form action={createProject}>
          <label htmlFor='projectName'>Project Name</label>
          <input type='text' id='projectName' name='projectName' />
          <label htmlFor='projectNotes'>Project Notes</label>
          <input type='text' id='projectNotes' name='projectNotes' />
          <div className='mt-1 flex justify-evenly'>
            <SubmitButton />
            <button
              className='rounded border-2 border-gray-400 p-1'
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='100'
          height='100'
          viewBox='0 0 50 50'
        >
          <path d='M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z'></path>
        </svg>
      )}
    </div>
  );
}
