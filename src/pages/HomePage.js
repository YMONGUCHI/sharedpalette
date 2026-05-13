import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeIntro from '../components/HomeIntro';
import HowItWorks from '../components/HowItWorks';
import FeaturedArtists from '../components/FeaturedArtists';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HomeIntro />
        <HowItWorks />
        <FeaturedArtists />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;