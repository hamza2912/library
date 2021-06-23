import Sidebar from '../components/sidebar'

function Home() {
    return (
      
      <div>
        <Sidebar />

        <div className='pl-40 pr-32'>

        {/* Main Screen */}
          <div className='flex flex-row w-full pt-8'>
            <div className='w-2/3'>
              <div className='w-full bg-search rounded-lg px-5 py-2 flex flex-row justify-between text-xs text-gray-700'>
                  <p>Search</p>
                  <p><i class="fas fa-search"></i></p> 
              </div>
            </div>
            <div className='w-1/3 flex flex-row justify-end'>
              <div className='w-1/3 flex flex-row justify-between items-center text-blue'>
                  <a href=""><i class="fas fa-user text-white bg-orange rounded-full p-2"></i></a>
                  <p>Aziz</p>
                  <a href=""><i class="fas fa-angle-down"></i></a>
              </div>

            </div>
          </div>
          <div className='flex flex-row w-full h-screen pt-6'>
            <div className='w-2/3 flex flex-col'>
              <div className='w-full h-video rounded-lg bg-black relative'>
                <div className='w-1/3 bg-white rounded-lg absolute bottom-0 mb-5 ml-5 border-2 border-pink-400'>
                  <div className='relative px-4 py-2'>
                    <p className='text-xs text-gray-700'>Subscribe now</p>
                    <div className='w-1/5 h-full bg-pink-400 rounded-r-lg absolute top-0 right-0 flex justify-center items-center'>
                        <a className='' href=""><i class="fas fa-envelope text-white text-sm"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full grid grid-cols-2 gap-4 mt-5'>
              <div>
                <p className='mb-2'>Upcoming Event</p>
                <div className='w-full h-64 rounded-lg bg-black relative'>
                </div>
              </div>
              <div>
                <p className='mb-2'>Most Recent</p>
                <div className='w-full h-64 rounded-lg bg-black relative'>
                </div>
              </div>
            </div>

            </div>

            <div className='w-1/3 flex flex-col pl-10'>
              <div class='w-full mx-auto'>
                <img className='object-contain w-3/5 h-auto mx-auto' src="jt-logo.png" alt="JT Logo" />
              </div>

              <div>
                <p className='my-2'>Best Seller Books</p>
                <div className='w-full grid grid-cols-4 gap-4'>
                  <div className='flex flex-col'>
                    <div className='h-32 bg-black mb-2'>
                    </div>
                    <p>Book Name</p>
                  </div>
                  <div className='flex flex-col'>
                    <div className='h-32 bg-black mb-2'>
                    </div>
                    <p>Book Name</p>
                  </div>
                  <div className='flex flex-col'>
                    <div className='h-32 bg-black mb-2'>
                    </div>
                    <p>Book Name</p>
                  </div>
                  <div className='flex flex-col'>
                    <div className='h-32 bg-black mb-2'>
                    </div>
                    <p>Book Name</p>
                  </div>
                </div>
              </div>


            </div>
            
          </div>

            



          {/* <div className='flex flex-row w-full h-auto pt-5'>
            
          </div> */}



        </div>
        
        






      </div> 
   
    );
  }
  
export default Home;