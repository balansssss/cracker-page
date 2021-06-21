import React from "react"
import classes from "./Slider.module.scss"

class Slider extends React.Component {

    slideDown = () => {
        let y = document.documentElement.clientHeight
        const point = 2000
        const scroll = () => {
            if (y < point) {
                window.scrollBy(0, 10)
                setTimeout(scroll, 1)
                y += 10
            }
        }
        scroll()
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.bcg}>
                    <div className={classes.bcg_info}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br/>Lorem ipsum dolor sit amet,
                    </div>
                </div>
                <h2>mostly tastes<br/> with freshes</h2>
                <button onClick={this.slideDown}>taste it</button>
            </div>
        )
    }
}

export default Slider