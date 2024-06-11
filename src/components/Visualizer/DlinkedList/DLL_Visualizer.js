import React from 'react';
import './DLL_Visualizer.css';
// import '../LinkedList/LL_Visualizer.css'
import './DLL_code'
import LinkedList from './DLL_code';
import { useLocation } from 'react-router-dom';
import {db} from "../../../FireBase_database/firebase"
import { collection,addDoc,getFirestore } from 'firebase/firestore';

import LL_NewNode from "../../../audioFiles/LL_NewNode.mp3"
import LL_Full from "../../../audioFiles/LL_Full.mp3"
import LL_pos1 from "../../../audioFiles/LL_pos1.mp3"
import LL_posEnd from "../../../audioFiles/LL_posEnd.mp3"
import LL_Travel from "../../../audioFiles/LL_Travel.mp3"
import LL_TravelPos from "../../../audioFiles/LL_TravelPos.mp3"
import LL_NoPosition from "../../../audioFiles/LL_NoPosition.mp3"
import DLLNewNode from "../../../audioFiles/DLLNewNode.mp3"
import DLLInsertS from "../../../audioFiles/DLLInsertS.mp3"
import DLLInsertE from "../../../audioFiles/DLLInsertE.mp3"
import DLLInsertP from "../../../audioFiles/DLLInsertP.mp3"
import DLLDeleteF from "../../../audioFiles/DLLDeleteF.mp3"
import DLLDeleteE from "../../../audioFiles/DLLDeleteE.mp3"
import DLLDeleteP from "../../../audioFiles/DLLDeleteP.mp3"

