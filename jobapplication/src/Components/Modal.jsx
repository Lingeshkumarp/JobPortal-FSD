import React from 'react';
import cancel from '../../../jobapplication/public/cancel.png'
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import Profile from '../Profile';

function handleSuccess() {
  toast.success('Applied Successfully!');
}

const Modal = ({ job, setModal }) => {
  if (!job) return null;
 console.log(job)
 
  return (
 
        <div className='modal bg-white rounded-lg border-2 shadow-lg p-20 w-[400px] h-[450px]'>
          <div className='modal-content'>
            <h2 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{job.title}</h2>
            <p className='text-[#ccc]'>{job.location}</p>
            <p className='mt-2'>{job.desc}</p>
            <p className='text-[14px] py-[1rem] block group-hover:text-white'>{job.company}</p>
            <button onClick={() => setModal(false)}><img className='cancel h-5 w-5 mt-1' src={cancel}/></button>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 mt-5 group-hover/item:text-textColor group-hover:text-white' ><Link to={"/profile"}>Update Profile</Link></button>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 mt-3 group-hover/item:text-textColor group-hover:text-white' onClick={()=>handleSuccess()}>Apply</button>
          </div>
        </div>

  );
};

export default Modal;
