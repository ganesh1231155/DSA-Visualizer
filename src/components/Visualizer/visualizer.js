import React from 'react'
// import '../Home/home.css';
import {Outlet,Link} from 'react-router-dom';
export default function visualizer() {
  return (

    <div className='grid'>
        <div className='grid_left'> 
            <nav className='nav'>
                <li class='home_li'>
                    <Link  to='/visualizer/BST'><button className="home_nav_item"><a className='a'>Binary Search Tree</a></button></Link>
                </li>
                
                <li class='home_li'>
                    <Link  to='./linkedList'><button class="home_nav_item"><a className='a'>Linked List</a></button></Link>
                </li>
                <li class='home_li'>
                    <Link to='./doublyLinkedList'><button class="home_nav_item"><a className='a'>Doubly Linked List</a></button></Link>
                </li>
                <li class='home_li'>
                    <Link to='./queue'><button class="home_nav_item"><a className='a'>Queue</a></button></Link>
                </li>
                <li class='home_li'>
                    <Link to='./stack'><button class="home_nav_item"><a className='a'>Stack</a></button></Link>
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
  )
}
