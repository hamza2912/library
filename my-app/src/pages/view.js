import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function View() {

    return (
  
        <div>
            <Sidebar />
            <div className='w-full h-auto'>
                <iframe className='w-full h-auto' 
                src="https://momento360.com/e/u/c4788bb8295b4463b5315195434a1dd9?utm_campaign=embed&utm_source=other&heading=99.86&pitch=-8.57&field-of-view=75&size=medium" frameborder="0">                    
                </iframe>
            </div>
            <Footer />
        </div>

    );
  }
  
export default View;