import '../assests/Stylesheets/main.css'
import FacebookLogo from '../assests/Images/Facebook-Logo.png'
import InstagramLogo from '../assests/Images/Instagram-Logo.webp'
import TikTokLogo from '../assests/Images/TikTok-Logo.webp'
import YoutbeLogo from '../assests/Images/Youtube-Logo.webp'
import { NavLink } from 'react-router-dom';

function MainPage() {

    // Creating a custom Navlink so the UI is not ruined with pre-defined NavLink styling
    const CustomNavLink = ({ className, ...rest }) => (
        <NavLink {...rest} activeClassName="" className={`custom-nav-link ${className}`} />
    );

    return (
        <>
            <div className='intro-container'>
                <h1 className='intro-heading'>Download HUB</h1>
                <h3 className='media-heading'>Download public videos in two clicks.</h3>
            </div>

            <div className='main-container'>

                <CustomNavLink to="./facebook" className='main-cards facebook-background'>
                    <div className='img-container'>
                        <img src={FacebookLogo} className='icon-img' alt='facebook' />
                    </div>
                    <div className='text-container'>
                        <h3>Facebook</h3>
                    </div>
                </CustomNavLink>

                <CustomNavLink to="./instagram" className='main-cards instagram-background'>
                    <div className='img-container'>
                        <img src={InstagramLogo} className='icon-img' alt='instagram' />
                    </div>
                    <div className='text-container'>
                        <h3>Instagram</h3>
                    </div>
                </CustomNavLink>

                <CustomNavLink to="./tiktok" className='main-cards tiktok-background'>
                    <div className='img-container'>
                        <img src={TikTokLogo} className='icon-img' alt='tiktok' />
                    </div>
                    <div className='text-container'>
                        <h3>TikTok</h3>
                    </div>
                </CustomNavLink>

                <CustomNavLink to="./youtube" className='main-cards youtube-background'>
                    <div className='img-container'>
                        <img src={YoutbeLogo} className='icon-img' alt='youtube' />
                    </div>
                    <div className='text-container'>
                        <h3>Youtube</h3>
                    </div>
                </CustomNavLink>

            </div>
        </>
    )
}

export default MainPage;