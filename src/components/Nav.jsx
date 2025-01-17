import {headerLogo} from '../../assets/images'
import {hamburger} from '../../assets/icons'
const Nav = () => {
  return (
    <header className='paddig-x py-8 absoulte z-10'>
        <nav className='flex justify-between items-center'>
        <img src={headerLogo} alt="LOGO" width={130} height={29} /> 

            <a href="/">
            <img src={headerLogo} alt="LOGO" width={130} height={29} /> 
            </a>
        </nav>
    </header>
  )
}

export default Nav