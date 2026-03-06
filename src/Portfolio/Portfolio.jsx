import React, { useState } from 'react';
import './Portfolio.css';
import poert1 from "../assets/imge/poert1.png";
import poert2 from "../assets/imge/port2.png";
import poert3 from "../assets/imge/port3.png";

export default function Portfolio() {
  const [modalImg, setModalImg] = useState(null); 

  const images = [poert1, poert2, poert3, poert1, poert2, poert3];

  const openModal = (src) => setModalImg(src);
  const closeModal = () => setModalImg(null);

  return (
    <>
      <section className='porf'>
        <h1 className='fw-bold'>PORTFOLIO COMPONENT</h1>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <div className="line"></div>
          <i className="fa-solid fa-star star"></i>
          <div className="line"></div>
        </div>
      </section>

      <section className='py-5'>
        <div className="container">
          <div className="row g-5">
            {images.map((imgSrc, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="port-item position-relative overflow-hidden rounded-3"
                  onClick={() => openModal(imgSrc)}
                >
                  <img className='port-img w-100' src={imgSrc} alt={`portfolio-${index}`} />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImg && (
        <div className="custom-modal" onClick={closeModal}>
          <img src={modalImg} alt="modal-img" className="modal-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
