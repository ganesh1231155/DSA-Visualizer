import React from 'react'
import './BST_Concepts.css';
import bst_img from './bst.jpg';
import copyImg from './blueCopy.png';
export default function BST_Concepts() {
  let codeInC="#include <stdio.h><br>#include <stdlib.h>";
   
  let str="";
   function changeCode(e,msg) {
      if(msg==="C"){
            document.getElementById('code').innerHTML="";
            document.getElementById('code').innerHTML="j huvhdj ns<br/>khfvghieun<br/>kl bfhbA Binary Search Tree (BST) <br/>is a hierarchical data<br/> structure <br/>used<br/> in computer sci<br/>ence and ma<br/>thematics to<br/> organize and<br/> store a colle<br/>ctionof elements, t<br/>ypically numbe<br/>rs or other com<br/>parable items. It is<br/> a specialized f<br/>orm of a binary tree <br/><p className='x'>where each node h<br/>as at most two child</p><br/>ren, and it follow<br/>s a specific orde<br/>ring property that make<br/>s it efficient for<br/>searching, inserting,<br/> and deleting <br/>elements.";
      }
      if(msg==="C++"){
        document.getElementById('code').innerHTML="";
        document.getElementById('code').innerHTML=codeInC;
      }
  }
  function copyCode(){
    
    let string=document.getElementById('code').innerText;
    navigator.clipboard.writeText(string);
    alert("Code copied to clipboard.");
  }

  return (
    <div className='container'>

      <div className='mian'>
          <h1 style={{fontSize:'30px;'}}>Binary Search Tree</h1>
          <div className='info'>
          <p> &emsp;&emsp;&emsp; A Binary Search Tree (BST) is a hierarchical data structure 
            used in computer science and mathematics to organize and store a collection
             of elements, typically numbers or other comparable items. It is a specialized 
             form of a binary tree where each node has at most two children, and it follows 
             a specific ordering property that makes it efficient for searching, inserting, 
             and deleting elements.<br/></p>
             <h3>Binary Tree Structure :<br/></h3><p>&emsp;&emsp;&emsp;A BST is composed of nodes, where each node has,
              at most, two children. These children are referred to as the left child and the
               right child. A node in a BST can have zero children (a leaf node), one child, 
               or two children.</p>


            <h3>Ordering Property :<br/></h3>
            <p>&emsp;The fundamental property of a BST is that for each node:<br/>
               &emsp;&emsp;1.All nodes in its left subtree have values less than or equal to the node's value.<br/>
              &emsp;&emsp;2.All nodes in its right subtree have values greater than the node's value.<br/>
              This property ensures that the elements in a BST are organized in a way that makes searching for a specific value more efficient.
            </p>

         <h3>In-Order Traversal:<br/></h3>
            <p>&emsp;&emsp;&emsp;An in-order traversal of a BST visits all nodes in ascending order. It starts from the
               leftmost node (the node with the smallest value) and visits the nodes in a sorted order, followed
                by the right subtree. In other words, the in-order traversal yields the elements in the BST in sorted order.<br/>

              &emsp;&emsp;&emsp;In an in-order traversal, you start at the root node and visit the nodes in the following order:<br/>
              &emsp;&emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.Visit the left subtree.<br/>
              &emsp;&emsp;&emsp;2.Visit the current node.<br/>
              &emsp;&emsp;&emsp;3.Visit the right subtree.</b><br/>
            This traversal method is named "in-order" because it visits the nodes in ascending order when applied to a Binary Search Tree. In other words, it gives you the elements of the BST in sorted order.
            </p>
            <div className='orderInfo'>

                <img className="imgTree"src={bst_img}/><br/>
                <div>
                    <b className='orderInfo_item'>In-Order Traversal : [ 80 , 90 , 100 , 120 , 125 , 135 , 140 ]</b><br/><br/>
                    <b className='orderInfo_item'>Root-Node : 120.</b><br/><br/>
                    <b className='orderInfo_item'>Min-Node : 80</b><br/><br/>
                    <b className='orderInfo_item'>Max-Node : 140</b><br/><br/>
                </div>
            </div>
            <br/><br/>
            <h3>Pre-Order Traversal:<br/></h3>
            <p>&emsp;In a pre-order traversal, you start at the root node and visit the nodes in the following order:
              <br/>
              &emsp;&emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.Visit the current node.<br/>
              &emsp;&emsp;&emsp;2.Visit the left subtree.<br/>
              &emsp;&emsp;&emsp;3.Visit the right subtree.</b><br/>
              This traversal method is named "pre-order" because it visits the current node before its children.
            </p>
            <div className='orderInfo'>

               <img className="imgTree"src={bst_img}/><br/>
                <div>
                    <b className='orderInfo_item'>Pre-Order Traversal : [ 120 , 90 , 80 , 100 , 135 , 125 , 140 ]</b><br/><br/>
                    <b className='orderInfo_item'>Root-Node : 120.</b><br/><br/>
                    <b className='orderInfo_item'>Min-Node : 80</b><br/><br/>
                    <b className='orderInfo_item'>Max-Node : 140</b><br/><br/>
                </div>
            </div>
            
            <br/><br/>
            <h3>Post-Order Traversal:<br/></h3>
            <p>&emsp;In a post-order traversal, you start at the root node and visit the nodes in the following order:
              <br/>
              &emsp;&emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.Visit the left subtree.<br/>
              &emsp;&emsp;&emsp;2.Visit the right subtree.<br/>
              &emsp;&emsp;&emsp;3.Visit the current node.</b><br/>
              This traversal method is named "post-order" because it visits the current node after its children.
            </p>
            <div className='orderInfo'>
                  <img className="imgTree"src={bst_img}/><br/>
                  <div>
                      <b className='orderInfo_item'>Post-Order Traversal : [ 120 , 90 , 80 , 100 , 135 , 125 , 140 ]</b><br/><br/>
                      <b className='orderInfo_item'>Root-Node : 120.</b><br/><br/>
                      <b className='orderInfo_item'>Min-Node : 80</b><br/><br/>
                      <b className='orderInfo_item'>Max-Node : 140</b><br/><br/>
                  </div>
            </div>

            <br/><br/>
            <div className='codeArea'>
                  <div className='codeAreaButtons' >
                  <img className='copyImg'src={copyImg} onClick={copyCode}/>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "C")}>C</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "C++")}>C++</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "Java")}>Java</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "JavaScript")}>JavaScript</button>
                  </div>
                  <div className='codeDiv'>
                      <p className='code' id='code'></p>
                  </div>
            </div>
            <br/>
            {/* <br/> */}
            <h3>Insert Node:<br/></h3>
            <p>
              &emsp;&emsp;&emsp;To insert a value into a BST, you start at the root and traverse the tree following the ordering 
              property. When you reach a leaf node where you should insert the new value, you create a new node with
               that value and attach it as the left or right child of the leaf node, depending on the comparison of values.<br/>
              &emsp;To insert a value into a Binary Search Tree (BST), you can follow these steps:
              <br/>
              &emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.Checks whether the root is null, which means the tree is empty. It will add the new node as root.<br/>
              &emsp;&emsp;&emsp;2.Else, Start at the root node.<br/>
              &emsp;&emsp;&emsp;3.Compare the value you want to insert with the value of the current node.<br/>
              &emsp;&emsp;&emsp;4.If the value is less than the current node's value, move to the left child.<br/>
              &emsp;&emsp;&emsp;5.If the value is greater than the current node's value, move to the right child.<br/>
              &emsp;&emsp;&emsp;6.Repeat steps 2-4 until you reach a node with no left or right child, depending on whether you should insert &emsp;&emsp;&emsp; as the left or right child of this node.<br/>
              &emsp;&emsp;&emsp;7.Insert the new value as a new node at the appropriate position.</b><br/>
            </p>
           

            <h3>Delete Node:<br/></h3>
            <p>
              &emsp;&emsp;&emsp;Deleting a node from a Binary Search Tree (BST) can be a bit more complex than 
              inserting a node because you need to consider different cases based on the number of children the
               node to be deleted has.<br/>
              &emsp;To delete node(value) from a Binary Search Tree (BST), you can follow these steps:
              <br/>
              

              &emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.If the node to be deleted has no children (a leaf node), it simply removes the node.<br/>
              &emsp;&emsp;&emsp;2.If the node has one child, it replaces the node with its child.<br/>
              &emsp;&emsp;&emsp;3.If the node has two children, it finds the inorder successor (the smallest node in the right subtree),
               copies its &emsp;&emsp;&emsp;value to the node to be deleted, and then recursively deletes the inorder successor.</b><br/>
            </p>
           

            <h3>Search Node:<br/></h3>
            <p>
              &emsp;&emsp;&emsp;Searching for a specific value in a Binary Search Tree (BST) is a fundamental operation, and it's
               one of the key advantages of using a BST due to its efficient search capabilities.<br/>
              &emsp;Here's how you can perform a search operation in a BST:
              <br/>
              &emsp;&emsp;&emsp;<b style={{fontSize:'20px'}}>1.checks whether the root is null, which means the tree is empty.<br/>
              &emsp;&emsp;&emsp;2.Else, Start at the root node.<br/>
              &emsp;&emsp;&emsp;3.Compare the value you're searching for with the value of the current node.<br/>
              &emsp;&emsp;&emsp;4.If the values match, you've found the target value, and the search is successful.<br/>
              &emsp;&emsp;&emsp;5.If the value you're searching for is less than the current node's value, move to the left child and repeat<br/>&emsp;&emsp;&emsp; the process.<br/>
              &emsp;&emsp;&emsp;6.If the value is greater than the current node's value, move to the right child and repeat the process.<br/>
              &emsp;&emsp;&emsp;7.Continue steps 2-5 until you either find the target value or reach a leaf node,indicating that the value is<br/>&emsp;&emsp;&emsp; not in the BST.</b><br/>
            </p>
           

            

            </div>
            <br/><br/><br/><br/><br/>  
          
          </div>
      </div>
      
 

  )
}
