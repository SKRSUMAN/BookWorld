import React from 'react'
import './block1.css'
function Block1() {
  return (
    <div>
    
    <div className='Home-container'>
    <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />

    <div style={{position:'relative',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',top:'200px'}}>
           <h1 style={{fontSize:'80px',color:'white'}}>Welcome To </h1>
           <h1 style={{fontSize:'80px',color:'white'}}>BookWorld.com</h1>
    </div>
    </div>
   
    
    </div>

  )
}

export default Block1