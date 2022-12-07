import React from 'react'

function Footer() {
  return (
    <div className='bg-about-background  bg-cover bg-no-repeat h-96 grid grid-cols-3 justify-items-center items-center' >
        
        <div>
            <h3 className='text-yellow-600 text-2xl text-center' >Contactanos</h3>
            <h5 className='text-white text-center '>Cra. 9 #7B - 39, Valledupar</h5>
            <h5 className='text-white text-center '>+57 316 123 4567</h5>
            {/* <h5>Cra. 9 #7B - 39, Valledupar</h5> */}
        </div>
        <div>
            <h3 className='text-yellow-600 font-bold text-5xl text-center' >massai</h3>
            <br />
            <h5 className='text-white text-center text-sm '>"The best way to find yourself is to lose yourself in the service of others.”</h5>
            <br />
            <img className='w-12 block ml-auto mr-auto' src="https://i.ibb.co/CHhMPPr/Vector-2.png" alt="spoon icon" />
        </div>
        <div>
            <h3 className='text-yellow-600 text-2xl text-center' >Horarios</h3>
        <h5 className='text-white text-center '>Lunes a Viernes</h5>
        <h6 className='text-white text-center '>7am - 10pm</h6>
        <br />
        <h5 className='text-white text-center '>Sabados a Domingos</h5>
        <h6 className='text-white text-center '>8am - 10pm</h6>
        </div>

    </div>
  )
}

export default Footer