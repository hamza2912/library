import Sidebar from '../components/sidebar'

function Home() {
    return (
      
      <div>
        <Sidebar />
        {/* Main Screen */}
        <div className='flex flex-row w-full h-screen pt-8'>
          <div className='w-2/3 pl-20'>
            <p>Hello</p>
          </div>
          <div className='w-1/3 flex justify-start items-center'>
            <img className='w-full h-auto' src="big-logo.png" alt="JT Logo Big" />
          </div>
        </div>
      </div> 
   
    );
  }
  
export default Home;