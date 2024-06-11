import React from 'react'
import './login.css';
import {Link} from 'react-router-dom'
import userData from '../../../FireBase_database/userData';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../../FireBase_database/firebase'
// import {getDatabase, onValue, ref } from 'firebase/database'
import setUser from '../../NavBar/navBar.js'
import { useEffect } from '../../NavBar/navBar.js';
export default function login(props) {
     
    let email='';
    let password='';
    const setEmail=(value)=>{
        email=value;
        console.log(email);
    }
    const setPassword=(value)=>{
        password=value;
        console.log(password);
    }
    
    const fetchData=(userId)=>{
        const dataBaseRef=firebase.database();
        try{
             dataBaseRef.ref().child("UserInfo").child(userId).get().then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                  console.log(snapshot.val().Email);
                  let userData={
                    UserId:userId,
                    UserName:snapshot.val().User_name,
                    Email:snapshot.val().Email,
                    Contact:snapshot.val().Contact,
                  }
                 
                  sessionStorage.setItem('User',JSON.stringify(userData));

                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
        
    }
    catch(error ){
        console.log(error);
    }
    }
    
    let user;
    const login=async(e)=>{
        e.preventDefault();
        if(email!=''&&password!='')
        {
            document.getElementById('Loader').style.visibility="visible";

            const auth =getAuth();
            await signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                console.log(userCredential.user);
                let userId=userCredential.user.uid;
                document.getElementById('Loader').style.visibility="hidden";
                alert('Login Sucessful.');

                sessionStorage.setItem('UserId',userId);

                fetchData(userId);
                // process.env.React_App_UserId=userId;
                // console.log("UserId from env : "+process.env.React_App_UserId);
                // userId.preventDefault();
            })
            .catch((error)=>{
                if(error.message=='Firebase: Error (auth/invalid-login-credentials).'){
                    console.log("Invalid Password.");

                    document.getElementById('Loader').style.visibility="hidden";
                    alert("Login Failed");
                    console.log("Code :"+error.code+" message :"+error.message);
                    
                }
                if(error.message=='Firebase: Error (auth/network-request-failed).'){
                    document.getElementById('Loader').style.visibility="hidden";
                    alert("Network Error : NO internet connection.");
                }
                
            });
        }
        else{
            if(email==''&&password=='')
            {
                alert("Enter Email and password.");
            }
            else{ 
                if(email==''){
                    alert("Enter Email.");
                }
                if(password==''){
                    alert("Enter Password.");
                }
            }
        }
    }

  return (
    <div className='frame'>
        <div className='card'>
            <div className='LoginCard'>
                <h2>Login</h2>
                <div className='login'>
                    <form onSubmit={login}>
                        <br/><br/>
                        <label for="uname"><b>Email</b></label><br/>
                        <input type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} className='InputField' name="uname" required/>
                        <br/><br/>
                        <label for="psw"><b>Password</b></label><br/>
                        <input type="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} className='InputField' name="psw" required/>
                        <br/> 
                            <div id='Loader' className='Loader'>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                            </div>
                        <br/>
                        <button type="submit" className='submit'><b>Login</b></button>
                        <br/>
                        <Link to='/register' className='link'><br/>Click here to create account.</Link>
                    </form>
                    <br/>
                    <div><h5>LogIn with</h5></div>
                    
                        <div className='btn-login'>
                            <div className='btn-google'>
                                <button className='google'>
                                    <div className='g'>G</div>
                                    <div className='o1'>o</div>
                                    <div className='o2'>o</div>
                                    <div className='g'>g</div>
                                    <div className='l'>l</div>
                                    <div className='o1'>e</div>
                                </button>
                            </div>
                            <div className='btn-facebook'>
                                <button className='facebook'>
                                    facebook
                                </button>
                            </div>
                            
                        </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

