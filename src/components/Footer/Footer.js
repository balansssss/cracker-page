import React from "react"
import classes from "./Footer.module.scss"
import phone from "../../assets/img/fa-phone.png"
import address from "../../assets/img/fa-map.png"
import share from "../../assets/img/fa-share.png"
import pint from "../../assets/img/pint.png"
import facebook from "../../assets/img/facebook.png"
import google from "../../assets/img/google.png"

const Footer = props => {
    return (
        <div className={classes.container}>
            <div className={classes.column}>
                <div>
                    <img src={phone} className={classes.icon} alt="Phone"/>
                    <span className={classes.title}>Phone</span>
                </div>
                <div style={{marginTop: '20px'}}>
                    <span className={classes.number}>+43 ( 987 ) 345 - 6782</span>
                </div>
            </div>
            <div className={classes.column}>
                <div>
                    <img src={address} className={classes.icon} alt="Address"/>
                    <span className={classes.title}>Address</span>
                </div>
                <div style={{marginTop: '19px', marginLeft: '35px'}}>
                    <span className={classes.address}>Cracker Inc.<br/>
                        10 Cloverfield Lane<br/>
                        Berlin, IL 10928<br/>
                        Germany<br/>
                    </span>
                </div>
            </div>
            <div className={classes.column}>
                <div>
                    <img src={share} className={classes.icon} alt="Share us"/>
                    <span className={classes.title}>Share us</span>
                </div>
                <div>
                    <div style={{marginTop: '15px'}}>
                        <img src={pint} className={classes.social} alt="Pinterest" />
                        <a href="https://www.pinterest.com/">https://www.pinterest.com/</a>
                    </div>
                    <div style={{marginTop: '18px'}}>
                        <img src={facebook} className={classes.social} alt="Facebook" />
                        <a href="https://www.facebook.com/">https://www.facebook.com/</a>
                    </div>
                    <div style={{marginTop: '18px'}}>
                        <img src={google} className={classes.social} alt="Google" />
                        <a href="https://www.google.com/">https://www.google.com/</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer