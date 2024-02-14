import React, { useEffect, useState } from 'react'
import {Bad}   from "../../../assets/images/png";
import { Carousel, Left } from '../../../assets/react-icons';

const index = () => {
    const [carousel, setCarusel] = useState([])
   useEffect(() => {
    fetch('http://localhost:1212/api/carousel').then(res => res.json()).then(data => setCarusel(data))
   }, [])
  return (
    <div className='carousel'>
    {
        // carousel.map(item =>(
       <div className='container carousel__container'>
           <div className='carousel__info'>
           <h1 className='carousel__title'>Kechalari sokin dam oling</h1>
           <button className='carousel__button' type="button">
             <span>Kategoriyalar</span>
               <Left/>
           </button>
           <Carousel/>
           </div>
            {/* <div style={{ backgroundImage: url(Bad)}}></div> */}
            <img className='carousel__img' src={Bad} alt="" />
       </div>
        // ))
    }
    </div>
  )
}

export default index