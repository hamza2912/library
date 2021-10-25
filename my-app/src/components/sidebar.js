import React from 'react';


function Sidebar() {

  const navbar = React.useRef(null);

  const onButtonClick = () => {
    if(navbar.current.classList.contains("slideup")){
      navbar.current.classList.remove('slideup');
      navbar.current.classList.add('slidedown');
    } else {
      navbar.current.classList.remove('slidedown');
      navbar.current.classList.add('slideup');
    }
  };

    return (
  
      <div className='w-full lg:w-20 lg:h-screen lg:flex flex-col items-center lg:px-2 lg:py-6 px-4 py-4 bg-blue fixed z-50'>
            <div className='home hidden lg:block'>
                <a className='link-home' href="/#home"><i class="fas fa-book-open text-white text-xl"></i></a>
            </div>
            <div className='lg:hidden flex flex-row justify-between items-center'>
              <a className='cursor-pointer' onClick={onButtonClick}><i class="fas fa-bars text-white text-xl"></i></a>
              <div class='w-5'>
                <img className='object-contain w-full h-auto' src="../jt-logo.png" alt="JT Logo" />
              </div>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="500" className='lg:flex flex-col items-center mt-24 text-white text-xl hidden'>
                <a className='link-about mb-10' href="/#about"><i className="fas fa-users "></i></a>   
                <a className='link-events mb-10' href="/events"><i class="far fa-calendar-alt "></i></a>
                <a className='link-services mb-10' href="/#services"><i class="fas fa-hand-holding "></i></a>
                <a className='link-publications mb-10' href="/publications"><i class="far fa-newspaper "></i></a>
                <a className='link-pdf mb-10' href="/onlinepdf"><i class="fas fa-file-pdf "></i></a> 
                {/* <a className='link-view mb-10' href="/view"><i class="fas fa-street-view "></i></a>        */}
            </div>
            <div ref={navbar}  className='slideup flex flex-col items-center text-white text-sm lg:hidden'>
                <a className='mb-8' onClick={onButtonClick} href="/">Home</a>   
                <a className='mb-8' onClick={onButtonClick} href="/#mb-about">About Us</a>   
                <a className='mb-8' onClick={onButtonClick} href="/events">Events</a>
                <a className='mb-8' onClick={onButtonClick} href="/#mb-services">Services</a>
                <a className='mb-8' onClick={onButtonClick} href="/publications">Publications and Groups</a>
                <a className='mb-8' onClick={onButtonClick} href="/onlinepdf">Online PDFs</a>
                {/* <a className='mb-6' onClick={onButtonClick} href="/view">Explore</a>        */}
            </div>
      </div>

    );
  }
  
export default Sidebar;