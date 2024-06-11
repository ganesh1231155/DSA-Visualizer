import React from 'react'
import '../BST/BST_Concepts.css';
import '../linkedList/LL_Concepts.css';
import bst_img from '../BST/bst.jpg';
import copyImg from '../BST/blueCopy.png';
import LL_Structure from './queue_structure.png';
export default function Queue_Concepts() {
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
          <h1 style={{fontSize:'30px;'}}>Queue</h1>
          <div className='info'>
          <p> &emsp;&emsp;&emsp;A Queue Data Structure is a fundamental concept in computer science used for 
            storing and managing data in a specific order. It follows the principle of “First in, First out” 
            (FIFO), where the first element added to the queue is the first one to be removed. Queues are 
            commonly used in various algorithms and applications for their simplicity and efficiency in 
            managing data flow.<br/></p>
             <h3>Queue Structure :<br/></h3><p>&emsp;&emsp;&emsp;A queue is a linear data structure that follows
                 the First-In-First-Out (FIFO) principle. It operates like a line where elements are added at
                  one end (rear) and removed from the other end (front).<br/></p>
            <img className="imgll"src={LL_Structure}/><br/>


            <h3>Use of Queue :<br/></h3>
            <p>&emsp;&emsp;&emsp; 1.Task scheduling in operating systems.<br/>
            &emsp;&emsp;&emsp; 2.Data transfer in network communication.<br/>
            &emsp;&emsp;&emsp; 3.Simulation of real-world systems (e.g., waiting lines).<br/>
            &emsp;&emsp;&emsp; 4.Priority queues for event processing queues for event processing.<br/>
            &emsp;&emsp;&emsp; 5.Queues are widely used as waiting lists for a single shared resource like printer, disk, CPU.<br/>
            &emsp;&emsp;&emsp; 6.Queues are used in asynchronous transfer of data (where data is not being transferred at the same rate between two processes) for eg. pipes, file IO, sockets.<br/>
            &emsp;&emsp;&emsp; 7.Queues are used as buffers in most of the applications like MP3 media player, CD player, etc.<br/>
            &emsp;&emsp;&emsp; 8.Queue are used to maintain the play list in media players in order to add and remove the songs from the play-list.<br/>
            </p>

        <h3>Node Creation</h3>
           <div className='codeArea'>
           <div className='codeDiv'>
                    <p className='code'>
                    class Queue_Node &#123;<br/>
                    &emsp;constructor(data) &#123;<br/>
                    &emsp;&emsp;this.data = data;<br/>
                    &emsp;&emsp;this.next = null;<br/>
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
                <td><a href="insertion-in-doubly-linked-list-at-the-end">EnQueue</a></td>
                <td>Adding the node into the Queue to the end. </td>
                </tr>
                <tr>
                <td>2</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">DeQueue</a></td>
                <td>Removing the node from beginning of the Queue </td>
                </tr>
                <tr>
                <td>3</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">Print</a></td>
                <td>Print the whole Queue.</td>
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

class Queue &#123;<br/>
    constructor() &#123;<br/>
        this.front = null;<br/>
    &#125;<br/>

    // EnQueue<br/>
   EnQueue(data) &#123;<br/>
        const newNode = new Node(data);<br/>
        if (this.front === null) &#123;<br/>
            this.front = newNode;<br/>
        &#125; else &#123;<br/>
            let current = this.front;<br/>
            while (current.next !== null) &#123;<br/>
                current = current.next;<br/>
            &#125;<br/>
            current.next = newNode;<br/>
        &#125;<br/>
    &#125;<br/>

    // DeQueue<br/>
    DeQueue() &#123;<br/>
        if (this.front === null) &#123;<br/>
            console.error("Queue is empty.");<br/>
            return;<br/>
        &#125;<br/>
        this.front = this.front.next;<br/>
    &#125;<br/>

    // Print Queue<br/>
    printQueue() &#123;<br/>
        let current = this.front;<br/>
        let list = [];<br/>
        while (current !== null) &#123;<br/>
            list.push(current.data);<br/>
            current = current.next;<br/>
        &#125;<br/>
        console.log(list.join("&#8594; "));<br/>
    &#125;<br/>
&#125;<br/>
    

// Example usage:
const q = new Queue();<br/>
q.EnQueue(10);<br/>
q.EnQueue(11);<br/>
q.EnQueue(12);<br/>
q.printQueue();<br/>
q.DeQueue();<br/>
q.printQueue();<br/>
                      </p>
                  </div>
            </div>
            <br/>
            </div>
            <br/><br/><br/><br/><br/>  
          
          </div>
      </div>
      
 

  )
}
