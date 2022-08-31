import React from 'react';
import img0 from './pic/0.webp';
import img3 from './pic/3.webp';
import img2 from './pic/2.webp';




export default function Footer(){
    return(
        <div id='footerpics'> 
        <img src = {img0} className ='footerimg' alt = 'pic1' />
        <img src = {img3} className ='footerimg' alt = 'pic3' />
        <img src = {img2} className ='footerimg' alt = 'pic3' />

    </div>

    )
    
}
