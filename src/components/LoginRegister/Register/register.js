import React,{  useState,useEffect,useRef } from 'react';

import {Link} from 'react-router-dom'
import './register.css'
import firebase from '../../../FireBase_database/firebase'
import userData from '../../../FireBase_database/userData'
    


export default function register() {
    let userName='';
    let email='';
    let password='';
    let comPassword='';
    let contact='';
    // console.log(userData().getEmail());
    // let userData=userData();
    

    
    console.log(email);
    
    const setUserName=(e)=>{
        userName=e;
        console.log(e);
    }
    const setEmail=(e)=>{
        email=e;
        console.log(e);
    }
    const setPassword=(e)=>{
        password=e;
        console.log(e);
    }
    const setContact=(e)=>{
        contact=e;
        console.log(e);
    }
    const setComPassword=(e)=>{
        comPassword=e;
        console.log(e);
    }
    
    const uploadData=async(uid,email,userName,contact)=>{
        let data={
            User_name:userName,
            Email:email,
            Contact:contact 
        }
        try{
            const dataBaseRef=firebase.database();
            let isSucess=dataBaseRef.ref().child("UserInfo").child(uid).set(data);
            if(isSucess){
                console.log("Data uploaded Sucessfully. "+isSucess);
            }
            else{
                console.log("Something went wrong. "+isSucess);
                uploadData(uid,email,userName,contact);
            }
        }
        catch(error){
            console.log("Error : "+error);
        }

    }

    const register=async(e)=>{
        document.getElementById('Loader').style.visibility="visible";
        e.preventDefault();
        try{
            if(password===comPassword && email!=''&& password!=''&&userName!=''&&contact!=''){
                let userCredential= await firebase.auth().createUserWithEmailAndPassword(email,password);
                if(userCredential){
                    uploadData(userCredential.user.uid,email,userName,contact);

                }
                console.log(userCredential.user.uid);                   
                alert("Account created sucessfully.");
            }
            else{
                alert("Incurect password confirmation. Enter valid confirmed password.");
            }
            
        }
        catch(error){
            if(error=='FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use).')
                alert('Email address is already use by another account.');
            // console.log("Error Type :"+error.message);
            // alert(error.message);
        }
        document.getElementById('Loader').style.visibility="hidden";
    }

  return (
    <div className='frame'>
       
    <div className='card2'>
        <div className='RegCard'>
            <h2>Registration</h2>
            <div className='register'>
                <form onSubmit={register}>
                    <br/>
                    <label for="uName"><b>User Name</b></label><br/>
                    <input type="userName" placeholder="Enter User Name" className='InputField' name="uName"  onChange={(e)=>setUserName(e.target.value)} required/>
                    <br/>
                    <label for="email"><b>Email</b></label><br/>
                    <input type="email" placeholder="Enter Email" className='InputField' name="emial"  onChange={(e)=>setEmail(e.target.value)} required/>
                    <br/>
                    <label for="contact"><b>Contact</b></label><br/>
                    <input type="tel" placeholder="contact" pattern='[0-9]{10}' className='InputField' name="contact" onChange={(e)=>setContact(e.target.value)} required/>
                    <br/>
                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" className='InputField' name="psw" onChange={(e)=>setPassword(e.target.value)} required/>
                    <br/>
                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" className='InputField' name="psw" onChange={(e)=>setComPassword(e.target.value)} required/>
                    <br/> 
                            <div id='Loader' className='Loader'>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                                <div className='bar'></div>
                            </div>
                    <br/>
                    <button type='submit' id='button' className='submit' onClick={register}><b>Register.</b></button>
                    <br/>
                    <Link to='/saved/login'  className='link'><br/>Click here to Login.</Link>

                </form>
            </div>
        
        </div>
    </div>
</div>
  )
}
