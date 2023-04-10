import { Link } from "react-router-dom";
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Google from '@mui/icons-material/Google';
import Instagram from '@mui/icons-material/Instagram';
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="lnks">
                <Link to="">Help</Link>
                <Link to="">Contact</Link>
                <Link to="">Donate</Link>
                <Link to="">Newsletter</Link>
                <Link to="">Sitemap</Link>
                <Link to="">Hours & Locations</Link>
            </div>
            <div className="icons">
                <Facebook />
                <Twitter />
                <Google />
                <Instagram />
            </div>
        </div>
    );
}

export default Footer;