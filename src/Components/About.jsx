import React from 'react'


function About() {
  return (
    <div className="bg-about-background  bg-cover bg-no-repeat w-screen h-screen md:flex justify-center items-center" >
        <div>
            <h3 className='text-yellow-400 text-3xl text-center md:text-right' >Acerca de nosotros</h3>
            <br />
            <img className='w-12 ml-auto rotate-180 ' src="https://i.ibb.co/CHhMPPr/Vector-2.png" alt="spoon icon" />
            <br />
            <p className='text-white text-center md:text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Placeat enim iusto reprehenderit velit eos, minima vel ullam 
                temporibus molestiae corporis earum. Nemo libero quibusdam cumque, 
                eum distinctio odit repellat doloremque?</p>
                <br />
                <button   className='text-white p-2 w-28 bg-yellow-500 rounded-md drop-shadow-md block ml-auto'>
            <a  href="https://drive.google.com/file/d/1ewGznN8h9K3e7NdvqtwC2eA2kpKmBI7J/view" target="_blank" rel="noopener noreferrer">Menú</a>
            </button>
        </div>
    <img className='h-3/5' src='https://i.ibb.co/5WGvy67/header.png' alt='middle-knife'/>
    <div className='hidden md:block'>
            <h3 className='text-yellow-400 text-3xl text-left' >Nuestra historia</h3>
            <br />
            <img className='w-12' src="https://i.ibb.co/CHhMPPr/Vector-2.png" alt="spoon icon" />
            <br />
            <p className='text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Placeat enim iusto reprehenderit velit eos, minima vel ullam 
                temporibus molestiae corporis earum. Nemo libero quibusdam cumque, 
                eum distinctio odit repellat doloremque?</p>
                <br />
                <button   className='text-white p-2 w-28 bg-yellow-500 rounded-md drop-shadow-md'>
            <a  href="https://drive.google.com/file/d/1ewGznN8h9K3e7NdvqtwC2eA2kpKmBI7J/view" target="_blank" rel="noopener noreferrer">Menú</a>
            </button>
        </div>
    </div>
  )
}

export default About