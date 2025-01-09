// components/Footer.js
import { FaFacebook, FaGithub, FaLinkedin,} from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="socials">
        <a href="httpa://github.com/NailaSolanki24" target="_blank" rel="noopener noreferrer">      
            <FaGithub />
          </a>
          <a href="httpa://www.linkedin.com/in/naila-solanki-a77425337" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <p>&copy; 2024 Naila Solanki. All rights reserved.</p>
      </div>
    </footer>
  )};