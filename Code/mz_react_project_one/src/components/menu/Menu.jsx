import MenuLi from "../menuLi/MenuLi"
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    const list = [
        {
            id: "introList",
            menuLiId: "#intro",
            menuLiName: "Home",
        },
        {
            id: "portfolioList",
            menuLiId: "#portfolio",
            menuLiName: "Merchandise",
        },
        {
            id: "worksList",
            menuLiId: "#works",
            menuLiName: "Blogs",
        },
        {
            id: "testimonialsList",
            menuLiId: "#testimonials",
            menuLiName: "Testimonials",
        },
        {
            id: "contactList",
            menuLiId: "#contact",
            menuLiName: "Contact",
        },
    ]
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {list.map((item) =>(
                    <MenuLi key={item.id} menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuLiId={item.menuLiId} menuLiName={item.menuLiName}/>
                ))}
            </ul>
        </div>
    )
}
