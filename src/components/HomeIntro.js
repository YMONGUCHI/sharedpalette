import { Link } from 'react-router-dom';
import './HomeIntro.css';
import paintingImage from '../assets/painting-on-canvas.avif';

function HomeIntro() {
    return (
        <section className="home-intro">
            <div className="home-intro-inner">
                <div className="intro-text">
                    <h1>Find the perfect artist for your vision</h1>
                <p>Commission custom artwork from independent creators.
                    Physical pieces shipped to you, digital work delivered online.
                </p>
                <Link to="/browse" className="start-btn">Start Browsing</Link>
                </div>
                <div className="intro-image">
                    <img src={paintingImage} alt="Male artist painting on canvas"/>
                </div>
            </div>
        </section>
    );
}

export default HomeIntro;