import React from "react";
import './footer.css'
 

const Footer = () => {

let date = new Date()

let year = date.getFullYear()

// alert(year)
    return (
        <section id="footer">
            <p className="copywright">Copywrights @{year} Ayodeji Faleye. All right reserve</p>
            
        </section>
    )
}

export default Footer;