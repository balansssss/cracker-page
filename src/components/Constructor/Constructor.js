import React from "react"
import classes from "./Constructor.module.scss"
import Cracker from "../../assets/img/cracker.png"
import cracker from "../../assets/img/Cracker_black.png"
import soybean from "../../assets/img/soybean.png"
import sesame from "../../assets/img/sesame.png"
import wheat from "../../assets/img/wheat.png"
import corn from "../../assets/img/corn.png"
import pacage from "../../assets/img/pacage.png"
import {connect} from "react-redux"
import {changePackage, changeVisibleMenu, rangeHandler, addToCard} from "../../redux/actions/constructor"

class Constructor extends React.Component {
    state = {
        crackerItems: [
            { name: "soybean", imgLink: soybean },
            { name: "sesame", imgLink: sesame },
            { name: "wheat", imgLink: wheat },
            { name: "corn", imgLink: corn }
        ],
        buttonValue: "+"
    }

    onHoverButton = value => {
        this.setState({
            buttonValue: value
        })
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.bcg}></div>
                <div className={classes.info}>
                    <img src={Cracker} alt="Cracker"/>
                    <h2>about cracker</h2>
                    <div className={classes.bcg_info}>
                        <span>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </span>
                        <img src={cracker} className={classes.cracker} alt="Cracker"/>
                    </div>
                </div>
                <div className={classes.constructor}>
                    <h2 id="constructor">Cracker constructor</h2>
                    <div style={{marginTop: '13px'}}>
                        <span className={classes.value}>current value:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className={classes.count}>{this.props.countComponents * 81.50} &#8364;</span>
                    </div>
                    <div style={{marginTop: '2px'}}>
                        {
                            this.state.crackerItems.map((item, index) => {
                                return <div className={classes.item} key={index}>
                                    <img src={item.imgLink} className={classes.icon} alt={item.name}/>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={this.props.componentsValue[item.name]}
                                        onChange={event => this.props.rangeHandler(event, item.name)}
                                    />
                                    <span>{this.props.componentsValue[item.name]}%</span>
                                </div>
                            })
                        }
                        <div className={classes.item}>
                            <img src={pacage} className={classes.icon} alt="Pacage"/>
                            <input type="button" value={this.props.packValue} onClick={() => this.props.changeVisibleMenu()}/>
                        </div>
                        {
                            this.props.showPack
                                ? <div className={classes.list}>
                                    <ul>
                                        <li>Choose your pack</li>
                                        <li onClick={() => this.props.changePackage("Small pack")}>Small pack</li>
                                        <li onClick={() => this.props.changePackage("Medium pack")}>Medium pack</li>
                                        <li onClick={() => this.props.changePackage("Large pack")}>Large pack</li>
                                    </ul>
                                </div>
                                : null
                        }
                    </div>
                    <div>
                        <input
                            type="button"
                            className={classes.add}
                            value={this.state.buttonValue}
                            onMouseEnter={() => this.onHoverButton("ADD TO CART")}
                            onMouseLeave={() => this.onHoverButton("+")}
                            onClick={() => this.props.addToCard()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showPack: state.constructorReducer.showPack,
        packValue: state.constructorReducer.packValue,
        componentsValue: state.constructorReducer.componentsValue,
        countComponents: state.constructorReducer.componentsResult.length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeVisibleMenu: () => dispatch(changeVisibleMenu()),
        rangeHandler: (event, name) => dispatch(rangeHandler(event, name)),
        changePackage: pack => dispatch(changePackage(pack)),
        addToCard: () => dispatch(addToCard())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)