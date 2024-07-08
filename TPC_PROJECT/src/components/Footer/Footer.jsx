import instagram from '../../assets/icons/instagram.png'; 
import facebook from '../../assets/icons/facebook.png'; 
import youtube from '../../assets/icons/youtube.png'; 
import logo from '../../assets/logos/tpcLogo.svg';
import './Footer.css';


function Footer() {
  return (
    <div className='bg'>
      <div className='logo-section'>
            <img src={logo} className='logo' alt="Logo" />
      </div>
      <div className='border-line'></div>

      <div className='icons-section'>
        <ul className='icons'>
            <li ><img src={instagram} alt="Instagram" className='icon'/></li>
            <li ><img src={facebook} alt="facebook" width={56} height={56}/></li>
            <li ><img src={youtube} alt="Youtube" width={56} height={56}/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

{/* <div className="bg-custom-grey ">
      <div className="py-[32px] flex justify-center backdrop:align">
            <img src={logo} alt="Logo" width={150} height={74}/>
      </div>
      <div className="border-t border-white my-4"></div>

      <div className='py-[24px] px-[32px]'>
        <ul className='flex justify-end text-white gap-[10px] align-center'>
            <li ><img src={instagram} alt="Instagram" width={35} height={35}/></li>
            <li ><img src={facebook} alt="facebook" width={35} height={35}/></li>
            <li ><img src={youtube} alt="Youtube" width={35} height={35}/></li>
        </ul>
      </div>
    </div> */}