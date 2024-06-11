import ReactDOM from 'react-dom/client';
 import './index.css';
import {BrowserRouter as Router,Routes,Route,Redirect} from 'react-router-dom';
import homeIcon from './homeLogo.png';
import './App.css';
import Home from './components/Home/home.js';
import Saved from './components/Saved/savedItems.js';
// import Saved from './components/saved/savedItems.js'
import BST_Visualizer from './components/Visualizer/BST/BST_Visualizer.js';
import Visualizer from './components/Visualizer/visualizer';
import BST_Concept from './components/Home/BST/BST_Concepts'
import LL_Concept from './components/Home/linkedList/LL_Concepts.js'
import DLL_Concept from './components/Home/DubblyLinkedList/DLL_Concept.js'
import Queue_Concept from './components/Home/Queue/Queue_Concepts.js'
import Stack_Concept from './components/Home/Stack/Stack_Concepts.js' 
import Login from './components/LoginRegister/Login/login.js';
import Register from './components/LoginRegister/Register/register.js'
import userData from './FireBase_database/userData.js';
import { useState } from 'react';
import LL_Visualizer from "./components/Visualizer/LinkedList/LL_Visualizer.js"
import DLL_Visualizer from './components/Visualizer/DlinkedList/DLL_Visualizer.js';
import Queue_Visualizer from './components/Visualizer/Queue/queue_Visualizer.js';
import Stack_Visualizer from './components/Visualizer/Stack/Stack_Visualizer.js';
// import Stack_Visualizer from './components/Visualizer/Stack/Stack_Visualizer.js';
function App() {
  // let arr={data:[120,90,80,100,130,140,125]};
 
     return(
      <div style={{borderColor:'black', height:'auto'}}>
        
            <Routes>
              
              <Route path="/" element={<Home/>}>
                <Route path="/" element={<BST_Concept/>} />
                {/* <Route path="BST_Concept" element={<BST_Concept/>} />
                <Route path="linkedList" element={<LL_Visualizer/>} /> */}

              </Route>
              
              <Route path="/home" element={<Home/>}>
                  <Route path="/home" element={<BST_Concept/>} />
                  <Route path="BST_Concept" element={<BST_Concept/>} />
                  <Route path="LL_Concept" element={<LL_Concept/>} />
                  <Route path="DLL_Concept" element={<DLL_Concept/>} />
                  <Route path="Queue_Concept" element={<Queue_Concept/>} />
                  <Route path="Stack_Concept" element={<Stack_Concept/>} />

              </Route>
              <Route path="/visualizer" element={<Visualizer/>} >
                  <Route path='/visualizer' element={<BST_Visualizer/>}/>
                  <Route path='BST' element={<BST_Visualizer />}/>
                  <Route path="linkedList" element={<LL_Visualizer/>} />
                  <Route path="doublyLinkedList" element={<DLL_Visualizer/>} />
                  <Route path="queue" element={<Queue_Visualizer/>} />
                  <Route path="stack" element={<Stack_Visualizer/>} />

              </Route>
              
              <Route path="login"  element={<Login/>} />
              <Route path="register" element={<Register/>} />
              
              <Route path="/saved"  element={<Saved/>} >
                  <Route path="visualizer" element={<BST_Visualizer/>} />
                  <Route path="linkedList" element={<LL_Visualizer/>} />
              </Route>
            </Routes>
      </div>
     );
}
export default App;
