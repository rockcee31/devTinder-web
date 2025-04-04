import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import BASE_URL from '../utils/constants'
import { addFeed } from '../redux/slices/feedSlice'
import { useSelector } from 'react-redux'
import FeedCards from './FeedCards'


const Feed = () => {
  const feed = useSelector((store)=>store.feed)
  const dispatch = useDispatch();

  const handleFeed = async()=>{
  try{ 
    if(feed) return;
    const res= await axios.get(BASE_URL+"/feed",{withCredentials:true})
    dispatch(addFeed(res.data))
    // console.log(res)

  }catch(err){
    console.error(err)
  }
}

  useEffect(()=>{
    handleFeed();
  },[])

  return (
    feed&&(<div className='flex justify-center my-10'>
      <FeedCards/>
    </div>)
  )

}

export default Feed