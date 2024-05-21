import img from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img src={img} alt="Botanify Logo" className="img-fluid" />
            </div>
            <p>Botanify merupakan aplikasi karya anak bangsa. Botanify membantu anda menemukan penyakit pada tanaman anda.</p>
            <div className="footer-social-links">
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <div className="col-md-2">
            <h5>Sitemap</h5>
            <ul className="list-unstyled">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Fitur</a></li>
              <li><a href="#">Informasi</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">Teams</a></li>
              <li><a href="#">Karir</a></li>
              <li><a href="#">Bantuan</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Keep in touch</h5>
            <p>Never miss any news from us, subscribe now</p>
            <form className="footer-subscribe-form">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <div className="input-group-append">
                  <button className="btn" type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-4">
            <div className="footer-left">
              <p>&copy; 2024 Botanify All rights reserved.</p>
            </div>
            <div className="footer-right">
              <p>12,290,526 tanaman telah discan dalam 3 bulan</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
