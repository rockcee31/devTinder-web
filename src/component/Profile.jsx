import React,{useState} from 'react'
import EditProfile from './EditProfile';
import ProfileView from './ProfileView'

const Profile = () => {
  const [edit,setedit] = useState(false);
  
  return (
    <div>
        <div className='flex items-center justify-around my-20'>

          {edit &&<EditProfile setedit={setedit}/>}
          <ProfileView setedit={setedit}/>
        </div>

      
    </div>
  )
}

export default Profile;