export default function DLL_Visualizer() {

    const location=useLocation();
    const data=location.state;

    let head,tail,array,root;
    array=[];
    let addr=[];
    let LL=new LinkedList();
    const SECOND = 1000;
    const sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    } 
    let n="null.";
    const newNodeElement = (value,addr,pre) => {
        const elem = document.createElement('div');
        console.log("Address in newNodeElement() : ",addr);
        elem.className = 'dll-wrapper';
        elem.innerHTML = `<div id="${value}" class="node-wrapperdll">
                            <div class="dnode_container">
                            <div class='dnodeBody'>
                            <div class="preelem_pointer">${pre}</div>
                            <div class="elem">${value}</div>
                            <div class="elem_pointer">${n}</div>
                          </div>
                          <div class="address">${addr}</div>
                            </div>
                          </div>`;
        return elem;
     }
     
    const insertNewValue = async (tree, newValue,addrs) => {
      
        const currentNode = tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .elem_pointer')
        const currentNodepre = tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .preelem_pointer')
        console.log(currentNode);
        const currentValue = Number(currentNode.innerHTML);

        console.log("Address is : ",(tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .address')).innerHTML);

        currentNode.innerHTML = isNaN(currentValue)  ?  `NULL`:`${currentValue} != null`;
        currentNode.classList.add('compared','temp');
        await sleep(1.6 * SECOND);
        currentNode.innerText = currentValue;
       
        if( !tree.querySelector(':scope > .right')) {
            // await sleep(3*SECOND);
            currentNode.innerText = currentValue;
            currentNode.classList.remove('compared','temp');
            await new Audio(DLLNewNode).play();
            await sleep(6.5*SECOND);
            tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .elem_pointer').innerHTML=addrs;
            tail.innerHTML=addrs;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            let previous=Number(tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .address').innerHTML);
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addrs,previous));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"></line><line x1="0%" y1="15%" x2="100%" y2="15%"> ></line><line x1="0%" y1="55%" x2="100%" y2="55%"> ></line><line x1="80%" y1="5%" x2="100%" y2="15%"></line><line x1="80%" y1="25%" x2="100%" y2="15%"></line><line x1="0%" y1="55%" x2="20%" y2="45%"></line><line x1="0%" y1="55%" x2="20%" y2="65%"></line></svg>');
            await sleep(SECOND);
           }
           else  {
            //  await sleep(4*SECOND);
             currentNode.classList.remove('compared','temp');
             
             currentNode.innerText = currentValue;
             
             await insertNewValue(tree.querySelector(':scope > .right > .dll-wrapper'), newValue,addrs);
           }    
    } 
    
    const display = async (tree, newValue,addr) => {
        console.log("Address in display() : ",addr);
        const currentNode = tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .elem_pointer')
        // console.log(currentNode);
        // const currentValue = Number(currentNode.innerHTML);

        // console.log("Address is : ",(tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .address')).innerHTML);

        // currentNode.innerHTML = isNaN(currentValue)  ?  `NULL`:`${currentValue} != null`;
        // currentNode.classList.add('compared','temp')
        // currentNode.innerText = currentValue;
       
        if( !tree.querySelector(':scope > .right')) {
            // currentNode.innerText = currentValue;
            // currentNode.classList.remove('compared','temp');
            tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .elem_pointer').innerHTML=addr;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            let previous=tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .address').innerHTML;
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addr,previous));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"></line><line x1="0%" y1="15%" x2="100%" y2="15%"> ></line><line x1="0%" y1="55%" x2="100%" y2="55%"> ></line><line x1="80%" y1="5%" x2="100%" y2="15%"></line><line x1="80%" y1="25%" x2="100%" y2="15%"></line><line x1="0%" y1="55%" x2="20%" y2="45%"></line><line x1="0%" y1="55%" x2="20%" y2="65%"></line></svg>');
           }
           else  {
            //  currentNode.classList.remove('compared');
             
            //  currentNode.innerText = currentValue;
             await display(tree.querySelector(':scope > .right > .ll-wrapper'), newValue,addr);
           }    
    } 
    const buildLL=async()=>{
        // array=[11,12,13]
        if(array.length!=0)
        {
          array=[];
          addr=[];
          [array,addr]=LL.display();
        
        
        document.getElementById('headCon').style.visibility="visible";
        document.getElementById('tailCon').style.visibility="visible";

        head=document.getElementById('head');
        tail=document.getElementById('tail');
        const bst = document.getElementById('ll');
        bst.innerHTML ='';
        root = newNodeElement(array[0],100,"null");
        // LL.insert(array[0],100)
        // addr.push(100);

        head.innerHTML="Null";
        tail.innerHTML="Null";

        await sleep(2*SECOND);
        bst.insertAdjacentElement('beforeend', root);
        console.log(root);
        
        // await sleep(SECOND);
        for(let i = 1;i < array.length;i++)
        {
          console.log(addr[addr.length-1]);
          // LL.insert(array[i],getAddress(0));
          // addr.push(getAddress(0));
          console.log("Addr : ",addr);
          console.log("Addr[i] : ",addr[i]);
          await insertNewValue(root, array[i],addr[i]);
        }
      }
      else{
        alert("Linked List is Empty.");
      }
        // LL.display();
    }
    const insertNewElem=async()=>{

      let value=parseInt(document.getElementById('array-input').value);
      if(Number.isInteger(value))
      {
      if(array.length==0){
        document.getElementById('headCon').style.visibility="visible";
        document.getElementById('tailCon').style.visibility="visible";

        head=document.getElementById('head');
        tail=document.getElementById('tail');
        array.push(value);
        const bst = document.getElementById('ll');
        bst.innerHTML ='';
        await new Audio(LL_NewNode).play();
        await sleep(2.5*SECOND);

        root = newNodeElement(array[0],100,"null");
        LL.insert(array[0],100)
        addr.push(100);


        await sleep(2*SECOND);
        bst.insertAdjacentElement('beforeend', root);
        head.innerHTML=addr[0];
        tail.innerHTML=addr[(addr.length)-1];
      }
      else{
      
      // if(!array.includes(value)){
        if(array.length>=10){
          await new Audio(LL_Full).play();
          await sleep(2*SECOND);
        }
        else{
          array.push(value);
          addr.push(getAddress(0));
          LL.insert(value,addr[addr.length-1]);
          console.log("Array : ",array);
          await new Audio(LL_Travel).play();
          await sleep(2*SECOND);
          await insertNewValue(root, value,addr[addr.length-1]);
        }
      // }
      // else{
      //   alert("Element Already exist in LinkedList.")
      // }
    }
  }else{
    alert("Invalid Input.");
  }
    }
    const deleteElem=async()=>{
      let value=parseInt(prompt("Enter position of node to delete : "));
      if(array.length >=value){
        if(value==1){
          LL.deleteElemStart();
        }
        await new Audio(LL_TravelPos).play();
        await sleep(2*SECOND);
        await search(root,LL.getHead());
        await new Audio(DLLDeleteP).play();
        await sleep(3*SECOND);
        LL.deleteElem(value);
        alert("node Delete sucessfully.");
        displayLL();
        
      }
      else{
        await new Audio(LL_NoPosition).play();
        await sleep(3*SECOND);
      }
    }

    const deleteStart=async()=>{
      if(array.length!=0){

        LL.deleteElemStart();
        await new Audio(DLLDeleteF).play();
        await sleep(2*SECOND);
        // alert("First node Delete sucessfully.");
        displayLL();
      }
      else{
        alert("Linked List is Empty.");
      }
    }
    const deleteEnd=async()=>{
      if(array.length!=0){
            await new Audio(LL_Travel).play();
            await sleep(2*SECOND);
            await search(root,LL.getTail());
            LL.deleteElemEnd();
            await new Audio(DLLDeleteE).play();
            await sleep(2*SECOND);
            displayLL();
      }
      else{
        console.log("linked list is empty.");
      }
    }
    const insertAtStart=async()=>{
      console.log(LL.isNull());
      if(!LL.isNull())
      {
        await search(root,LL.getHead());
      }
        let value=parseInt(prompt("Enter Value of new Node : "));
        if(!isNaN(value))
        {
        array.unshift(value);
        if(array.length==1)
        {
          addr.unshift(100);
        }
        else{
          addr.unshift(getAddress(0));
        }
        await new Audio(DLLInsertS).play();
        await sleep(2*SECOND);
        LL.insertAtStart(value,addr[0]);
        alert("Node Inserted at First position.");
        displayLL();
        }
      
    }
    const insertAtEnd=async()=>{
      if(array.length==0){
        insertAtStart();
      }
      else{
        let value=parseInt(prompt("Enter Value of new Node : "));
        await new Audio(LL_Travel).play();
        await sleep(2*SECOND);
        if(!array.includes(value)){
          if(array.length>=10){
            alert("Can't Insert, Linked List is full.");
          }
          else{
            array.push(value);
            addr.push(getAddress(0));
            LL.insert(value,addr[addr.length-1]);
            console.log("Array : ",array);
            
            await insertNewValue(root, value,addr[addr.length-1]);
          }
        }
        else{
          alert("Element Already exist in LinkedList.")
        }
      }
    }

    const insertAtPos=async()=>{
      let pos=parseInt(prompt("Enter Position : "))-1;
      console.log(pos);
      if(pos==1){
        await new Audio(LL_pos1).play();
        await sleep(2*SECOND);
        insertAtStart();
      }
      else if(pos==array.length-1)
      {
        await new Audio(LL_posEnd).play();
        await sleep(2*SECOND);
        insertAtEnd();
      }
      else if(pos<array.length&&pos>0){
        let p=addr[pos];
        await new Audio(LL_TravelPos).play();
        await sleep(2*SECOND);
        await search(root,p);
        let value=parseInt(prompt("Enter Value of new Node : "));
        if(array.includes(value)){
          alert("Data Already exist in LinkedList.")
        }
        else{
          await new Audio(DLLInsertP).play();
          await sleep(5*SECOND);
          const address=getAddress(0);
          LL.insertAtPosition(pos,value,address);
          displayLL();
        }
      }
      else{
        await new Audio(LL_NoPosition).play();
        await sleep(2*SECOND);
      }
      
    }

    const search=async(tree,pointer)=>{
      const currentNode = tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .dnodeBody ')
      const currentNodeAddr = tree.querySelector(':scope > .node-wrapperdll >.dnode_container> .address ');
      console.log("Current node Address : ",Number(currentNodeAddr.innerHTML));
      // const currentValue = Number(currentNode.innerHTML);


      currentNode.classList.add('compared','temp');
      await sleep(2 * SECOND);

      if(Number(currentNodeAddr.innerHTML)==pointer){
        await currentNode.classList.remove('compared','temp');
        return ;
      }
      // currentNode.innerText = currentValue;
     
      if( !tree.querySelector(':scope > .right')) {
          // currentNode.innerText = currentValue;
          currentNode.classList.remove('compared','temp');
          // tree.querySelector(':scope > .node-wrapperdll >.dnode_container>.dnodeBody> .elem_pointer').innerHTML=addr;
          // tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
          // tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addr));

          // tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="0%" y1="35%" x2="100%" y2="35%"> ></line><line x1="80%" y1="25%" x2="100%" y2="35%"></line><line x1="80%" y1="45%" x2="100%" y2="35%"></line></svg>');
         }
         else  {
          currentNode.classList.remove('compared','temp');
           
          //  currentNode.innerText = currentValue;
           await search(tree.querySelector(':scope > .right > .ll-wrapper'),pointer);
         }    
  } 

    
    const displayLL=async()=>{
        [array,addr]=LL.display();
        if(array.length==0)
        {
          alert("Linked List is Empty.");
        }
        else{
        console.log("value of  array in displayLL : ",array);
        console.log("Address array in displayLL : ",addr);
        document.getElementById('headCon').style.visibility="visible";
        document.getElementById('tailCon').style.visibility="visible";

        head=document.getElementById('head');
        tail=document.getElementById('tail');
        const bst = document.getElementById('ll');
        bst.innerHTML ='';
        root = newNodeElement(array[0],addr[0],"null");
        bst.insertAdjacentElement('beforeend', root);
        head.innerHTML=addr[0];
        // tail=addr[addr.length-1];
        console.log("changing value of Tail...");
        tail.innerHTML=LL.getTail();
        console.log("Root : ",root);
        
        for(let i = 1;i < array.length;i++)
        {
          await display(root, array[i],addr[i]);
          console.log("elme : ",array[i]," Address : ",addr[i]);
          
        }
      }
    }

    const getAddress=(a)=>{
      if(addr.includes(addr[addr.length-1]+100+a)){
        console.log("Array includes : ",addr[addr.length-1]+100+a);
        return getAddress(a+100);
      }
      else{
        console.log("Array not includes : ",addr[addr.length-1]+100+a);
        return addr[addr.length-1]+100+a;
      }
    }


    const saveData=async()=>{
   
      try{
        // let userId=JSON.parse(localStorage.getItem("User")).UserId;
          let userId=sessionStorage.getItem("UserId");
      
        console.log("User ID :"+userId);
        if(userId!=null||userId!=undefined){
      
          let date=new Date();
          let d=date.getDate()+":"+date.getMonth()+":"+date.getFullYear();
          let title=prompt("Enter Title  : ");
          if(title!=''){
            if(title!=null){
                await addDoc(collection(db,"UserData/"+userId+"/Items"),{
                  title:title,
                  data:array,
                  address:addr,
                  date:d,
                  path:"doublyLinkedList"
                }
                ).then()
                .catch((error)=>{
                  alert("Error : "+error.message);
                });
                await alert("Data Uploaded Sucessfully.")
            }
        }else{
          alert("Can't Uplaod Invalid Title.")
        }
      
        }
        else{
          alert("Login your account to save.");
        }
        
        }
        catch(error){
            console.log("Error :"+error);
            alert(error.message);
        }
         
    }

    if(data?.item!=undefined){
      let xyz=[];
      let abc=[];
      let item=data?.item;
      (item.data).type=[];
      (item.address).type=[];
      xyz=item.data;
      abc=item.address;
      console.log(xyz);
      array=xyz;
      addr=abc;

      for(let i=0;i<array.length;i++){
        LL.insert(array[i],addr[i]);
      }
    }



  return (
    <div>
      <h3>Doubly Linked List :</h3>
      <input type='number' className="array-input" id="array-input" placeholder="Enter a number : "/>
      <button className="submit-array"  id="submit-array"onClick={insertNewElem}>New Element</button>
      <button className="submit-array"  id="submit-array"onClick={insertAtStart}>Insert At Start</button>
      <button className="submit-array"  id="submit-array"onClick={insertAtPos}>Insert At Position</button>
      <button className="submit-array"  id="submit-array"onClick={insertAtEnd}>Insert At End</button>
      <button className="submit-array"  id="submit-array"onClick={deleteStart}>Delete from Start</button>
      <button className="submit-array"  id="submit-array"onClick={deleteElem}>Delete at position</button>
      <button className="submit-array"  id="submit-array"onClick={deleteEnd}>Delete from End</button>
   
      <button className="submit-array" id="submit-array"onClick={buildLL}>Build Linked List</button>
      <button className="submit-array" id="submit-array"onClick={displayLL}>display Linked List</button>
      <button className="submit-array" id="submit-array"onClick={saveData}>Save</button>
      <div className='main_body'>

        <div style={{width:"60px",visibility:"hidden"}} id="headCon">
          <div className="b"><b>Head</b></div>
          <div className='head' id="head">Null</div>
        </div>

        <div className="ll" id='ll'></div>
        <div style={{width:"60px",visibility:"hidden"}} id="tailCon">
          <div className="b"><b>Tail</b></div>
          <div className='tail' id="tail">Null</div>
        </div>
      </div>
    </div>
  )
}
