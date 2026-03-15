import React, { useState } from 'react'

function App() {

  const [num ,setnum]= useState(0)

  const add= ()=>{
      setnum(num+1);
      console.log(num ) ;
  }

  const sub= ()=>{
      setnum(num-1);
      console.log(num ) ;
  }

  const zer0= ()=>{
      setnum(0);
      console.log(num ) ;
  }

  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center '>

      <div className='bg-white/20 backdrop-blur-lg px-10 rounded-xl border border-white/3'>
          <h1  className='flex justify-center items-center mt-2 text-2xl font-semibold text-lime-800  text-fuchsia-800  font-serif '>COUNTER APP</h1>
        <div className= ' bg-gray-600/50 h-10 rounded-xl px-5 py-0.5 text-2xl font-bold border border-white/35 '>
          {num}
        </div>
        <div className=' p-3 '>
          <button 
            className='bg-blue-500/15 text-white px-6 py-2 rounded-xl border border-white/20 hover:bg-blue-900 shadow-lg transtion duration-500  '
              onClick={add}
            >
            Increase(+)
           </button>
          <button 
            className='bg-blue-500/15 text-white px-6 py-2 rounded-xl border border-white/20 hover:bg-blue-900 shadow-lg transition duration-500'
            onClick={sub}
            >
            Decrease(-)
          </button>
        </div>
        <div className='flex justify-center'>
          <button 
            className='bg-blue-500/15 text-white px-6 py-2 rounded-xl border border-white/20 hover:bg-blue-900 transition duration-500'
            onClick={zer0}
            >Reset
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default App
