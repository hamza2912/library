function Footer() {


    return (
  
        <div id='footer' className='w-full bg-search'>
            <div className='lg:pl-40 lg:pr-32 pl-8 pr-6 lg:py-12 py-5 flex lg:flex-row flex-col justify-around'>
              <div class='lg:w-1/4 w-full flex flex-col lg:justify-start lg:items-start items-center'>
                <div className='flex flex-row items-center font-medium text-lg mb-4'>
                  <img className='object-contain w-10 h-auto mr-2' src="../jt-logo.png" alt="JT Logo" />
                  <p className=''>Jaffar Tayyar Library</p>
                </div>
                {/* <i className='fas fa-home'></i>  */}
                {/* <i className='fas fa-envelope'></i> */}
                <div className='w-4/5 lg:text-left text-center'>
                  <p>B-124/104 HAsnain Society Block 13 JTCHS Malir Karachi</p>
                  <p>Email: jt-library@gmail.com</p>
                  <p><i className='fab fa-whatsapp'></i>  +923361294719824</p>
                </div>
              </div>
              <div class='lg:w-1/4 w-full text-center flex flex-col hidden lg:block'>
                <p className='font-medium mb-3 mt-5'>Services</p>
                <a href=""><p>Education</p></a>
                <a href=""><p>Learning</p></a>
                <a href=""><p>Quiz</p></a>
              </div>
              <div class='lg:w-1/4 w-full text-center flex flex-col hidden lg:block'>
                <p className='font-medium mb-3 mt-5'>Events</p>
                <a href=""><p>Education</p></a>
                <a href=""><p>Learning</p></a>
                <a href=""><p>Quiz</p></a>
              </div>
              <div class='lg:w-1/4 w-full text-center flex flex-col items-center lg:items-start mt-4 lg:mt-0'>
                {/* <p className='font-medium mb-3 mt-5'>Events</p> */}
                <div className='flex flex-row text-2xl mt-2'>
                    <a href=""><i class="fab fa-facebook mr-2"></i></a> 
                    <a href=""><i class="fab fa-instagram mr-2"></i></a>
                    <a href=""><i class="fab fa-twitter mr-2"></i></a>
                    <a href=""><i class="fab fa-telegram mr-2"></i></a>  
                  </div>
                <div className='w-3/5 bg-white border-2 cursor-pointer shadow-lg mt-4'>
                  <div className='relative pl-2 pr-8 py-2'>
                    <p className='text-xs text-gray-700'>Subscribe now</p>
                    <div className='w-1/5 h-full bg-pink-400 absolute top-0 right-0 flex justify-center items-center'>
                        <a className='' href=""><i class="fas fa-envelope text-white text-sm"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    );
  }
  
export default Footer;