import React,{useState} from 'react'
import EditProfile from './EditProfile';
import ProfileView from './ProfileView'

const Profile = () => {
  const [edit,setedit] = useState(false);
  const [showToast,setshowToast] = useState(false)
  return (
    <div>
        <div className='flex items-center justify-around my-20'>

          {edit &&<EditProfile setedit={setedit} setshowToast={setshowToast}/>}
          <ProfileView setedit={setedit}/>
          {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}

        </div>

      
    </div>
  )
}

export default Profile;