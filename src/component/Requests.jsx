import axios from 'axios'
import React, { useEffect } from 'react'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests)
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true })
      console.log(res)
      dispatch(addRequest(res.data.data))


    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchRequests();
  })
  if (!requests) return

  if (requests.length == 0) return <h1>NO REQUESTS</h1>
  return (
    <div>
      <h1>REQUESTS</h1>
      {requests.map((reqobj) => {
        const { _id, name, photoUrl, age, gender, about } = reqobj;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {name}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>)
      }
      )}
    </div>)
}

export default Requests