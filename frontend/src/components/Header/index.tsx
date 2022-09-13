import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return(
    <>
    <header>
        <div className="dsmeta-logo-container">
        <img id='dsmeta-logo' src={logo} alt="Logo DSMeta"/>
        <h1>DSMeta</h1>
        </div>

    </header>
    </>
    )
}

export default Header

