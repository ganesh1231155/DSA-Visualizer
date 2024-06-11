
import React,{  useState,useEffect,useRef } from 'react';
import './BST_Visualizer.css';
import bst from './BstCode';
import { Toast } from 'bootstrap';
import { createRoutesFromChildren, useLocation } from 'react-router-dom';
import firebase from '../../../FireBase_database/firebase';
import Item from '../../Saved/item/item';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../../../FireBase_database/firebase';
import greaterThan from "../../../audioFiles/greater_Than.mp3"
import lessThan from "../../../audioFiles/lessThan.mp3"
import found from "../../../audioFiles/found.mp3"
import deleteValue from "../../../audioFiles/delete.mp3"
import notPresent from "../../../audioFiles/notPresent.mp3"
import insertRight from "../../../audioFiles/insertRight.mp3"
import insertLeft from "../../../audioFiles/insertLeft.mp3"
import rootNode from "../../../audioFiles/rootNode.mp3"
import present from "../../../audioFiles/present.mp3"

export default function BST_Visualizer(props){
  let X=new bst();
  let [able,setAbility]=useState(false);
  const location=useLocation();
  const data=location.state;
  console.log("Data : "+data?.arr);
  let flag=0;
  let [array,setNodes]=useState([]);
  let [inOrderArr,setInorder]=useState([]);
  let [preOrderArr,setPreorder]=useState([]);
  let [postOrderArr,setPostorder]=useState([]);
  useEffect(()=>{
    // buildBST();

  })
  // const data=props?.size;
  // console.log("Data : "+data);
    // const {state}=props.location;
  // console.log("State : "+state);
  // const {data}=state;
  // console.log("Data : "+data);

  // this.setState({data:[120,90,80,130,140,125,100]});

  // if(data!=[]){
  //     data.forEach(element => {
  //       X.insert(element);
  //     });
  // }
  // // printArray();
  // console.log(data);
  
  const newNodeElement = (value) => {
   const elem = document.createElement('div');
   elem.className = 'tree-wrapper';
   elem.innerHTML = `<div id="${value}" class="node-wrapper"><div class="node">${value}</div></div>`;
   return elem;
}

  let root = newNodeElement(array[0]);
  
 const SECOND = 1000;
 const sleep = async (ms) => {
     return new Promise(resolve => setTimeout(resolve, ms));
 } 



 const insertNewValue = async (tree, newValue) => {
      
     const currentNode = tree.querySelector(':scope > .node-wrapper > .node')
     console.log(currentNode);
     const currentValue = Number(currentNode.innerHTML);

     currentNode.innerHTML = newValue > currentValue ? `${newValue} > ${currentValue}` : `${newValue} &#8804 ${currentValue}`;
     currentNode.classList.add('compared')
    //  await sleep(1.6 * SECOND);
    //  currentNode.innerText = currentValue;
    
     if(newValue > currentValue && !tree.querySelector(':scope > .right')) {
        //  await new Audio(greaterThan).play();
        //  await sleep(3*SECOND);
         await new Audio(insertRight).play();
         await sleep(4*SECOND);
         currentNode.innerText = currentValue;
         currentNode.classList.remove('compared');
         
         tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
         tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue));
         tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="edge right-edge"><line x1="0" y1="0" x2="100%" y2="100%"></line></svg>');
         await sleep(SECOND);
        }
        else if(newValue > currentValue) {
          await new Audio(greaterThan).play();
          await sleep(4*SECOND);
          currentNode.classList.remove('compared');
          
          currentNode.innerText = currentValue;
          
          await insertNewValue(tree.querySelector(':scope > .right > .tree-wrapper'), newValue);
        }
        else if(!tree.querySelector(':scope > .left')) {
        // await new Audio(lessThan).play();
        // await sleep(3*SECOND);
        await new Audio(insertLeft).play();
        await sleep(4*SECOND);

         currentNode.classList.remove('compared');
         currentNode.innerText = currentValue;
         tree.insertAdjacentHTML('beforeend', '<div class="left"></div>');
         tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue));
         tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="edge left-edge"><line x1="0" y1="100%" x2="100%" y2="0"></line></svg>')
         await sleep(SECOND);
     }
     else {
      await new Audio(lessThan).play();
      await sleep(4*SECOND);
      currentNode.classList.remove('compared');
      currentNode.innerText = currentValue;
         await insertNewValue(tree.querySelector(':scope > .left > .tree-wrapper'), newValue);
     }
      
 } 
 const display = async (tree, newValue) => {
   const currentNode = tree.querySelector(':scope > .node-wrapper > .node')
   console.log(currentNode);
   const currentValue = Number(currentNode.innerHTML);
  
  //  currentNode.innerText = currentValue;

   if(newValue > currentValue && !tree.querySelector(':scope > .right')) {
       tree.insertAdjacentHTML('beforeend', '<div class="right"></div>');
       tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue));
       tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="edge right-edge"><line x1="0" y1="0" x2="100%" y2="100%"></line></svg>');
   }
   else if(newValue > currentValue) {
     display(tree.querySelector(':scope > .right > .tree-wrapper'), newValue);
   }
   else if(!tree.querySelector(':scope > .left')) {
       tree.insertAdjacentHTML('beforeend', '<div class="left"></div>');
       tree.lastElementChild.insertAdjacentElement('beforeend', newNodeElement(newValue));
       tree.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="edge left-edge"><line x1="0" y1="100%" x2="100%" y2="0"></line></svg>')
   }
   else {
     display(tree.querySelector(':scope > .left > .tree-wrapper'), newValue);
   }
} 


