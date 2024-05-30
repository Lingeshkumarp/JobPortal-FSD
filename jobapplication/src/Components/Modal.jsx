import React from 'react';
import cancel from '../../../jobapplication/public/cancel.png'

const Modal = ({ job, setModal }) => {
  if (!job) return null;
 console.log(job)
 
  return (
 
        <div className='modal bg-white rounded-lg border-2 shadow-lg p-20 w-[400px] h-[450px]'>
          <div className='modal-content'>
            <h2>{job.title}</h2>
            <p>{job.location}</p>
            <p>{job.desc}</p>
            <p>{job.company}</p>
            <button onClick={() => setModal(false)}><img className='cancel h-5 w-5' src={cancel}/></button>
          </div>
        </div>

  );
};

export default Modal;
