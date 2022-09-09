
import icon from "../../assets/img/user-icon.svg"
import'./styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Mandar mensagem"/>
        </div>
    )
}

export default NotificationButton
