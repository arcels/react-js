import "./Menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"Menu "+(menuOpen&&"Active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#id-intro"> Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#id-portofolio"> Portofolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#id-work"> Work</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#id-testimonial"> Testimonial</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#id-contact"> Contact</a>
                </li>
                
            </ul>

        </div>
    )
}
