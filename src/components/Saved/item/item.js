import React, { useEffect, useState } from 'react'
import './item.css'
import { Link, useActionData } from 'react-router-dom';

const Item = ({Item,handleDelete}) => {

  const [arrx,setArray]=useState([]);
  const [path,setPath]=useState("/visualizer");
  useEffect(()=>{
    
    setArray(Item.data);
    setPath("/visualizer/"+Item.path);
  })
    
    
  return (
    <div className='item'>
        
              <div className='cont'>
                {
                <Link to={path} state={{item:Item}}>
                  <div className='ItemInfo1'>
                    <h6>{Item.title==''?"Title":"Title : "+Item.title}</h6>
                    <p>Data : {Item.data}</p>
                  </div>
                </Link>
                }
                
                  <div className='ItemInfo2'> 
                      <b className='date'>{Item.date==""?"Date.": Item.date}</b>
                      <button className='delete' onClick={()=>handleDelete(Item.id)} >Delete</button>
                  </div>
              </div>
              
    </div>
  )
}

export default Item
