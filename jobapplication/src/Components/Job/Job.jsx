import { useEffect, useState } from 'react'
import {BiTimeFive} from 'react-icons/bi'
import googleLogo from '../../../public/googleLogo.png'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const Jobs=()=>{
  const nav =useNavigate();
  
  function handleSuccess(){
    toast.success('Applied Successfully!');
  }
  const[image,setImage] = useState();
  const[title,setTitle] = useState();
  const[time,setTime] = useState();
  const[location,setLocation] = useState();
  const[desc,setDesc] = useState();
  const[company,setCompany] = useState();
  const handleData = () => {
    axios.get('http://localhost:4000/data')
    .then(response => {console.log("response",response)})
    .catch(error => console.log(error))
  }
  useEffect(()=>{
    handleData();
  },[])

  // get method
   const[data,setData] = useState([]);
   useEffect(() => {
    axios.get('http://localhost:4000/data')
    .then(response => {
      setData(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.log('Error fetching items:',error)
    })
   },[])
  //
  return(
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

      {
        data.map((value)=>{
          const {title,location,desc,company} = value.id; 
          return(
            <div key={value.id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>
      
          )
        })
      }

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg text-black-500'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>TCS</p>

              <div className='company flex items-center gap-2'>
                <img src={"googleLogo"} alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>Fronend and Backend development</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100  group-hover/item:text-black group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Data Analaytics</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>11h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Amazon</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>SQL databases to support business applications.</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Quality Engineer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>10h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Cognizant
</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>Scaled Ops Associate - Seasonal</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100  group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Java Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>5h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Zoho</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>AX Technical skill profiles also considered for AX Dynamics skills</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Python Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>3h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Infosys</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>Problem-Solving and Solution Development.</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Service Engineer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Tesla</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>Operations, Maintenance & Support</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Data Analaytics</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>7h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Microsoft</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>SQL databases to support business applications.</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100  group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Business Analaytics</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>14h
            </span>
          </span>
          <h6 className='text-[#ccc]'>India</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>Accenture</p>

              <div className='company flex items-center gap-2'>
                <img src="" alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>Design, develop to support business applications.</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-black-100 group-hover/item:text-textColor group-hover:text-white' onClick={handleSuccess}>Apply Now</button>

        </div>

      </div>
    </div>
  )
}

export default Jobs