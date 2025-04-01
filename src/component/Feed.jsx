import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import BASE_URL from '../utils/constants'
import { addFeed } from '../utils/feedSlice'
import { useSelector } from 'react-redux'
import FeedCards from './FeedCards'


const Feed = () => {
  const feed = useSelector((store)=>store.feed)
  const dispatch = useDispatch;

  const handleFeed = async()=>{
  try{ 
    if(feed) return;
    const res= await axios.get(BASE_URL+"/feed")
    dispatch(addFeed(res))

  }catch(err){
    console.error(err)
  }
}

  useEffect(()=>{
    handleFeed();
  },[])
  return (
    <div>{feed&&<FeedCards/>}</div>
  )

}

export default Feed