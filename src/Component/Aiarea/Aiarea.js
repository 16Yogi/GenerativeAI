import React from 'react'
import './Aiarea.css'
import robot from '../../Img/robot.png'
export default function Aiarea() {
  return (
    <>
        <div className="container-fluid py-5" id='ai-cf'>
            <div className="container" id='ai-c'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="col camera"></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="col ai">
                            <img src={robot} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 py-5 px-0">
                    <div className="col text py-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos ipsa porro, repellendus alias, dolorem aliquam sapiente eaque illo nostrum, at nobis repellat? Sapiente, fugiat!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
