import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";


export default function Header() {
      return (
        <header>
          <Link to='/'>
             <IoHomeOutline className='home_link' />
          </Link>

          <nav>
            <Link to='/Women'>
              <h4 className='nav_link'> Accessoires 
                <p> Femme  </p>
                </h4>
            </Link>

            <Link to='/Men'>
              <h4 className='nav_link'> Accessoires 
                <p> Homme </p>
                </h4>
            </Link>

            <Link to=''>
              <RiCustomerService2Line className='nav_ico_link' />
            </Link>
          </nav>
        </header>
  )
}
