import React from "react";
import {BsDownload} from 'react-icons/bs'
import './heroPage.css'
const CTA = () =>{
  return(
    <div className="cta">
      <div className="btn">
        <p>Resume</p>
        <BsDownload/>
      </div>
    </div>
  )
}
export default CTA