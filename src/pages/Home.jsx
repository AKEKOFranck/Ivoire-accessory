import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { GiStrikingDiamonds } from "react-icons/gi";
import logo from '../assets/fondHome.png';


export default function Home() {
      return (
        <section className='home_main'>

          <div className='home_content'>
            <img src={logo} alt='fond' className='home_fond' />
          </div>

          <div className='home_content' id='home_content_2'>

           
              <GiStrikingDiamonds className='home_ico' />
            

            <div className='home_box'>
              <h3 className='home_title'>Ivoire accessory</h3>
            </div>
            <div className='home_box'>
              <Link to='/Women'>
                <h4 className='home_text1'>
                  Accessoires femme
                </h4>
              </Link>
            </div>
            <div className='home_box'>
               <Link to='/Men'>
                <h4 className='home_text2'>
                  Accessoires homme
                </h4>
              </Link>
            </div>
          </div>

        </section>
  )
}
