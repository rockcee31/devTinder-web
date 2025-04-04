import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import BASE_URL from '../utils/constants';
import {addUser} from "../utils/userSlice"

const EditProfile = ({setedit,setshowToast}) => {
    const user = useSelector((store)=>store.user)
   console.log(user)
    const [photoUrl,setphotoUrl] = useState(user?.photo);
    const [name,setname] = useState(user.name)
    // const [skills,setskills] = useState(user.skill)
    const [age,setage] = useState(user.age)
    const [skills,setskills] = useState(user.skills)
    const [gender,setgender] = useState(user.gender)
    const dispatch = useDispatch();
    
    const submitEdit = async() =>{
      try{
      const res = await axios.patch(BASE_URL+"/profile/edit",{
        name,
        age,
        gender,
        photoUrl,
        skills
      },{withCredentials:true})
      
      
      dispatch(addUser(res?.data?.data))
      setshowToast(true);
      setTimeout(() => {
        setshowToast(false);
      }, 3000);
      }catch(err){
        console.log(err)
      }
    }
    
    
  return (
    // <div className='flex items-center justify-center my-20'>

      <div className="card card-dash bg-base-200 w-96 border-4">
        <div className="card-body">

          <h2 className='card-title'>Edit Profile</h2>

          <div>

            <label className='form-control w-full max-w-xs my-2'>
               <div className='label my-1'>
                   <span className='label-text '>Name:</span>
               </div>
               
               <input 
               type="text"
               value={name}
               className='input input-bordered w-full max-w-xs text-gray-500'
               onChange={(e)=>setname(e.target.value)} />
            </label>

            <label className='form-control w-full max-w-xs my-2'>
               <div className='label my-1'>
                   <span className='label-text '>Age:</span>
               </div>
               <input 
               type="number"
               value={age}
               className='input input-bordered w-full max-w-xs text-gray-500'
               onChange={(e)=>setage(e.target.value)} />
            </label>

            <label className='form-control w-full max-w-xs my-2'>
               <div className='label my-1'>
                   <span className='label-text '>Gender:</span>
               </div>
               <input 
               type="text"
               value={gender}
               className='input input-bordered w-full max-w-xs text-gray-500'
               onChange={(e)=>setgender(e.target.value)} />
            </label>

            <label className='form-control w-full max-w-xs my-2'>
               <div className='label my-1'>
                   <span className='label-text '>Photo:</span>
               </div>
               <input 
               type="text"
               value={photoUrl}
               className='input input-bordered w-full max-w-xs text-gray-500'
               onChange={(e)=>setphotoUrl(e.target.value)} />
            </label>

            <label className='form-control w-full max-w-xs my-2'>
               <div className='label my-1'>
                   <span className='label-text'>Skills:</span>
               </div>
               <input 
               type="text"
               value={skills}
               className='input input-bordered w-full max-w-xs text-gray-500'
               onChange={(e)=>setskills(e.target.value)} />
            </label>
            
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-active btn-primary" onClick={()=>{submitEdit(),setedit(true)}}>Submit</button>
          </div>
          
        </div>
      </div>



    // </div>
  )}

export default EditProfile