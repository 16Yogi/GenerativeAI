import React from 'react'
import './Aiarea.css'
import robot from '../../Img/robot.png'
// import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// webcam
import Webcam from "react-webcam";

// https://blog.logrocket.com/using-react-webcam-capture-display-images/
export default function Aiarea() {
  return (
    <>
        <div className="container-fluid py-5" id='ai-cf'>
            <div className="container" id='ai-c'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
                        <div className="col camera">
                            <Webcam id="camera" className='p-0 m-0'/>
                        </div>
                        <div className="py-3 my-2 col control mx-auto d-flex justify-content-around">
                            <div className="item">
                                <i><CameraAltIcon></CameraAltIcon></i>
                            </div>
                            <div className="item">
                                <i><MicIcon></MicIcon></i>
                            </div>
                            <div className="item">
                                <i><MoreVertIcon></MoreVertIcon></i>
                            </div>
                        </div>
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
