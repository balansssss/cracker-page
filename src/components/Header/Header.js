import React from "react"
import classes from "./Header.module.scss"
import logo from "../../assets/img/logo.png"
import semen from "../../assets/img/semen.png"
import arrow from "./arrow-down.png"
import {connect} from "react-redux"
import soybean from "../../assets/img/soybean_blk.png"
import sesame from "../../assets/img/sesame_blk.png"
import wheat from "../../assets/img/wheat_blk.png"
import corn from "../../assets/img/corn_blk.png"
import semen_blk from "../../assets/img/semen_blk.png"
import cancel from "../../assets/img/cancel.png"
import {deleleComponent} from "../../redux/actions/constructor"

class Header extends React.Component {
    state= {
        showCard: false,
        showMobileMenu: false
    }

    visibleCard = bool => {
        let showCard = !this.state.showCard
        if (bool) showCard = bool
        this.setState({showCard})
    }

    showMobileMenu = () => {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.bcg1}>
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">about us</a></li>
                        <li><a href="">contacts</a></li>
                        <li><a href="">checkout</a></li>
                        <li><a href="">account</a></li>
                    </ul>
                    <div className={classes.hamburger} onClick={() => this.showMobileMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    { this.state.showMobileMenu
                        ? <ul className={classes.mobileMenu}>
                            <li><a href="">home</a></li>
                            <li><a href="">about us</a></li>
                            <li><a href="">contacts</a></li>
                            <li><a href="">checkout</a></li>
                            <li><a href="">account</a></li>
                        </ul>
                        : null
                    }
                </div>
                <div className={classes.bcg2}>
                    <img src={logo} className={classes.logo} alt="Logo"/>
                    <div className={classes.info}>
                        <div>
                            <img src={semen} className={classes.semen} alt="Semen"/>
                            <div className={classes.semenCount}>{this.props.countComponents}</div>
                        </div>
                        <span className={classes.total}>Total: &nbsp;<span className={classes.totalCount}>{this.props.countComponents * 81.50} €</span></span>
                        <span className={classes.details} onMouseEnter={()=> this.visibleCard(true)}>DETAILS &nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="Arrow down"/></span>
                    </div>
                    {
                        this.state.showCard
                            ? <div className={classes.card}>
                            <img src={cancel} alt="cancel" className={classes.close}
                                 onClick={() => this.visibleCard()}/>
                            <div className={classes.head}>
                                <img src={soybean} alt="soybean" className={classes.component}/>
                                <img src={sesame} alt="sesame" className={classes.component}/>
                                <img src={wheat} alt="wheat" className={classes.component}/>
                                <img src={corn} alt="corn" className={classes.component}/>
                            </div>
                            <div className={classes.components}>
                                {
                                    this.props.countComponents > 0
                                        ? this.props.componentsResult.map((item, index) => {
                                            return <div key={index} className={classes.item}>
                                                <img src={semen_blk} alt="semen"/>
                                                <div className={classes.info}>
                                                    <span className={classes.component}>{item.soybean}%</span>
                                                    <span className={classes.component}>{item.sesame}%</span>
                                                    <span className={classes.component}>{item.wheat}%</span>
                                                    <span className={classes.component}>{item.corn}%</span>
                                                    <span className={classes.weigth}>150KG</span>
                                                    <span className={classes.price}>81.50 €</span>
                                                </div>
                                                <span className={classes.delete}
                                                      onClick={() => this.props.deleleComponent(index)}>x</span>
                                            </div>
                                        })
                                        : null
                                }
                            </div>
                            <div className={classes.foot}>
                                <span className={classes.total}>TOTAL: <span
                                    className={classes.count}>{this.props.countComponents * 81.50} €</span></span>
                                <button>CHECKOUT</button>
                            </div>
                        </div>
                            : null
                    }
                </div>

                {/*<img src={logo} alt="Chacker"/>*/}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        countComponents: state.constructorReducer.componentsResult.length,
        componentsResult: state.constructorReducer.componentsResult
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleleComponent: index => dispatch(deleleComponent(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)