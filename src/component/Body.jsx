import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useSelector } from 'react-redux';

const Body = () => {
  const  dispatch = useDispatch();
  const navigate = useNavigate();
  const userData=useSelector((store)=>store.user)
  const fetchUser = async()=>{
    try{
      
      const profile = await axios.get(BASE_URL+"/profile",{withCredentials:true}); //iss api ko to tabhi call na jayegi jab token hoga hamare paas it is part 3 of ui  matlab jab refresh hoga tab hamara handlelogin walla data erase ho jayega baad mai token kaam aayega
      console.log(profile)
      dispatch(addUser(profile.data));
    }catch(err){
      if(err.status == 401){
        navigate("/Login")
      }
      console.error(err);
    }
  }

  useEffect(()=>{
    if(!userData){
       fetchUser()
    }
  },[])

  return (
    <div >
    <NavBar/>
    
    <Outlet/>
    
    </div>

  
  )
}

export default Body