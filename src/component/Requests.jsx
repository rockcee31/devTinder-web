import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../redux/slices/requestSlice'

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request)
  const [showButton,setshowButton] = useState(true)
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true })
      
      dispatch(addRequest(res.data.data))


    } catch (err) {
      console.log(err)
    }
  }
  const updateRequest = async(status,_id) =>{
    try{
      await axios.post(BASE_URL+`/request/review/${status}/${_id}`)

    }catch(err){
        console.log(err)
    }
  }
  useEffect(() => {
    fetchRequests();
  },[])

  if (!requests) return
  console.log(requests)
  if (requests.length === 0) return <h1>NO REQUESTS</h1>
  const requestId = requests._id;
  return (
    <div className=''>
      <h1 className='text-center text-5xl font-bold'>REQUESTS</h1>
      {requests.map((reqobj) => {
        const { _id, name, photoUrl, age, gender, about } = reqobj.fromUserId;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto "
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className='flex justify-between items-center w-full'>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {name}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            { showButton && (
              <div className=''>
            <button className="btn btn-error mx-1" onClick={()=>{updateRequest("rejected",requestId); setshowButton(false)}}>Reject</button>
            <button className="btn btn-primary mx-1" onClick={()=>{updateRequest("accepted",requestId); setshowButton(false)}}>Accept</button>
            </div>)
            }
            </div>
          </div>)
      }
      )}
    </div>)
}

export default Requests