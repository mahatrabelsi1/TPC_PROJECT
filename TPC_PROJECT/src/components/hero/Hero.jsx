import './Hero.css'; 
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1><span>TPC</span> <br/> GALLERIES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="select-content">
            <select >
                <option value="1" default >Tournoi</option>
            </select>
            <select >
                <option value="1" default>Annee</option>
            </select>
          </div>
        </div>
        <div className="image-content">
            <div className='image-card'>
                <img src={hero1} alt="Image 1" className="hero-image" width={424} height={848}/>
            </div>
            <div className='image-card'>
                <img src={hero2} alt="Image 1" className="hero-image" width={424} height={848}/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
