import React from 'react'
import { useSelector } from 'react-redux'
const ProfileView = ({setedit}) => {
    const user = useSelector((store)=>store.user);
    const {name,age,gender,skills,photoUrl} = user 
  return (
    <div className="card bg-base-100 w-96 shadow-sm overflow-hidden">
  <figure >
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>

  <div className="card-body">
    <h2 className="card-title">Profile</h2>
    <p>{name}</p>
    <p>{age+","+gender}</p>
    <p>Skills : {skills ? skills: "N/A"}</p>
    <p>Photo: {photoUrl?photoUrl:"N/A"}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{setedit(true)}}>Edit Profile</button>
    </div>
  </div>
</div>
  )
}

export default ProfileView