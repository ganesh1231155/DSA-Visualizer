import React from 'react';
import './Stack_Visualizer.css';
import '../LinkedList/LL_code'
import LinkedList from '../LinkedList/LL_code';
import { useLocation } from 'react-router-dom';
import {db} from "../../../FireBase_database/firebase"
import { collection,addDoc } from 'firebase/firestore';
import S_push from '../../../audioFiles/S_push.mp3'
import S_pop from '../../../audioFiles/S_pop.mp3'
import StackFirst from '../../../audioFiles/StackFirst.mp3'
import StackNewNode from '../../../audioFiles/StackNewNode.mp3'
import StackEmpty from '../../../audioFiles/StackEmpty.mp3'
import StackPop from '../../../audioFiles/StackPop.mp3'

export default function Stack_Visualizer() {

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
    const newNodeElement = (value,add) => {
        const elem = document.createElement('div');
        console.log("Address in newNodeElement() : ",add);
        elem.className = 'S-wrapper';
        elem.innerHTML = `<div id="${value}" class="Snode-wrapper">
                            <div class="node_container">
                            <div class='nodeBody'>
                            <div class="elem">${value}</div>
                            <div class="elem_pointer">${n}</div>
                          </div>
                          <div class="address">${add}</div>
                            </div>
                          </div>`;
        return elem;
     }
     
    const insertNewValue = async (tree, newValue,addrs) => {
      
        const currentNode = tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer')
        console.log(currentNode);
        const currentValue = Number(currentNode.innerHTML);

        console.log("Address is : ",(tree.querySelector(':scope > .node-wrapperll >.node_container> .address')).innerHTML);

        currentNode.innerHTML = isNaN(currentValue)  ?  `NULL`:`${currentValue} != null`;
        currentNode.classList.add('compared','temp')
        await sleep(1.6 * SECOND);
        currentNode.innerText = currentValue;
       
        if( !tree.querySelector(':scope > .right')) {
            // await sleep(3*SECOND);
            currentNode.innerText = currentValue;
            currentNode.classList.remove('compared','temp');
            tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer').innerHTML=addrs;
            tail.innerHTML=addrs;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addrs));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="50%" y1="0%" x2="50%" y2="100%"> ></line><line x1="35%" y1="80%" x2="50%" y2="100%"></line><line x1="65%" y1="80%" x2="50%" y2="100%"></line></svg>');
            await sleep(SECOND);
           }
           else  {
            //  await sleep(4*SECOND);
             currentNode.classList.remove('compared');
             
             currentNode.innerText = currentValue;
             
             await insertNewValue(tree.querySelector(':scope > .right > .ll-wrapper'), newValue,addrs);
           }    
    } 
    
    const display = async (tree, newValue,addr) => {
        console.log("Address in display() : ",addr);
        const currentNode = tree.querySelector(':scope > .Snode-wrapper >.node_container>.nodeBody> .elem_pointer')
        // console.log(currentNode);
        // const currentValue = Number(currentNode.innerHTML);

        // console.log("Address is : ",(tree.querySelector(':scope > .node-wrapperll >.node_container> .address')).innerHTML);

        // currentNode.innerHTML = isNaN(currentValue)  ?  `NULL`:`${currentValue} != null`;
        // currentNode.classList.add('compared','temp')
        // currentNode.innerText = currentValue;
       
        if( !tree.querySelector(':scope > .right')) {
            // currentNode.innerText = currentValue;
            // currentNode.classList.remove('compared','temp');
            tree.querySelector(':scope > .Snode-wrapper >.node_container>.nodeBody> .elem_pointer').innerHTML=addr;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addr));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="50%" y1="0%" x2="50%" y2="100%"> ></line><line x1="35%" y1="80%" x2="50%" y2="100%"></line><line x1="65%" y1="80%" x2="50%" y2="100%"></line></svg>');
           }
           else  {
            //  currentNode.classList.remove('compared');
             
            //  currentNode.innerText = currentValue;
             await display(tree.querySelector(':scope > .right > .S-wrapper'), newValue,addr);
           }    
    } 
    // const buildLL=async()=>{
    //     // array=[11,12,13]
    //     if(array.length!=0)
    //     {
    //       array=[];
    //       addr=[];
    //       [array,addr]=LL.display();
        
        
    //     document.getElementById('headCon').style.visibility="visible";
    //     document.getElementById('tailCon').style.visibility="visible";

    //     head=document.getElementById('head');
    //     tail=document.getElementById('tail');
    //     const bst = document.getElementById('ll');
    //     bst.innerHTML ='';
    //     root = newNodeElement(array[0],100);
    //     // LL.insert(array[0],100)
    //     // addr.push(100);

    //     head.innerHTML="Null";
    //     tail.innerHTML="Null";

    //     await sleep(2*SECOND);
    //     bst.insertAdjacentElement('beforeend', root);
    //     console.log(root);
        
    //     // await sleep(SECOND);
    //     for(let i = 1;i < array.length;i++)
    //     {
    //       console.log(addr[addr.length-1]);
    //       // LL.insert(array[i],getAddress(0));
    //       // addr.push(getAddress(0));
    //       console.log("Addr : ",addr);
    //       console.log("Addr[i] : ",addr[i]);
    //       await insertNewValue(root, array[i],addr[i]);
    //     }
    //   }
    //   else{
    //     alert("Linked List is Empty.");
    //   }
    //     // LL.display();
    // }
    const insertNewElem=async()=>{

      let value=parseInt(document.getElementById('array-input').value);
      if(array.length==0){
        document.getElementById('headCon').style.visibility="visible";
        document.getElementById('tailCon').style.visibility="visible";

        head=document.getElementById('head');
        tail=document.getElementById('tail');
        array.push(value);
        const bst = document.getElementById('ll');
        bst.innerHTML ='';
        root = newNodeElement(array[0],100);
        LL.insert(array[0],100)
        addr.push(100);


        await sleep(2*SECOND);
        bst.insertAdjacentElement('beforeend', root);
        head.innerHTML=addr[0];
        tail.innerHTML=addr[(addr.length)-1];
      }
      else{
      
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
    const deleteElem=async()=>{
      let value=parseInt(prompt("Enter position of node to delete : "));
      if(array.length >=value){
        if(value==1){
          LL.deleteElemStart();
        }
        await search(root,LL.getHead());
        LL.deleteElem(value);
        alert("node Delete sucessfully.");
        displayLL();
        
      }
      else{
        alert("Value not present in linked list.");
      }
    }

    const deleteStart=async()=>{
      if(array.length>0){
        tail.innerHTML=array[0];
        LL.deleteElemStart();
        displayLL();
        await new Audio(StackPop).play();
        await sleep(2.5*SECOND);
        // alert("First node Poped sucessfully.");
      }
      else{
        await new Audio(StackEmpty).play();
        await sleep(2.5*SECOND);
      }
    }
    const deleteEnd=()=>{
      if(array.length!=0){
            LL.deleteElemEnd();
            alert("Last node Delete sucessfully.");
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
        console.log(root);
        await search(root,LL.getHead());
      }
        let value=parseInt(document.getElementById('array-input').value);
        
        if(!isNaN(value))
        {
        array.unshift(value);
        if(array.length==1)
        {
          await new Audio(StackFirst).play();
          await sleep(2.3*SECOND);
          addr.unshift(100);
        }
        else{
          await new Audio(StackNewNode).play();
          await sleep(2.3*SECOND);
          addr.unshift(getAddress(0));
        }
        LL.insertAtStart(value,addr[0]);
        displayLL();
        // await new Audio(S_push).play();
        // await sleep(2.5*SECOND);
        // alert("Node Inserted at First position.");
        }
    }
  
    // const insertAtEnd=async()=>{
    //   if(array.length==0){
    //     insertAtStart();
    //   }
    //   else{
    //     let value=parseInt(prompt("Enter Value of new Node : "));
    //     if(!array.includes(value)){
    //       if(array.length>=10){
    //         alert("Can't Insert, Linked List is full.");
    //       }
    //       else{
    //         array.push(value);
    //         addr.push(getAddress(0));
    //         LL.insert(value,addr[addr.length-1]);
    //         console.log("Array : ",array);
    //         await insertNewValue(root, value,addr[addr.length-1]);
    //       }
    //     }
    //     else{
    //       alert("Element Already exist in LinkedList.")
    //     }
    //   }
    // }

    // const insertAtPos=async()=>{
    //   let pos=parseInt(prompt("Enter Position : "))-1;
    //   console.log(pos);
    //   if(pos==1){
    //     insertAtStart();
    //   }
    //   else if(pos==array.length-1)
    //   {
    //     insertAtEnd();
    //   }
    //   else if(pos<array.length&&pos>0){
    //     let p=addr[pos];
    //     await search(root,p);
    //     let value=parseInt(prompt("Enter Value of new Node : "));
    //     if(array.includes(value)){
    //       alert("Data Already exist in LinkedList.")
    //     }
    //     else{
    //       const address=getAddress(0);
    //       LL.insertAtPosition(pos,value,address);
    //       displayLL();
    //     }
    //   }
    //   else{
    //     alert("Invalid Position.");
    //   }
      
    // }  

    const search=async(tree,pointer)=>{
      const currentNode = tree.querySelector(':scope > .Snode-wrapper >.node_container> .nodeBody ')
      const currentNodeAddr = tree.querySelector(':scope > .Snode-wrapper >.node_container> .address ');
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
          // tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer').innerHTML=addr;
          // tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
          // tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addr));

          // tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="0%" y1="35%" x2="100%" y2="35%"> ></line><line x1="80%" y1="25%" x2="100%" y2="35%"></line><line x1="80%" y1="45%" x2="100%" y2="35%"></line></svg>');
         }
         else  {
          currentNode.classList.remove('compared','temp');
           
          //  currentNode.innerText = currentValue;
           await search(tree.querySelector(':scope > .right > .S-wrapper'),pointer);
         }    
  } 

    
    const displayLL=async()=>{
        [array,addr]=LL.display();
        if(array.length==0)
        {
          const bst = document.getElementById('ll');
          bst.innerHTML ='';
          head.innerHTML="null";
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
        root = newNodeElement(array[0],addr[0]);
        bst.insertAdjacentElement('beforeend', root);
        head.innerHTML=addr[0];
        // tail=addr[addr.length-1];
        console.log("changing value of Tail...");
        // tail.innerHTML=LL.getTail();
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
                  path:"stack"
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
     // buildBST();
    }

    const deleteNode=()=>{

    }
    const peak=async()=>{
      if(array.length>0)
      {
        alert("Peak node is : ",array[0]);
      }
      else
      {
        await new Audio(StackEmpty).play();
        await sleep(2.5*SECOND);
      }
    }


  return (
    <div>
      <h3>Stack :</h3>
      <input type='number' className="array-input" id="array-input" placeholder="Enter a number : "/>
      <button className="submit-array"  id="submit-array"onClick={insertAtStart}>Push</button>
      <button className="submit-array"  id="submit-array"onClick={deleteStart}>Pop</button>
      <button className="submit-array"  id="submit-array"onClick={peak}>Peak</button>
      <button className="submit-array"  id="submit-array"onClick={displayLL}>Build Stack</button>
      <button className="submit-array" id="submit-array"onClick={saveData}>Save</button>
      <div className='main_body'>

        <div style={{width:"60px",visibility:"hidden"}} id="headCon">
          <div className="b"><b>Top</b></div>
          <div className='head' id="head">Null</div>
        </div>

        <div className="ll" id='ll'></div>
        <div style={{width:"60px",visibility:"hidden"}} id="tailCon">
          <div className="b"><b>Last POPED</b></div>
          <div className='tail' id="tail">Null</div>
        </div>
      </div>
    </div>
  )
}
