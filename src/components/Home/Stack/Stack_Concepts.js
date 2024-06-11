import React from 'react'
import '../BST/BST_Concepts.css';
import '../linkedList/LL_Concepts.css';
import bst_img from '../BST/bst.jpg';
import copyImg from '../BST/blueCopy.png';
import LL_Structure from './Stack_structure.png';
export default function Stack_Concepts() {
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
          <h1 style={{fontSize:'30px;'}}>Stack</h1>
          <div className='info'>
          <p> &emsp;&emsp;&emsp;A Stack is a linear data structure that follows a particular order in which the 
            operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO
             implies that the element that is inserted last, comes out first and FILO implies that the element 
             that is inserted first, comes out last.<br/></p>
             <h3>Stack Structure :<br/></h3><p>&emsp;&emsp;&emsp;A stack is a linear data structure that follows
                 the Last-In-First-Out (LIFO) principle. It behaves like a stack of plates, where the last plate
                  added is the first one to be removed.<br/></p>
            <img className="imgll"src={LL_Structure}/><br/>


            <h3>Use of Queue :<br/></h3>
            <p>&emsp;&emsp;&emsp; 1.Function calls: Stacks are used to keep track of the return addresses of function calls, allowing the program to return to the correct location after a function has finished executing.<br/>
            &emsp;&emsp;&emsp; 2.Recursion: Stacks are used to store the local variables and return addresses of recursive function calls, allowing the program to keep track of the current state of the recursion.<br/>
            &emsp;&emsp;&emsp; 3.Expression evaluation: Stacks are used to evaluate expressions in postfix notation (Reverse Polish Notation).<br/>
            &emsp;&emsp;&emsp; 4.Syntax parsing: Stacks are used to check the validity of syntax in programming languages and other formal languages.<br/>
            &emsp;&emsp;&emsp; 5.Memory management: Stacks are used to allocate and manage memory in some operating systems and programming languages.<br/>
            </p>

        <h3>Node Creation</h3>
           <div className='codeArea'>
           <div className='codeDiv'>
                    <p className='code'>
                    class Stack_Node &#123;<br/>
                    &emsp;constructor(data) &#123;<br/>
                    &emsp;&emsp;this.data = data;<br/>
                    &emsp;&emsp;this.next = null;<br/>
                    &emsp;&#125;<br/>
                        &#125;
                    </p>    
                    </div>
           </div>
           <br/>
           <h3>Operations on Stack : </h3>
           <br/>
           <table>
                <tbody><tr>
                <th className='th_srno'>SN</th>
                <th className='th_operation'>Operation</th>
                <th className='th_description'>Description </th>
                </tr>
                
                <tr>
                <td>1</td>
                <td><a href="insertion-in-doubly-linked-list-at-the-end">Push:</a></td>
                <td> Adds an element to the top of the stack.</td>
                </tr>
                <tr>
                <td>2</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">Pop:</a></td>
                <td> Removes the top element from the stack.</td>
                </tr>
                <tr>
                <td>3</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">Peek:</a></td>
                <td> Returns the top element without removing it.</td>
                </tr>
                <tr>
                <td>4</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">IsEmpty:</a></td>
                <td> Checks if the stack is empty.</td>
                </tr>
                <tr>
                <td>5</td>
                <td><a href="deletion-in-doubly-linked-list-at-beginning">IsFull:</a></td>
                <td> Checks if the stack is full (in case of fixed-size arrays).</td>
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

class Stack &#123;<br/>
    constructor() &#123;<br/>
        this.top = null;<br/>
    &#125;<br/>


    // Push Data : 

    Push(data) &#123;<br/>
        const newNode = new Node(data);<br/>
        newNode.next = this.top;<br/>
        this.top = newNode;<br/>
    &#125;<br/>


    // Pop Data :

    Pop() &#123;<br/>
        if (this.top === null) &#123;<br/>
            console.error("Stack is empty.");<br/>
            return;<br/>
        &#125;<br/>
        let temp=this.top;
        this.top = this.top.next;<br/>
        delete(temp);
    &#125;<br/>

    // Display Peak node
    Peak() &#123;<br/>
            if (this.top === null) &#123;<br/>
                console.error("Stack is empty.");<br/>
                return;<br/>
            &#125;<br/>
            console.log("Peak : ",this.top);
    &#125;<br/>

    
    // Print the Stack 
    printStack() &#123;<br/>
        if(this.top!=null)
        &#123;<br/>
        let current = this.top;<br/>
        let list = [];<br/>
        while (current !== null) &#123;<br/>
            list.push(current.data);<br/>
            current = current.next;<br/>
        &#125;<br/>
        console.log(list.join("&#8594; "));<br/>
        &#125;<br/>
        else
        &#123;<br/>
            console.log("Stack is Empty.");
        &#125;<br/>
    &#125;<br/>
&#125;<br/>

// Example usage:
const s = new Stack();<br/>
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.Peak();
s.printStack();
s.pop();
s.pop();
s.Peak();
s.printStack();
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
