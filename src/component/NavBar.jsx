import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BASE_URL from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async()=>{
    try{
      await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
      dispatch(removeUser())
      navigate("/login")
    }catch(err){
      console.log(err.message)
    }
  }
  const user = useSelector((store)=>store.user)
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <h2 className="btn btn-ghost text-xl"><Link to="/">🧑‍💻DevTinder </Link></h2>
  </div>
  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    <div className="dropdown dropdown-end mr-5">
      <div className='flex items-center'>
      {user&&<div className='px-5 font-bold'>
        <h2>WELCOME {user.name.toUpperCase()}!</h2>
        </div>}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar