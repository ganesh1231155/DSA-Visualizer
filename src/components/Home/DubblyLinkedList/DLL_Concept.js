import React from 'react'
import '../BST/BST_Concepts.css';
import '../linkedList/LL_Concepts.css';
import bst_img from '../BST/bst.jpg';
import copyImg from '../BST/blueCopy.png';
import LL_Structure from './DLL_Structure.png';
export default function DLL_Concepts() {
  let codeInC="#include <stdio.h><br>#include <stdlib.h>";
   
  let str="";
   function changeCode(e,msg) {
    //   if(msg==="C"){
    //         document.getElementById('code').innerHTML="";
    //         document.getElementById('code').innerHTML="j huvhdj ns<br/>khfvghieun<br/>kl bfhbA Binary Search Tree (BST) <br/>is a hierarchical data<br/> structure <br/>used<br/> in computer sci<br/>ence and ma<br/>thematics to<br/> organize and<br/> store a colle<br/>ctionof elements, t<br/>ypically numbe<br/>rs or other com<br/>parable items. It is<br/> a specialized f<br/>orm of a binary tree <br/><p className='x'>where each node h<br/>as at most two child</p><br/>ren, and it follow<br/>s a specific orde<br/>ring property that make<br/>s it efficient for<br/>searching, inserting,<br/> and deleting <br/>elements.";
    //   }
    //   if(msg==="C++"){
    //     document.getElementById('code').innerHTML="";
    //     document.getElementById('code').innerHTML=codeInC;
    //   }
    alert("Code not available.");

  }
  function copyCode(){
    
    let string=document.getElementById('code').innerText;
    navigator.clipboard.writeText(string);
    alert("Code copied to clipboard.");
  }

  return (
    <div className='container'>

      <div className='mian'>
          <h1 style={{fontSize:'30px;'}}>Dubbly Linked List</h1>
          <div className='info'>
          <p> &emsp;&emsp;&emsp;A doubly linked list is a more complex data structure than a singly linked list,
             but it offers several advantages. The main advantage of a doubly linked list is that it allows for
              efficient traversal of the list in both directions. This is because each node in the list contains 
              a pointer to the previous node and a pointer to the next node. This allows for quick and easy
               insertion and deletion of nodes from the list, as well as efficient traversal of the list in both
                directions.
                <br/></p>
             <h3>Dubbly Linked List Structure :<br/></h3><p>&emsp;&emsp;&emsp; In a data structure, a doubly linked list is represented using nodes that have three fields:<br/>
            &emsp;&emsp;&emsp;  1.Data<br/>
            &emsp;&emsp;&emsp;  2.A pointer to the next node (next)<br/>
            &emsp;&emsp;&emsp;  3.A pointer to the previous node (prev).<br/></p>
            <img className="imgll"src={LL_Structure}/><br/>


            <h3>Use of Dubbly Linked List :<br/></h3>
            <p>&emsp;&emsp;&emsp; 1. The list is not required to be contiguously present in the memory. The node can reside any where in the memory and linked together to make a&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;  list. This achieves optimized utilization of space.<br/>
            &emsp;&emsp;&emsp; 2. list size is limited to the memory size and doesn't need to be declared in advance.<br/>
            &emsp;&emsp;&emsp; 3. Empty node can not be present in the linked list.<br/>
            &emsp;&emsp;&emsp; 4. We can store values of primitive types or objects in the singly linked list.<br/>
            </p>

         <h3>Why use linked list over array?<br/></h3>
            <p>&emsp;&emsp;&emsp;Till now, we were using array data structure to organize the group of elements
                 that are to be stored individually in the memory. However, Array has several advantages and
                  disadvantages which must be known in order to decide the data structure which will be used
                   throughout the program.<br/><br/>

Array contains following limitations:
<br/>
&emsp;&emsp;&emsp;1. The size of array must be known in advance before using it in the program.<br/><br/>
&emsp;&emsp;&emsp;2. Increasing size of the array is a time taking process. It is almost impossible to expand the size of the array at run time.<br/><br/>
&emsp;&emsp;&emsp;3. All the elements in the array need to be contiguously stored in the memory. Inserting any element in the array needs shifting of all its predecessors.<br/><br/>
Linked list is the data structure which can overcome all the limitations of an array. Using linked list is useful because,
<br/>
&emsp;&emsp;&emsp;1. It allocates the memory dynamically. All the nodes of linked list are non-contiguously stored in the memory and linked together with the help<br/>&emsp;&emsp;&emsp; of pointers.<br/><br/>
&emsp;&emsp;&emsp;2. Sizing is no longer a problem since we do not need to define its size at the time of declaration. List grows as per the program's demand and limited<br/>&emsp;&emsp;&emsp; to the available memory space.</p>
           <h3>Node Creation</h3>
           <div className='codeArea'>
                <div className='codeDiv'>
                    <p className='code'>
                    class Node &#123;<br/>
                    &emsp;constructor(data) &#123;<br/>
                    &emsp;&emsp;this.data = data;<br/>
                    &emsp;&emsp;this.next = null;<br/>
                    &emsp;&emsp;this.prev = null;<br/>
                    &emsp;&#125;<br/>
                        &#125;
                    </p>    
                    </div>
           </div>
           <br/>
           <h3>Operations on Singly Linked List : </h3>
           <br/>
            <table>
                <tbody><tr>
                <th className='th_srno'>SN</th>
                <th className='th_operation'>Operation</th>
                <th className='th_description'>Description </th>
                </tr>
                <tr>
                <td>1</td>
                <td><a href="insertion-in-doubly-linked-list-at-beginning">Insertion at beginning</a></td>
                <td>Adding the node into the linked list at beginning. </td>
                </tr>
                <tr>
                <td>2</td>
                <td><a href="insertion-in-doubly-linked-list-at-the-end">Insertion at end</a></td>
                <td>Adding the node into the linked list to the end. </td>
                </tr>
                <tr>
                <td>3</td>
                <td><a href="insertion-in-doubly-linked-list-after-specified-node">Insertion after specified node</a></td>
                <td>Adding the node into the linked list after the specified node. </td>
                </tr>
                <tr>
                <td>4</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">Deletion at beginning</a></td>
                <td>Removing the node from beginning of the list </td>
                </tr>
                <tr>
                <td>5</td>
                <td><a href="deletion-in-doubly-linked-list-at-the-end">Deletion at the end</a></td>
                <td>Removing the node from end of the list. </td>
                </tr>
                <tr>
                <td>6</td>
                <td><a href="deletion-in-doubly-linked-list-after-the-specified-node">Deletion of the node having given data</a></td>
                <td>Removing the node which is present just after the node containing the given data. </td>
                </tr>
                <tr>
                <td>7</td>
                <td><a href="searching-in-doubly-linked-list">Searching</a></td>
                <td>Comparing each node data with the item to be searched and return the location of the item in the list if the item found else return null. </td>
                </tr>
                <tr>
                <td>8</td>
                <td><a href="traversing-in-doubly-linked-list">Traversing</a></td>
                <td>Visiting each node of the list at least once in order to perform some specific operation like searching, sorting, display, etc. </td>
                </tr>
                </tbody>
            </table><br/>
            <div className='codeArea'>
                  <div className='codeAreaButtons' >
                  <img className='copyImg'src={copyImg} onClick={copyCode}/>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "C")}>C</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "C++")}>C++</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "Java")}>Java</button>
                  <button className='codeAreaButton' onClick={(event) => changeCode(event, "JavaScript")}>JavaScript</button>
                  </div>
                  <div className='codeDiv'>
                      <p className='code' id='code'>
                      class Node &#123;<br/>
    constructor(data) &#123;<br/>
        this.data = data;<br/>
        this.next = null;<br/>
        this.prev = null;<br/>
    &#125;<br/>
