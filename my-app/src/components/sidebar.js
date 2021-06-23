function Sidebar() {
    return (
  
      <div className='w-20 h-screen flex flex-col items-center px-2 py-8 bg-sidebar fixed'>
            <div className='catalog'>
                <a className='link-home' href=""><i class="fas fa-book-open text-white text-xl"></i></a>
            </div>
            <div className='flex flex-col items-center mt-24 text-white text-xl'>
                <a className='link-about' href="#about"><i className="fas fa-users mb-10"></i></a>   
                <a className='link-events' href=""><i class="far fa-calendar-alt mb-10"></i></a>
                <a className='link-services' href=""><i class="fas fa-hand-holding mb-10"></i></a>
                <a className='link-view' href=""><i class="fas fa-street-view mb-10"></i></a>       
        </div>
      </div>

    );
  }
  
export default Sidebar;