const takeValueToSearch=async() => {
   
 if(array.length>0){
   let value=parseInt(prompt("Enter Value : "));
   if(array.includes(value)){
    if( document.getElementById('bst').innerHTML!='')
    {
      await search(root,value);
    }
    alert(value+" present.");
   }
    else{
      await new Audio(notPresent).play();
    }
 }else{
   alert("Can't perform operation becouse tree is empty.");
 }
  
 }

 const search=async (tree, newValue)=>{
  //  
  console.log("In Search Function.");
     const currentNode = tree.querySelector(':scope > .node-wrapper > .node')
     console.log(currentNode);
     const currentValue = Number(currentNode.innerHTML);
   
     if(newValue==currentValue){
        currentNode.innerHTML = newValue == currentValue ? `${newValue} == ${currentValue}` : `${newValue} != ${currentValue}`;

        currentNode.classList.add('found');
        await new Audio(found).play();
         await sleep(3*SECOND);
        // await sleep(2.0 * SECOND);
        // currentNode.innerText = currentValue;
        currentNode.innerHTML = currentValue;
        currentNode.classList.remove('found');
        return 1;
     }
     else{
       currentNode.innerHTML = newValue > currentValue ? `${newValue} > ${currentValue}` : `${newValue} < ${currentValue}`;

       currentNode.classList.add('compared')
      //  await sleep(1.6 * SECOND);
       
       if(newValue > currentValue && tree.querySelector(':scope > .right')) {
        await new Audio(greaterThan).play();
        await sleep(4*SECOND);
        currentNode.innerText = currentValue;
       currentNode.classList.remove('compared');
          await search(tree.querySelector(':scope > .right > .tree-wrapper'), newValue);
       }
       else if(tree.querySelector(':scope > .left')) {
        await new Audio(lessThan).play();
         await sleep(4*SECOND);
         currentNode.innerText = currentValue;
       currentNode.classList.remove('compared');
          await search(tree.querySelector(':scope > .left > .tree-wrapper'), newValue);
       }
       
     }
    //   
 }

 const searchsucessor=async(tree,newValue)=>{
  const currentNode = tree.querySelector(':scope > .node-wrapper > .node')
  console.log(currentNode);
  const currentValue = Number(currentNode.innerHTML);

  if(newValue===currentValue){

     currentNode.classList.add('foundSucessor');
      await sleep(2.0 * SECOND);
     currentNode.innerText = currentValue;
     currentNode.classList.remove('foundSucessor');
     
     return tree;
  }
  else{
    if(newValue > currentValue && tree.querySelector(':scope > .right')) {
      await searchsucessor(tree.querySelector(':scope > .right > .tree-wrapper'), newValue);
   }
   else if(tree.querySelector(':scope > .left')) {
      await searchsucessor(tree.querySelector(':scope > .left > .tree-wrapper'), newValue);
   }
   
 }
 }

 const checkInorderSucessor=async(value)=>{
    
    let inOrderArr=X.inOrder();
    let index=inOrderArr.indexOf(value);
    let v=inOrderArr.slice(index+1,index+2);
    console.log("CheckInorderSucessorLog1 : "+v);
    await searchsucessor(root,v);
    // if()
 }

 const deleteElement=(value)=>{
  
  //  array=[];
   
   console.log("after Delete Node array : ",array);

   const bst = document.getElementById('bst');
   bst.innerHTML ='';
   if(array.length>0){
       root = newNodeElement(array[0]);
       bst.insertAdjacentElement('beforeend', root);
       
       for(let i = 1;i < array.length;i++)
           display(root, array[i]);
   }
 }
 const deleteNode=async()=>{
    
   if(array.length>0){
       console.log("Before Delete Node : ",array);

     let value=parseInt(prompt("Enter Value : "));
      
     if(Number.isInteger(value)&&array.includes(value)){
       await search(root,value);
       await checkInorderSucessor(value);

       await new Audio(deleteValue).play();
       await sleep(3*SECOND);

       X.remove(value);
       array=X.getArray();
       if(document.getElementById('bst').innerHTML!='')
         await deleteElement(value);
     }
     else{
      await new Audio(notPresent).play();
      //  alert(value+" Not present in Tree");
     }
      
   }
   else{
     alert("Can't perform operation becouse tree is empty.");
   }
  //  array=X.getArray();
   printArray();
     
   }

 const insertNewNode=async()=>{
   
   let value=parseInt(document.getElementById('array-input').value);
   if(Number.isInteger(value)){
      if(array.includes(value)){
        await new Audio(present).play();
          await sleep(3*SECOND);
        // alert("Node exist in Tree.");
      }else{
        X.insert(value);
        array=X.getArray();
        if(document.getElementById('bst').innerHTML!=""){
          await insertNewValue(root, value);
        }
        else{
          const bst = document.getElementById('bst');
          bst.innerHTML ='';
          root = newNodeElement(array[0]);
          await new Audio(rootNode).play();
          await sleep(3*SECOND);
          await bst.insertAdjacentElement('beforeend', root);
          console.log(root);
        }
        // alert("Node Inserted Sucessfully.");
        console.log("Node Inserted Sucessfully.");
      }
   }
   else{
    alert("Invalid Isertion.");
   }
   printArray();
    
 }
 const buildBST = async () => {
  
  printArray();
      console.log(array);
     console.log("Type of Array : ",array.type);
     if(!array){
         document.getElementById('input-error').innerHTML = 'Incorrect input!';
         return;
     }
     
     if(array.length>0){
     
      const bst = document.getElementById('bst');

     bst.innerHTML='';
     root = newNodeElement(array[0]);
     await new Audio(rootNode).play();
     await sleep(2*SECOND);

     bst.insertAdjacentElement('beforeend', root);
     console.log(root);
     
     await sleep(SECOND);
     for(let i = 1;i < array.length;i++)
         await insertNewValue(root, array[i]);
     }
     else{
       alert("Can't perform operation becouse tree is empty.");
     }
      
 } 

 const clearTree=()=>{
   if(window.confirm("Are you shore to clear tree?")){
     array=[];
     const bst = document.getElementById('bst');
     bst.innerHTML ='';
    X.clearTree();
    printArray();
   }
 }
 