&#125;<br/>

class LinkedList &#123;<br/>
    constructor() &#123;<br/>
        this.head = null;<br/>
    &#125;<br/>

    // Add at End

    addAtEnd(data) &#123;<br/>
        const newNode = new Node(data);<br/>
        if (this.head === null) &#123;<br/>
            this.head = newNode;<br/>
        &#125; else &#123;<br/>
            let current = this.head;<br/>
            while (current.next !== null) &#123;<br/>
                current = current.next;<br/>
            &#125;<br/>
            current.next = newNode;<br/>
        &#125;<br/>
    &#125;<br/>

    // Add at Beginning
    
    addAtBeginning(data) &#123;<br/>
        const newNode = new Node(data);<br/>
        newNode.next = this.head;<br/>
        this.head = newNode;<br/>
    &#125;<br/>

    // Add at a Specific Position
    addAtPosition(data, position) &#123;<br/>
        if (position&lt;0) &#123;<br/>
            console.error("Position should be a non-negative integer.");<br/>
            return;<br/>
        &#125;<br/>
        const newNode = new Node(data);<br/>
        if (position === 0) &#123;<br/>
            newNode.next = this.head;<br/>
            this.head = newNode;<br/>
            return;<br/>
        &#125;<br/>
        let current = this.head;<br/>
        let prev = null;<br/>
        let index = 0;<br/>
        while (current !== null && index&lt;position) &#123;<br/>
            prev = current;<br/>
            current = current.next;<br/>
            index++;<br/>
        &#125;<br/>
        if (prev !== null) &#123;<br/>
            prev.next = newNode;<br/>
            newNode.next = current;<br/>
        &#125;<br/>
    &#125;<br/>

    // Delete from Beginning
    deleteFromBeginning() &#123;<br/>
        if (this.head === null) &#123;<br/>
            console.error("List is empty.");<br/>
            return;<br/>
        &#125;<br/>
        this.head = this.head.next;<br/>
    &#125;<br/>

    // Delete from End
    deleteFromEnd() &#123;<br/>
        if (this.head === null) &#123;<br/>
            console.error("List is empty.");<br/>
            return;<br/>
        &#125;<br/>
        if (this.head.next === null) &#123;<br/>
            this.head = null;<br/>
            return;<br/>
        &#125;<br/>
        let current = this.head;<br/>
        let prev = null;<br/>
        while (current.next !== null) &#123;<br/>
            prev = current;<br/>
            current = current.next;<br/>
        &#125;<br/>
        if (prev !== null) &#123v;<br/>
            prev.next = null;<br/>
        &#125;<br/>
    &#125;<br/>

    // Delete from a Specific Position
    deleteFromPosition(position) &#123;<br/>
        if (position&lt;0) &#123;<br/>
            console.error("Position should be a non-negative integer.");<br/>
            return;<br/>
        &#125;<br/>
        if (this.head === null) &#123;<br/>
            console.error("List is empty.");<br/>
            return;<br/>
        &#125;<br/>
        if (position === 0) &#123;<br/>
            this.head = this.head.next;<br/>
            return;<br/>
        &#125;<br/>
        let current = this.head;<br/>
        let prev = null;<br/>
        let index = 0;<br/>
        while (current !== null && index&lt;position) &#123;<br/>
            prev = current;<br/>
            current = current.next;<br/>
            index++;<br/>
        &#125;<br/>
        if (prev !== null && current !== null) &#123;<br/>
            prev.next = current.next;<br/>
        &#125;<br/>
    &#125;<br/>
    
    // Search for an Element
    search(data) &#123;<br/>
        let current = this.head;<br/>
        let index = 0;<br/>
        while (current !== null) &#123;<br/>
            if (current.data === data) &#123;<br/>
                return index;<br/>
            &#125;<br/>
            current = current.next;<br/>
            index++;<br/>
        &#125;<br/>
        return -1; // Element not found<br/>
    &#125;<br/>

    // Print the list (helper method to visualize the list)
    printList() &#123;<br/>
        let current = this.head;<br/>
        let list = [];<br/>
        while (current !== null) &#123;<br/>
            list.push(current.data);<br/>
            current = current.next;<br/>
        &#125;<br/>
        console.log(list.join("&#8594; "));<br/>
    &#125;<br/>
&#125;<br/>

// Example usage:
const ll = new LinkedList();<br/>
ll.addAtEnd(10);<br/>
ll.addAtEnd(20);<br/>
ll.addAtBeginning(5);<br/>
ll.addAtPosition(15, 2);<br/>
ll.printList(); // 5&#8594; 10&#8594; 15&#8594; 20<br/>
ll.deleteFromBeginning();<br/>
ll.printList(); // 10&#8594; 15&#8594; 20v
ll.deleteFromEnd();<br/>
ll.printList(); // 10&#8594; 15<br/>
ll.deleteFromPosition(1);<br/>
ll.printList(); // 10<br/>
console.log(ll.search(10)); // 0<br/>
console.log(ll.search(15)); // -1<br/>


                      </p>
                  </div>
            </div>
            <br/>
            {/* <br/> */}
           

            
           

            
           

            

            </div>
            <br/><br/><br/><br/><br/>  
          
          </div>
      </div>
      
 

  )
}
