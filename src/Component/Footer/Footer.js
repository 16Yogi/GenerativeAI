import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
        <div className="container-fluid bg-dark py-4" id='footer-cf'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h2>
                            <h1>Genrative<span className="text-info">AI</span></h1>
                        </h2>
                        <ul className='d-flex'>
                            <li>
                                <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="/"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <form action="">
                            <p><b>Subscribe Here !</b></p>
                            <input type="email" id="inputEmail4" placeholder='Email'/>
                            <button className="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>        
            </div>
        </div>
        <div className="container-fluid" id='reg'>
            <div className="container p-0">
                <p><b>All Rights Reserved © - 2023 By Generative AI</b></p>
            </div>
        </div>
    </>
  )
}
