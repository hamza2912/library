function Sidebar() {
    return (
  
      <div className='w-20 h-screen flex flex-col items-center px-2 py-8 bg-blue fixed'>
            <div className='home'>
                <a className='link-home' href=""><i class="fas fa-book-open text-white text-xl"></i></a>
            </div>
            <div className='flex flex-col items-center mt-24 text-white text-xl'>
                <a className='link-about mb-10' href="#about"><i className="fas fa-users "></i></a>   
                <a className='link-events mb-10' href=""><i class="far fa-calendar-alt "></i></a>
                <a className='link-services mb-10' href=""><i class="fas fa-hand-holding "></i></a>
                <a className='link-view mb-10' href=""><i class="fas fa-street-view "></i></a>       
            </div>
      </div>

    );
  }
  
export default Sidebar;