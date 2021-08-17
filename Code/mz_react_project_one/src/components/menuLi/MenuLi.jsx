import "./menuLi.scss"

export default function Menu_li({ menuOpen, setMenuOpen, menuLiId, menuLiName }) {
    return (
        // <div>
            <li onClick={()=>setMenuOpen(false)}>
                <a href={menuLiId} >{menuLiName}</a>
            </li>
        // </div>
    )
}
