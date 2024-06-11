import React from 'react';
import '../LinkedList/LL_Visualizer.css';
import '../LinkedList/LL_code'
import LinkedList from '../LinkedList/LL_code';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../../../FireBase_database/firebase';
import { useLocation } from 'react-router-dom';
import QueueFirst from "../../../audioFiles/QueueFirst.mp3"
import QueueNewNode from "../../../audioFiles/QueueNewNode.mp3"
import TravelQueue from "../../../audioFiles/TravelQueue.mp3"
import DeQueue from "../../../audioFiles/DeQueue.mp3"
import QueueEmpty from "../../../audioFiles/QueueEmpty.mp3"
import QueueDelete from "../../../audioFiles/QueueDelete.mp3"

export default function Queue_Visualizer(props) {

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
        elem.className = 'll-wrapper';
        elem.innerHTML = `<div id="${value}" class="node-wrapperll">
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
            await new Audio(QueueNewNode).play();
            await sleep(2.7*SECOND);
            tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer').innerHTML=addrs;
            tail.innerHTML=addrs;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addrs));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="0%" y1="35%" x2="100%" y2="35%"> </line><line x1="20%" y1="25%" x2="0%" y2="35%"></line><line x1="20%" y1="45%" x2="0%" y2="35%"></line></svg>');
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
        const currentNode = tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer')
        // console.log(currentNode);
        // const currentValue = Number(currentNode.innerHTML);

        // console.log("Address is : ",(tree.querySelector(':scope > .node-wrapperll >.node_container> .address')).innerHTML);

        // currentNode.innerHTML = isNaN(currentValue)  ?  `NULL`:`${currentValue} != null`;
        // currentNode.classList.add('compared','temp')
        // currentNode.innerText = currentValue;
       
        if( !tree.querySelector(':scope > .right')) {
            // currentNode.innerText = currentValue;
            // currentNode.classList.remove('compared','temp');
            tree.querySelector(':scope > .node-wrapperll >.node_container>.nodeBody> .elem_pointer').innerHTML=addr;
            tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
            tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue,addr));

            tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="ll-edge"><line x1="0%" y1="35%" x2="100%" y2="35%"> ></line><line x1="80%" y1="25%" x2="100%" y2="35%"></line><line x1="80%" y1="45%" x2="100%" y2="35%"></line></svg>');
           }
           else  {
            //  currentNode.classList.remove('compared');
             
            //  currentNode.innerText = currentValue;
             await display(tree.querySelector(':scope > .right > .ll-wrapper'), newValue,addr);
           }    
    } 
    const buildQueue=async()=>{
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
        root = newNodeElement(array[0],100);
        // LL.insert(array[0],100)
        // addr.push(100);

        head.innerHTML="Null";
        tail.innerHTML="Null";
        await new Audio(QueueFirst).play();
        await sleep(2.5*SECOND);
        bst.insertAdjacentElement('beforeend', root);
        head.innerHTML=addr[0];
        tail.innerHTML=addr[0];
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
        await new Audio(QueueEmpty).play();
        await sleep(2.5*SECOND);
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

          await new Audio(QueueFirst).play();
          await sleep(2.2*SECOND);
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
              alert("Can't Insert, Queue is full.");
            }
            else{
              array.push(value);
              addr.push(getAddress(0));
              LL.insert(value,addr[addr.length-1]);
              console.log("Array : ",array);
              await new Audio(TravelQueue).play();
              await sleep(2*SECOND);
              await insertNewValue(root, value,addr[addr.length-1]);
            }
          }
          else{
            alert("Element Already exist in Queue.")
          }
        }
    
  }
  else{
    alert("Enter Value to Insert.");
  }
  }
   
    const deleteStart=async()=>{
      if(array.length!=0){
        LL.deleteElemStart();
        // alert("First Element Dequeued sucessfully.");
        await new Audio(DeQueue).play();
        await sleep(2.3*SECOND);
        displayLL();
      }
      else{
        await new Audio(QueueEmpty).play();
        await sleep(2.5*SECOND);
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

    

    const search=async(tree,pointer)=>{
      const currentNode = tree.querySelector(':scope > .node-wrapperll >.node_container> .nodeBody ')
      const currentNodeAddr = tree.querySelector(':scope > .node-wrapperll >.node_container> .address ');
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
           await search(tree.querySelector(':scope > .right > .ll-wrapper'),pointer);
         }    
  } 

    
    const displayLL=async()=>{
        [array,addr]=LL.display();
        if(array.length==0)
        {
          await new Audio(QueueEmpty).play();
          await sleep(2.5*SECOND);
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
                  path:"queue"
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
    const deleteQueue=async()=>{
      const bst = document.getElementById('ll');
      head=document.getElementById('head');
      tail=document.getElementById('tail');
      if(array.length>0)
      {bst.innerText=' ';
      array=[];
      addr=[];
      LL.clearLL();
      tail.innerHTML="null";
      head.innerHTML="null";
      await new Audio(QueueDelete).play();
        await sleep(2.5*SECOND);
      }
      else{
        await new Audio(QueueEmpty).play();
        await sleep(2.5*SECOND);
      }
    }
    
    

  return (
    <div>
      <h3>Queue :</h3>
      <input type='number' className="array-input" id="array-input" placeholder="Enter a number : "/>
      <button className="submit-array"  id="submit-array"onClick={insertNewElem}>EnQueue</button>
      <button className="submit-array"  id="submit-array"onClick={deleteStart}>DeQueue</button>
      <button className="submit-array"  id="submit-array"onClick={buildQueue}>Build Queue</button>
      <button className="submit-array"  id="submit-array"onClick={deleteQueue}>Delete Queue</button>
      <button className="submit-array" id="submit-array"onClick={saveData}>Save</button>

      <div className='main_body'>

        <div style={{width:"60px",visibility:"hidden"}} id="headCon">
          <div className="b"><b>Front</b></div>
          <div className='head' id="head">Null</div>
        </div>

        <div className="ll" id='ll'></div>
        <div style={{width:"60px",visibility:"hidden"}} id="tailCon">
          <div className="b"><b>Rear</b></div>
          <div className='tail' id="tail">Null</div>
        </div>
      </div>
    </div>
  )
}
