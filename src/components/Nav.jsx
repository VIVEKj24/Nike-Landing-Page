import {headerLogo} from '../../assets/images/index'
import {hamburger} from '../../assets/icons/index'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absoulte z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href='/'>
           <img src={headerLogo} alt="LOGO" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((items)=>(
              <li key={items.href}> 
                <a href={items.href} className='font-montserrat text-slate-gray tex text-lg'>
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            {/* the hamburger icon will be invisible first but at width<1024 px it ll appear */}
            <img src={hamburger} width={25} height={25}></img>
          </div>
        </nav>
    </header>
  )
}

export default Nav