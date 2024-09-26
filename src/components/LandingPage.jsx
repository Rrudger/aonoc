import Carousel from './Carousel.jsx';
import Cards from './Cards.jsx';

const LandingPage = ({ switchPage }) => {
  return (
    <div className='grid grid-cols-1 justify-items-center'>
      <Carousel switchPage={switchPage} />
      <Cards switchPage={switchPage} />
    </div>
  )
}

export default LandingPage;
