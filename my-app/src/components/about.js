function About( props ) {

    const {imageUrl, imageUrl2, title, details} = props;
  
      return (
    
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className='lg:w-3/5 w-full mx-auto'>
              <h2 className='text-center lg:text-2xl text-lg font-medium'>{title}</h2>
              <div className='lg:w-4/5 w-full mx-auto'>
                <h2 className='font-serif italic text-quote text-orange text-start -mb-12'>"</h2>
                <p className='text-center mt-2 text-sm lg:text-base text-justify'>{details}</p>
                <div className='flex justify-end'>
                  < h2 className='font-serif italic text-quote text-orange text-end -mt-2'>"</h2>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className='lg:w-2/5 w-full'>
              <div className='w-full flex flex-row justify-start'>
                <div className='w-2/3 p-2 bg-white shadow-lg'>
                  <img className='w-full h-auto' src={imageUrl} alt="" />
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="100" id='mb-services' className='w-full flex flex-row justify-end z-10 -mt-5'>
                <div className='w-2/3 p-2 bg-white shadow-lg'>
                  <img className='w-full h-auto' src={imageUrl2} alt="" />
                </div>
              </div>
            </div>
          </div>
  
      );
    }
    
  export default About;