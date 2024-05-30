import { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import googleLogo from '../../../public/googleLogo.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../Modal';
import { ToastIcon } from 'react-hot-toast';

const Jobs = () => {
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); 

  function handleSuccess(job) {
    setSelectedJob(job);
    setModal(true);
    // toast.success('Applied Successfully!');
   
  }

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://jobportal-fsd.onrender.com/data')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error fetching items:', error);
      });
  }, []);

  return (
    <div className='relative'>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {modal && selectedJob && (
        <div className='flex items-center absolute  w-full h-full bg-white bg-opacity-30 justify-center '>
        <Modal setModal={setModal} job ={selectedJob} />
        </div>
        )}
        {data.map((value) => {
          const { title, location, desc, company, _id } = value.id;
          return (
            <div key={_id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive /> Now
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
              <div className='company flex items-center gap-2'>
                <img src={googleLogo} alt="Company Logo" className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <button
                className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white'
                onClick={() => handleSuccess(value.id)}
              >
                Apply Now
              </button>
              
            </div>
          );
        })}
      </div>
      
      
    </div>
  );
};

export default Jobs;
