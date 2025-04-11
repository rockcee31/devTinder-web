import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL from '../utils/constants';
import { removeFeed } from '../redux/slices/feedSlice';

const FeedCards = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed) 
     console.log(feed)

     const showInterest = async(status,toUserId)=>{
        try{
           const res = await axios.post(BASE_URL+`/request/send/${status}/${toUserId}`,{},{withCredentials:true})
           console.log(res)
           dispatch(removeFeed(toUserId))
        }catch(err){
                console.log(err)
        }
    }

     const ignoreProfile = async(status,toUserId)=>{
        try{
           const res = await axios.post(BASE_URL+`/request/send/${status}/${toUserId}`,{},{withCredentials:true})
           console.log(res)
           dispatch(removeFeed(toUserId))
        }catch(err){
                console.log(err)
        }
    }
    if(!feed) return
    if(feed.length<=0) return (<div><h2>No User To Show</h2></div>)

    return (
        <div>
            <div className="carousel rounded-box w-md">
                {feed.length > 0 ? (
                    feed.map((e, index) =>{ 
                        const {_id} = e;
                        return(
                        <div key={index} className="carousel-item w-full flex flex-col">
                          
                            <img 
                                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"
                                className="w-full h-1/2"
                                alt="Tailwind CSS Carousel component"
                            />
          
                            <div className=''>
                            <h1 className=" text-xl font-bold">Name : {e.name.toUpperCase()}</h1>
                            {e.age && e.gender && <h1  className=" text-xl font-bold">Age & Gender : {`${e.age} ${e.gender}`}</h1>}
                            <h1  className=" text-xl font-bold">Skills : {e.skills ? e.skills: "N/A"}</h1>
                            </div>

                            <div className='flex justify-end mx-2'>
                            <button className="btn btn-error mx-2" onClick={()=>{ignoreProfile("ignored",_id)}}>Ignore</button>
                            <button className="btn btn-primary mx-2" onClick={()=>{showInterest("interested",_id)}}>Interested</button>
                            </div>         
                        </div>
                    )})
                ) : (
                    <div className="text-center">No feed available</div>
                )}
            </div>
        </div>
    );
}

export default FeedCards;
