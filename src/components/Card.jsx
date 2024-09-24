const Card = ({ title, text, imgFile, bgFile }) => {
  const bgImage = (fileName) => {
    return {
      backgroundImage: `url("${fileName}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 0.25,
    };
  };

  return (
    <div className='relative sm:mb-0 mb-6 cursor-pointer'>
  <div style={bgImage(bgFile)} className={`rounded-lg w-full h-full inset-0
    absolute grayscale
    `}>
  </div>
    <div  className={`
      opacity-100 p-4
      rounded-lg border-2 border-primary border-double
      relative
      `}>
      <div>
        <img className='h-auto' src={imgFile} />
      </div>
      <div className='sm:mt-10'>
      <h3 className='text-center text-xl text-primary font-bold uppercase'>
        {title}
      </h3>
      <div className='text-center'>
        {text}
      </div>
      </div>
    </div>

    </div>
    )


};

export default Card;
