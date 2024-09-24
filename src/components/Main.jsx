import Carousel from './Carousel.jsx';
import Cards from './Cards.jsx';

const Main = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center'>
      <Carousel />
      <Cards />
    </div>
  )
}

export default Main;
