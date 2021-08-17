import MenuLiBigScreen from "../menuLiBigScreen/MenuLiBigScreen"
import "./menuBigScreen.scss"

export default function MenuBigScreen({menuOpen}) {
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
                    <MenuLiBigScreen key={item.id} menuOpen={menuOpen} menuLiId={item.menuLiId} menuLiName={item.menuLiName}/>
                ))}
            </ul>
        </div>
    )
}
