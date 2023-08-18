import react,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
const Navbar = () => {
  const[ham,setHam] = useState(false);
  const handleHamburger = () => {
    setHam(!ham);
  }
  const [bg,setBg] = useState(false);
  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      setBg(true)
    } else {
      setBg(false)
    }
  });
  return (
    <>
      <section id="header">
        <div className={`header nav-container ${bg ? 'header-bg2': 'header-bg1'}`}>
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1><span>R</span>uwal <span>S</span>hah</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className= {`hamburger ${ham ? 'active' : ''}`} onClick={handleHamburger}>
                <div className="bar"></div>
              </div>
              <ul className= {`${ham ? 'active' : ''}`}>
                <li><a href="#hero" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#skill" data-after="Skill">Skill</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Navbar