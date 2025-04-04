import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BASE_URL from '../utils/constants'
import { addConnections } from '../redux/slices/connectionSlice'
import { Link } from 'react-router-dom';

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections)
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", { withCredentials: true })
      console.log(res.data)
      dispatch(addConnections(res.data))
      
    } catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    fetchConnection()

  },[])
  if (!connections) return;

  if (connections.length === 0) return <h1> No Connections Found</h1>;
  return (
    <div className=''>
      <h1 className='text-center text-5xl font-bold'>Connections</h1>


      {connections.map((connection) => {
        const { _id, name, photoUrl, age, gender, about } = connection;

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
            
            <div className='flex justify-between w-full items-center'>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {name.toUpperCase()}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>

            <div>
            <Link to={"/chat/" + _id}>
              <button className="btn btn-primary">Chat</button>
            </Link>
            </div>

            </div>
          </div>
        )
      }
      )}

    </div>)
}



export default Connections