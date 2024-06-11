import React,{  useState,useEffect,useRef } from 'react';
import BST from '../Visualizer/BST/BST_Visualizer';
// import Saved from '../Saved/savedItems.js';
import NavBar from '../NavBar/navBar.1.js';
import './home.css';
import {BrowserRouter as Router,Link,Route,Routes, Outlet} from 'react-router-dom';
import less from '../../audioFiles/lessThan.mp3'
function Home() {
    // let audio=new Audio(less);
    //  audio.play();
    


return (
 <div className='grid'>
  <div className='grid_left'> 
      <nav className='nav'>
        
          <li class='home_li'>
              <Link  to='./BST_Concept'><button className="home_nav_item"><a className='a'>Binary Search Tree</a></button></Link>
          </li>
          <li class='home_li'>
              <Link  to='/home/LL_Concept'><button class="home_nav_item"><a className='a'>Linked List</a></button></Link>
          </li>
          <li class='home_li'>
              <Link to='/home/DLL_Concept'><button class="home_nav_item"><a className='a'>Dubbly Linked List</a></button></Link>
          </li>
          <li class='home_li'>
              <Link to='/home/Queue_Concept'><button class="home_nav_item"><a className='a'>Queue</a></button></Link>
          </li>
          <li class='home_li'>
              <Link to='/home/Stack_Concept'><button class="home_nav_item"><a className='a'>Stack</a></button></Link>
          </li>
          <li class='home_li'>
              <Link to=''><button class="home_nav_item"><a className='a'>Sample 5</a></button></Link>
          </li>
          <li class='home_li'>
              <Link to=''><button class="home_nav_item"><a className='a'>Sample 6</a></button></Link>
          </li>
          
      </nav>
  </div>
    <div className='grid_right'>
        <Outlet/>
    </div>

</div>
);

}

export default Home;
