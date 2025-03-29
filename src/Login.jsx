import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';

const Login = () => {
//api wo hota hai jo connection karwata hai req ka server se or server se response laake user  ko de rha hai 
  const dispatch = useDispatch()
  const [emailId,setemailID] = useState("");
  const [password,setpassworrd] = useState("");
 //login to handle api he karega 
const handleLogin = async()=>{
try{
    const res = await axios.post("http://localhost:3000/login",{
      emailId,
      password
    },{withCredentials:true}) //allow server to send response with credentials like cookiee and send back that cookie for otheer api so that we can authenticate
    console.log(res.data)
    dispatch(addUser(res.data))
}catch(err){
  console.log(err)

}
}//when you make api call from x domain to y domain than it gives you cors error(cross origin error and only browser throws this error cause they don't allow it due security reason even the port number matter here if your making call to 7777 from 3000 this also throw error so browser req to be made to same domain and host so we can handle it in api level we can bypass cors in the api level or backend so in login api we can bypass cors so we can use cors middleware provided by exppress 
// u just have to do npm i cors 

// //controlled component first value is set to password means password is controlliing aned when ever we change the value onchange is changing password value

  return (

    <div className='flex items-center justify-center my-20'>
      <div className="card card-dash bg-base-200 w-96 border-4">
        <div className="card-body">

          <h2 className='card-title'>Login</h2>
          {/* Email */}
          <div>
          <span className="fieldset-legend">Email ID</span>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
              <input type="text" placeholder="mail@site.com" required  value={emailId} onChange={(e)=>setemailID(e.target.value)}/>
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>


          {/* password */}
          <div>
          <span className="fieldset-legend">Password</span>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
              <input type="text" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" value={password} onChange={(e)=>setpassworrd(e.target.value)}/> 
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />At least one number
              <br />At least one lowercase letter
              <br />At least one uppercase letter
            </p>
            </div>



          <div className="card-actions justify-center">
            <button className="btn btn-active btn-primary" onClick={handleLogin}>Login</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login


//so after crating ui we will make api call to login we will bw using promise

// when you make this api call  you will get cors error i will just import that cors and use it in app.js in backend  and use it at the top app.use(cors)

// so now when i logged in i got the response back you will cookie is not getting saved cause cors is still not sending credential and our credential from frontend not getting there properly  so inn frontend axios 2nd parameter i have to do withcredential:true and in backen d parameter i have to do credential true

//now when user login i will take him to the feed page lets see how to do  its answer is we will use useNavigate  return navigate("/")


// we will store the data in redux store