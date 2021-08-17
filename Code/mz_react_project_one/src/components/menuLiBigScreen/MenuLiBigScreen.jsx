import "./menuLiBigScreen.scss"

export default function Menu_li({ menuOpen, menuLiId, menuLiName }) {
    return (
        // <div>
            <li >
                <a href={menuLiId} >{menuLiName}</a>
            </li>
        // </div>
    )
}
