
import './App.css';
import { useState } from 'react';
import {SC, LC,UC, NC} from './Data/PassChar.jsx';

function App() {
  let [uppercase, setUppercase]=useState(false);
  let [lowercase, setLowercase]=useState(false);
  let [numbers, setNumbers]=useState(false);
  let [symbols, setSymbols]=useState(false);
  let [passLength, setPassLength]=useState(10);
  let [fpass, setFpass]=useState('');

  let createPassword=()=>{
    let finalPassword='';
    let charSet='';
     if(uppercase || lowercase || numbers || symbols){
         if(uppercase) charSet+=UC;
         if(lowercase) charSet+=LC;
         if(numbers) charSet+=NC;
         if(symbols) charSet+=SC;

         for(let i=0; i<=passLength; i++){
          finalPassword+=charSet.charAt(Math.floor(Math.random()*charSet.length));
         }
         setFpass(finalPassword);
     }else{
      alert('Please select atleast one checkbox!');
     }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
  }

  return (
    <>
      <div className="passwordBox">
          <h2>Password Generator</h2>
          <div className="passwordBoxin">
            <input type="text" id="password"  readOnly value={fpass} /><button onClick={copyPass}>Copy</button>
          </div>
          
          <div className='passLength'>
              <label>Password Length</label>
              <input type='number' max={20} min={8} value={passLength} onChange={(event)=>setPassLength(event.target.value)}/>
          </div>

          <div className='passLength'>
              <label>Include Uppercase letters</label>
              <input type='checkBox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
          </div>

          <div className='passLength'>
              <label>Include Lowercase letters</label>
              <input type='checkBox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
          </div>
          <div className='passLength'>
              <label>Include Numbers</label>
              <input type='checkBox' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
          </div>
          <div className='passLength'>
              <label>Include Symbols</label>
              <input type='checkBox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
          </div>
          <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </>
    
  );
}

export default App;
