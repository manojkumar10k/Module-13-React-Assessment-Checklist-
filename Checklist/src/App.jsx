import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setCitizen] = useState({citizen:false,over:false})
  const Change = (event)=>{const {name,checked}= event.target;
  setCitizen((p)=>({ ...p,[name]:checked,}));
};
  
  return (
    <div className='p-5' >
      <div >
        <h2  className='d-flex justify-content-center'>Are you a Citizen : <h3 className='text-danger'>{answers.citizen ? 'YES': 'NO'}</h3></h2>
        <h2  className='d-flex justify-content-center'>Are you a over 21 : <h3 className='text-danger'>{answers.over ? 'YES': 'NO'}</h3></h2>
      </div>
      <div>
        <table className='d-flex   justify-content-center  ' >
        Are you a Citizen ?
        <input type="checkbox" name="citizen" checked={answers.citizen} onChange={Change}/>
        </table>
        <table className='d-flex   justify-content-center  ' >
        Are you a over 21 ?
       <input type="checkbox" name="over" checked={answers.over} onChange={Change}/>
        </table>
      </div>
    </div>
  )
}

export default App
