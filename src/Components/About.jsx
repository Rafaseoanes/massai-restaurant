import React from 'react'


function About() {
  return (
    <div className="bg-about-background  bg-cover bg-no-repeat w-screen h-screen md:flex justify-center items-center" >
        <div>
            <h3 className='text-yellow-400 text-3xl text-center md:text-right' >Acerca de nosotros</h3>
            <p className='text-white text-center md:text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Placeat enim iusto reprehenderit velit eos, minima vel ullam 
                temporibus molestiae corporis earum. Nemo libero quibusdam cumque, 
                eum distinctio odit repellat doloremque?</p>
        </div>
    <img className='h-3/5' src='https://i.ibb.co/5WGvy67/header.png' alt='middle-spoon'/>
    <div className='hidden md:block'>
            <h3 className='text-yellow-400 text-3xl text-left' >Nuestra historia</h3>
            <p className='text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Placeat enim iusto reprehenderit velit eos, minima vel ullam 
                temporibus molestiae corporis earum. Nemo libero quibusdam cumque, 
                eum distinctio odit repellat doloremque?</p>
        </div>
    </div>
  )
}

export default About