const printArray=()=>{

  
  
  if(array.length==0){
    inOrderArr=[];
    preOrderArr=[];
    postOrderArr=[];
  }
  else{
    inOrderArr=X.inOrder();
    preOrderArr=X.preOrder();
    postOrderArr=X.postOrder();
  }
  let text="[";
  for(let i=0;i<array.length;i++){
    text+=array[i]+",";
  }
  text+="].";
  if(document.getElementById('inorder')&&inOrderArr){
  document.getElementById('inorder').innerHTML="InOrder : ["+inOrderArr+"]";
  document.getElementById('preorder').innerHTML="PreOrder : ["+preOrderArr+"]";
  document.getElementById('postorder').innerHTML="PostOrder : ["+postOrderArr+"]";
  // document.getElementById('Array').innerHTML="Data : ["+array+"]";

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
              date:d,
              path:"BST"
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
  let item=data?.item;
  (item.data).type=[];
  xyz=item.data;
  console.log(xyz);
  array=xyz;
  array.forEach(element => {
    X.insert(element);
  });
  printArray();
  // buildBST();
}

  return (
    <>

    <div className="container" id="container">
     <h3>Binary Search Tree :</h3>
     <h3></h3>
     <div className='operationButtons'>
     <input type='number' className="array-input" id="array-input" placeholder="Enter a number : "/>
     <div className='buttonDiv'>
     <button className="submit-array" disabled={able} id="submit-array"onClick={buildBST}>Build Binary Search Tree</button>
     <button className="submit-array" disabled={able} id="submit-array"onClick={insertNewNode}>New Node To Tree</button>
     <button className="submit-array" disabled={able} id="submit-array"onClick={takeValueToSearch}>Search Node</button>
     <button className="submit-array" disabled={able} id="submit-array"onClick={deleteNode}>Delete Node</button>
     <button className="submit-array" disabled={able} id="submit-array"onClick={clearTree}>Clear Tree</button>
     <button className="submit-array" disabled={able} id="submit-array"onClick={saveData}>Save</button>
     </div>
     <div className="input-error" id="input-error"></div>
     <h3>Tree Output</h3>
     </div>
     <div>
     {/* <p id='Array'> Data : {"["+array+"]"}</p> */}
     <p id='inorder'>inOrder : {"["+inOrderArr+"]"}</p>
     <p id='preorder'>preOrder : {"["+preOrderArr+"]"}</p>
     <p id='postorder'>postOrder : {"["+postOrderArr+"]"}</p>
     </div>
    
     <div id="bst" className='bst'></div>
    
 </div> 
    </>
  )
}
