import React,{useEffect, useState} from 'react'
import './savedItems.css'
import { Outlet,Link, useLocation, json } from 'react-router-dom';
import Login from '../LoginRegister/Login/login'
import { useLayoutEffect } from 'react';
import  useLoaderData  from 'react-router-dom';
import userData from '../../FireBase_database/userData';
import UserImg from './user.png'
import Item from './item/item'
import firebase from '../../FireBase_database/firebase';
import { QuerySnapshot, collection, doc, onSnapshot, query,updateDoc,deleteDoc} from "firebase/firestore";
import { db } from '../../FireBase_database/firebase';

export default function SavedItems({props}) {
  
  // document.getElementById('userName').innerHTML='Wellcome User';
  // const [userName,setUser]=useState('');
  let [Items,setItems]=useState([1]);
  useEffect(()=>{

    if(sessionStorage.getItem("UserId")!=null&&sessionStorage.getItem('UserId')!=undefined){
    const q=query(collection(db,"UserData/"+sessionStorage.getItem('UserId')+"/Items"));
    const unsub=onSnapshot(q,(querySnapshot)=>{
      let itemArray=[];
      querySnapshot.forEach((doc)=>{
       
        itemArray.push({...doc.data(),id:doc.id});
      })
      setItems(itemArray);
    })
    }
    else{
        setItems([]);
    }
    // return ()=>unsub();
  });
  

  
  const location=useLocation();
  const data=location.state;
//   console.log("Data : "+data);
  let userName='User.';
  let userId='User.';
  if(sessionStorage.getItem('UserId')!=null)
  {
      const user=JSON.parse(sessionStorage.getItem('User'));
      if(user!=null)
      if(user.UserName!=null){
        userName=user.UserName;
      }
      // getItemsFromFireBase();
  }
  
 

  const setType=(type)=>{


  }


  const handleDelete=async(id)=>{
    // console.log("Click on delete."+id);
    await deleteDoc(doc(db,"UserData/"+sessionStorage.getItem('UserId')+"/Items",id))
    .then(()=>{
      
    })
    
    .catch((error)=>{
      alert("Something went wrong.");
    })
    alert("Data delete Sucessfully")
      Items=[];


  }

  

  return (
    <div className='grid'>
    <div className='grid_left'> 
            <div style={{display:'flex'}} className='userData'><img  src={UserImg} /><b style={{margin:"auto",color:'orange'}}>{userName}</b></div>
        {/* <nav className='nav'>
            <li class='home_li'>
                <button className="home_nav_item" onClick={getData("BST")}><a className='a'>Binary Search Tree</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item"><a className='a'>LinkedList</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item" onClick={getData("Queue")}><a className='a'>Queue</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item"><a className='a'>Sample 3</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item"><a className='a'>Sample 4</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item"><a className='a'>Sample 5</a></button>
            </li>
            <li class='home_li'>
                <button class="home_nav_item"><a className='a'>Sample 6</a></button>
            </li>
            
        </nav> */}
    </div>
      <div className='grid_right'  id='itemDiv'>
        { sessionStorage.getItem('UserId')==null? <h2 className='noData'>You Have to Login First <Link to="../login" style={{color:'#0063a0', fontSize:'30px'}} >Goto_Login</Link></h2>:
          
            Items.length==1&&Items[0].title==undefined?<h2 className='noData'>Fetching Data.</h2>:
            
              Items.length==0?<h2 className='noData'>No data available</h2>:
            Items.map((item)=>{
              return  <Item Item={item} handleDelete={handleDelete}/>
            }) 
        }
        {/* <Outlet/> */}
      </div>
  
  </div>
  )
}


