import React from 'react'
import avataaars from "../assets/imge/avataaars.svg";
import'../Home/Home.css';
export default function Home() {
  return (
    <>
  <main className='py-5'>
    <figure>
      <img src={avataaars} alt=""className='avatar-img' />
    </figure>
    <h2 className='text-white fw-bold fs-1'>START FRAMEWORK</h2>
    <div className='d-flex align-items-center justify-content-center my-3'>
       <div className="line bg-white"></div>
      <i className="fa-solid fa-star icon"></i>
      <div className="line bg-white"></div>
    </div>
  <p className='text-white fs-5'>Graphic Artist - Web Designer - Illustrator</p>
  </main>
    </>
  )
}
