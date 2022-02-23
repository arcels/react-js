import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"Topbar "+(menuOpen&&"Active")}>
            <div className="Wrapper">
                <div className="Left">
                    <a href="#id-intro" className="Logo">Arc Learn </a>
                     <div className="itemContainer">
                        {/* <Person className="icon" /> */}
                        {/* <span> +62 895-3554-35650</span> */}
                    </div>
                    <div className="itemContainer"> 
                        {/* <Mail /> */}
                        {/* <span> marcelinokurni@gmail.com</span> */}
                    </div>
                </div>
                <div className="Right">
                    <div className="Hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line1"> </span>
                        <span className="line1"> </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
