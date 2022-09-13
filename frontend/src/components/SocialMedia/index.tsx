import logoGit from '../../assets/img/github-svgrepo-com.svg'
import './styles.css'

function SocialMedia() {
    return(
    <>
    <div className="dsmeta-social-media">
        <a href="https://github.com/WandersoNoleto">
            <img src={logoGit} 
            alt="GitHub de WandersoNoleto" />
        </a>
    </div>

    </>
    )
}

export default SocialMedia