import React from 'react'


function Header() {
  return (
    <div>
       
        <h2 className='text-yellow-600 text-5xl flex  justify-center font-bold' >massai</h2>
        <h6 className='text-yellow-600 flex  justify-center'   >FOOD & DRINKS</h6>
        <br/>
        <br/>
        <br/>
    <div className='flex justify-center items-center'>
        <h5 className='text-green-900 rotate-[-90deg] absolute  left-8 custom-spacing '>#Bar #massai</h5>
      
        <div className="max-w-xl md:mr-16 text-center md:text-left  " >
          <img className='w-12' src="https://i.ibb.co/CHhMPPr/Vector-2.png" alt="spoon icon" />
          <br/>
        <h1 className="text-yellow-500 text-4xl md:text-6xl " >BRUNCH,<br/> LUNCH<br/> & TEATIME</h1>
        <br />

        <button   className='text-white p-2 w-28 bg-yellow-500 rounded-md drop-shadow-md'>
            <a  href="https://drive.google.com/file/d/1ewGznN8h9K3e7NdvqtwC2eA2kpKmBI7J/view" target="_blank" rel="noopener noreferrer">Menú</a>
            </button>
        </div>

        <div className="ml-16 hidden md:block" >
        <img className="max-w-md" src='https://i.ibb.co/XJS2whd/New-Project.png' alt="Header" />
        </div>
  
  </div>
  <div className='absolute bottom-1 right-8'>
    <img src="https://i.ibb.co/dPFzb3y/icons8-up-arrow-100.png" alt="arrow" />
    <p className='text-yellow-500 text-center ' >Desliza</p>
  </div>
    </div>
  )
}

export default Header