import "./topbar.scss"
import {Mail} from "@material-ui/icons"
import MenuBigScreen from "../menuBigScreen/MenuBigScreen"

export default function Topbar({ menuOpen, setMenuOpen }) {
    // <div className="itemContainer">
    //                     <Person className="icon"/>
    //                     <span>+61 874 576 234</span>
    //                 </div>
    //                 <div className="itemContainer">
    //                     <Mail  className="icon"/>
    //                     <span>TigerKing@gmail.com</span>
    //                 </div> 
    // <a href="#intro" className="logo">Tiger</a>

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="leftBigScreen">
                    <MenuBigScreen/>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <Mail  className="icon"/>
                        <span>mingzhuwan@gmail.com</span>
                        <i className='bx bx-moon changeTheme'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
