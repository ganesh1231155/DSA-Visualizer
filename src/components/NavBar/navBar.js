import React, { useEffect, useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom';
import UserImg from '../Saved/user.png'
import firebase from '../../FireBase_database/firebase';
import { Auth } from 'firebase/auth';

export default function NavBar() {
  const toggleDisplay=()=>{
    document.getElementById("Dropdown").classList.toggle("show");
    console.log(0);
    
  }
  
  const handleCallback=(data)=>{
    console.log("From NavBar.JS : "+data);
  
  }
  const [userName,setUser]=useState('');
  // useEffect(()=>{
  //   console.log("In useEffect of nav Bar.");
  //   setUser('');
  //   let temp=sessionStorage.getItem('UserId');
  //   if(temp!=null&&temp!=undefined)
  //   {
  //       const user=JSON.parse(sessionStorage.getItem('User'));
  //       if(user.UserName!=null){
  //         setUser(user.UserName);
  //       }
  //       // getItemsFromFireBase();
  //   }
  //   else{
  //     setUser('');
  //   }
  // },sessionStorage.getItem('UserId'));
 
  const logOut=()=>{
    if(sessionStorage.getItem('UserId')!=null&&sessionStorage.getItem('UserId')!=undefined){
      if(window.confirm('Are you sure to logout? ')==true)
      {
      sessionStorage.removeItem('UserId');
      sessionStorage.removeItem('User');
      alert('LogOut Sucessfully.');
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
          console.log(error);
      });     
      setUser('');
      }
    }
    else{
      alert('Account already loged out.');
    }
  }
  const playSound=()=>{
    console.log("playSound");
    
  }

  return (

     <div style={{backgroundColor:'#242424',width:'100%',display:'flex'}}>
            <nav className="navbar navbar-expand-sm  " >
            {/* <nav className="navbar navbar-dark bg-dark" > */}
              <h1 className="navbar-brand" onClick={playSound}>Tree Tracer</h1>
              
              <nav className="navbar-nav">

                  <li className="nav-item">
                    <Link to='/home' style={{textDecoration: 'none'}}><button className="nav-link" ><a>Home</a></button></Link>
                  </li>

                  <li className="nav-item">
                      <Link to='/visualizer'
                      //  state={{arr:[120,90,80,100,130,125,140]}}
                       style={{textDecoration: 'none'}}><button className="nav-link" ><a>Visualizer</a></button></Link>
                  </li>

                  <li className="nav-item">
                      <Link to='/saved' style={{textDecoration: 'none'}}><button className="nav-link" ><a>Library</a></button></Link>
                  </li>

                  <li className="nav-item_login">
                      <div class="dropdown">
                        <button class="dropbtn"><a style={{fontSize:'20px'}}>Login/SignOut</a></button>
                        <div class="dropdown-content">
                          
                          <b><Link to='../login' style={{textDecoration: 'none'}}><button className="nav-link" ><a>Login</a></button></Link></b>
                          <b><Link style={{textDecoration: 'none'}}><button className="nav-link" onClick={logOut}><a>LogOut</a></button></Link></b>
                        </div>
                      </div>
                  </li>

                  
              </nav>
            </nav>
          
      </div>
     
  )
}



