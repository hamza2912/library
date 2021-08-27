import React from 'react';
import Sidebar from '../components/sidebar';
import Event from '../components/event';
import Service from '../components/service';
import GetData from '../components/getdata';
import Footer from '../components/footer';
import About from '../components/about';
import Book from '../components/book';
import { bestSeller_responsive } from '../components/responsive';
import { services_responsive } from '../components/responsive';
import { mostPopular_responsive } from '../components/responsive';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import firebase from "firebase";
export const provider = new firebase.auth.GoogleAuthProvider();

function Home() {

  const [username, setusername] = React.useState(null);

  React.useEffect(() => {
    setusername(localStorage.getItem('name'));
  }, []);

  const login = () => {
  
    if(username === null){

      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        console.log(result.user);
        localStorage.setItem('name',result.user.displayName);
        setusername(localStorage.getItem('name'));
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    }
  };

    return (
      
      <div className='body'>

        <Sidebar />
        {/* Main Screen */}
        <div id='home' className='lg:pl-40 lg:pr-32 pl-8 pr-6'>
          {/* Search bar or ticker and login */}
          <div className='pt-20 lg:pt-4 flex flex-row w-full'>
            <div className='w-full lg:w-3/5'>
              <div className='relative text-xs text-gray-700'>
                {/* <input className='w-full bg-search rounded-lg px-5 py-2 flex flex-row justify-between focus:outline-none' 
                type="text" placeholder="Search" />
                <p><i class="fas fa-search absolute search-icon text-gray-700"></i></p> */}
                <marquee className='w-full bg-search rounded-lg px-5 py-2' direction="left">
                  {GetData("ticker").message}
                </marquee> 
              </div>
            </div>
            <div className='w-2/5 lg:flex flex-row justify-end hidden'>
              {username === null ? 
              <button onClick={login} className='bg-orange text-white py-1 px-4 text-sm rounded-lg hover:shadow-md'>
                Login</button> :
                <div className='flex flex-row items-center justify-end text-blue'>
                    <i class="fas fa-user text-white bg-orange rounded-full p-2 mr-3"></i>
                    <p className='mr-3'>{username}</p>
                    {/* <a href=""><i class="fas fa-angle-down"></i></a> */}
                </div> 
               }
            </div>
          </div>

          {/* Video logo events and books */}
          <div className='flex lg:flex-row flex-col w-full h-auto pt-3'>
            <div className='w-full lg:w-3/5 flex flex-col'>

              {/* video */}
              <div className='w-full h-auto rounded-lg bg-black relative'>
                <video className='w-full h-auto rounded-lg' autoplay="autoplay" muted x-webkit-airplay="allow">
                  <source src="./videos/jt_video.mp4" type="video/mp4"/>
                </video>
                <div className='bg-white rounded-lg absolute bottom-0 right-0 mb-3 mr-3 border-2 cursor-pointer shadow-lg'>
                  <div onClick={login} className='cursor-pointer relative lg:pl-2 lg:pr-8 pl-1 pr-6 lg:py-2 py-1'>
                    <p className='lg:text-xs text-xxs text-gray-700'>Subscribe now</p>
                    <div className='w-1/5 h-full pb-1 bg-pink-400 rounded-r-lg absolute top-0 right-0 flex justify-center items-center'>
                        <a className='' href=""><i class="fas fa-envelope text-white lg:text-xs text-xxs"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* upcoming events */}
              <div data-aos="fade-down" className='w-full grid grid-cols-2 gap-4 mt-3 mb-10'>
                <div className='relative'>
                  <p className='mb-2'>Upcoming Event</p>
                  <Event imageUrl={GetData('upcomingevent').imageUrl} title={GetData('upcomingevent').name} 
                          description={GetData('upcomingevent').description}/>
                </div>
                <div className='relative'>
                  <p className='mb-2'>Most Recent</p>
                  <Event imageUrl={GetData('mostrecent').imageUrl} title={GetData('mostrecent').name} 
                          description={GetData('mostrecent').description}/>
                </div>
              </div>

            </div>

            <div className='w-full lg:w-2/5 flex flex-col lg:pl-10'>

              {/* logo */}
              <div data-aos="zoom-in" class='w-full mx-auto pt-4 hidden lg:block'>
                <img className='object-contain w-1/2 h-auto mx-auto' src="jt-logo.png" alt="JT Logo" />
              </div>

              {/* best Seller */}
              <div id='mb-about'>
                <p className='lg:mt-10 mb-4 text-center lg:text-left'>Best Seller Books</p> 
                <OwlCarousel className='owl-theme best-seller-carousel w-full mx-auto' loop={true} margin={20} items={4} nav={true} 
                  autoplay={true} responsive={bestSeller_responsive} autoWidth={true}>
                  {/* {
                    GetData('bestselling').map(item => (
                      <div class="item mx-auto">
                          <Book name={item.title} imageUrl={item.imageUrl}/>
                      </div>
                    ))
                  } */}
                  {GetData('bestselling')}
                </OwlCarousel>
              </div>

            </div>

          </div>
        </div>

          {/* About US */}
          <div id='about' className='w-full lg:mt-8 mt-2 lg:pl-40 lg:pr-32 pl-8 pr-6 py-12 bg-search'>
            <h2 className='text-center lg:text-4xl text-lg font-medium mb-5'>About Us</h2>
            <OwlCarousel className='owl-theme best-seller-carousel w-full mx-auto' loop={true} autoplay={true} autoplayTimeout={10000}
              margin={5} items={1} nav={true}>
              <About title="1st Inauguration" details="جعفر طیا ر لابئریری جوکہ انوارالقرآن کا ذیلی ادارہ ہے  کاقیام 13 رجب 1437 ھجری کو تقریبا 800 کتابوں کے ساتھ حجۃ الاسلام مولانا ڈاکٹر سید نسیم حیدر زیدی صاحب کی زیر سرپرستی مرکزی مسجد کے ذیلی حصے میں واقع ایک چھوٹے سے کمرے میں عمل میں آیا ۔" 
                      imageUrl="./aboutUs/about1a.jpg" imageUrl2="./aboutUs/about1b.jpeg" />
              <About title="2nd Inauguration" details="لوڈشیڈنگ اور گھروں میں کتاب بینی میں حائل دیگر مشکلات کو پیش نظر رکھتے ہوئے مولانا ڈاکٹر سید نسیم حیدرزیدی کی تجویز پر طلباء کو مطالعے کا بہتر اور پُرسکون ماحول فراہم کرنے کے لیے مسجد کی بالائی منزل پرمطالعہ ہال بنانے کا فیصلہ کیا گیا۔
چنانچہ ایک سال کے بعد ولادتِ مولاعلیؑ کے پر مسرت موقع پر 13 رجب 1438 ہجری کو اس فیصلے پر عملدرآمد کرتے ہوئے مرکزی مسجد کی بالائی منزل پر مطالعے کے لیے بہترین سہولیات سے آراستہ وسیع ہال کا افتتاح کیا گیا۔ مطالعہ ہال میں طلباء کی دلچسپی دیکھنے سے تعلق رکھتی تھی طلبہ کے غیر معمولی ذوق و شوق اور بڑھتی ہوئی تعداد  کے باعث موجود کرسیاں ناکافی ثابت ہوئیں جس کی وجہ سے ان کو قالین پر بیٹھنا پڑا۔" 
                      
                      imageUrl="./aboutUs/about2a.jpg" imageUrl2="./aboutUs/about2b.jpg" />
              <About title="3rd Inauguration" details="کچھ ہی عرصے میں اندازہ ہوگیا کہ مطالعہ ہال ناکافی ثابت ہورہا ہے اوراسکے علاوہ مسجد میں طالبات کے لیے سہولت نہ ہونے کے باعث ان کو مطالعہ ہال سے استفادہ کرنے میں مشکلات سے سابقہ پیش آرہا ہے چنانچہ ایک بار پھر جعفر طیار لائبریری 13 رجب 1439 کو مرکزی سڑک پر نسبتاً ایک بہتر اور بڑی جگہ پر منتقل کردی گئی جہاں پرلائبریری کے اوقات با لترتیب یوں تھے صبح 9 بجے سے 2 بجے تک طالبات اور 4 بجے سے شب 11 بجے تک طلباء کے لیے اوقاتِ کار مقرر کیے گئے.
 نئی عمارت میں منتقلی کے بعد جعفر طیار لائبریری نے متعدد پروجیکٹ کا آغاز کیا ۔" 
                      imageUrl="./aboutUs/about3b.jpg" imageUrl2="./aboutUs/about3a.jpg" />
              <About title="4th Inauguration" details="ر10 رجب1442ہجری کے مبا رک دن جعفرطیار لائبریری اپنی ذاتی نئی عمارت میں منتقل ہو گئی ہے. جعفر طیار لائبریری کی نئی عمارت کو جدید سہولیا ت سے آراستہ کر کے بنایا گیا ہے جو کہ فن تعمیر  کا بھی ایک  خوبصورت نمونہ ہے۔" 
                      imageUrl="./events/event4.jpg" imageUrl2="./events/event5.jpg" />
            </OwlCarousel>
          </div>
          
          {/* Services */}
          <div id='services' className='bg-white lg:py-24 py-10'>
            <div className='lg:pl-40 lg:pr-32 pl-8 pr-6 w-full flex lg:flex-row flex-col items-center'>
              <div data-aos="fade-right" data-aos-delay='200' className='lg:w-1/4 w-full flex flex-col text-center lg:text-left mb-5 lg:mb-0'>
                <h1 className='font-semibold lg:text-2xl text-sm hidden lg:block'>Our</h1>
                <h1 className='font-semibold lg:text-4xl text-lg lg:-mt-5 -mt-2 pt-0 hidden lg:block'>Services</h1>
                <h1 className='font-semibold lg:text-4xl text-lg lg:-mt-5 -mt-2 pt-0 lg:hidden'>Our Services</h1>
                {/* <button className='w-2/5 bg-blue rounded-lg p-2 text-white text-xs focus:outline-none'>Browse the library</button> */}
              </div>
              <div class='lg:w-3/4 w-full'>
                <OwlCarousel className='owl-theme' loop={true} margin={10} items={3} autoplay={true} responsive={services_responsive}>
                      {GetData('services')}
                  </OwlCarousel>
              </div>
            </div>

          </div>
        
          {/* Most Popular Books */}
          <div id='mb-events' className='w-full bg-search lg:py-12 py-5'>
            <h2 className='text-center lg:text-lg text-md font-medium mb-6'>Most Popular Books</h2>
            <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
              autoplay={true} responsive={mostPopular_responsive} >
              {GetData('mostpopular')}
            </OwlCarousel>
          </div>

          {/* Events */}
          <div id='events' className='lg:mt-5 mt-0 lg:py-12 py-5 lg:pl-40 lg:pr-32 pl-8 pr-6'>
            <h1 className='text-center font-semibold lg:text-3xl text-lg'>Events Gallery</h1>
            <div className='lg:w-4/5 w-full mx-auto grid lg:grid-cols-3 grid-cols-2 gap-4 lg:my-8 my-4'>
                {GetData('showevents')}
            </div>
            <div className='flex justify-between'>
              <a href='/events' className='mx-auto bg-transparent focus:outline-none'>See More <i class="fas fa-angle-right text-gray-800"></i></a>
            </div>
          </div>

          {/* footer */}
          <Footer />

      </div> 
   
    );
  }
  
export default Home;








/* <iframe className='w-full h-full rounded-lg' src="http://www.youtube.com/embed/dugft2TPdn4?rel=0&autoplay=1&mute=1" allow='autoplay; encrypted-media' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* <div className='absolute text-black bg-black w-full bg-opacity-75 p-1 rounded-tr-lg rounded-tl-lg'>
                    <p className='mb-2'>Upcoming Event</p>
                  </div> */


{/* <div className='w-1/2 flex justify-center relative'>
              <img class='w-3/5 h-about' src="events/event1.png" alt="" />
              <img class='w-3/5 h-about absolute img-about' src="events/event1.png" alt="" />
            </div> */}

{/* <div className='flex w-full justify-center'>
                  <button className='mt-5 mx-auto bg-orange rounded-lg p-2 text-white text-xs focus:outline-none'>Browse the library</button>     
                </div> */}


{/* <div className='pl-40 w-full my-8 flex flex-row'>
            <div className='w-1/2 flex flex-col'>
              <div>
                <h2 className='text-4xl font-medium'>About Us</h2>
                <p className='w-4/5 mt-2'>Our ready-made lesson plans make it easy for classroom educators 
                  and homeschoolers to provide meaningful instruction to students. Our ready-made lesson plans make it easy for 
                  classroom educators and homeschoolers to provide meaningful instruction to students. Our ready-made lesson plans 
                  make it easy for 
                  classroom educators and homeschoolers to provide meaningful instruction to students</p>
                <button className='w-1/4 mt-5 bg-orange rounded-lg p-2 text-white text-xs focus:outline-none'>Browse the library</button>
              </div>
            </div>      
          </div> */}

{/* <div id='about' className='w-full my-8 pl-40 pr-32'>
              <div>
                <h2 className='font-serif italic text-quote text-start -mb-12'>"</h2>
              </div>
                <h2 className='text-center text-4xl font-medium'>About Us</h2>
                <p className='text-center mt-2'>Our ready-made lesson plans make it easy for classroom educators 
                  and homeschoolers to provide meaningful instruction to students. Our ready-made lesson plans make it easy for 
                  classroom educators and homeschoolers to provide meaningful instruction to students. Our ready-made lesson plans 
                  make it easy for 
                  classroom educators and homeschoolers to provide meaningful instruction to students</p>
                <div className='flex justify-end'>
                < h2 className='font-serif italic text-quote text-end -mt-2'>"</h2>
              </div>
          </div> */}


{/* <div class="item">
                        <Service name='Games' icon='fa-gamepad bg-orange' description='Our ready-made lesson plans make it easy for classroom educators 
                          and homeschoolers to provide meaningful instruction to students.'/>
                      </div>
                      <div class="item">
                        <Service name='Activites' icon='fa-radiation bg-pink-400' description='Our ready-made lesson plans make it easy for classroom educators 
                          and homeschoolers to provide meaningful instruction to students.'/>
                      </div>
                      <div class="item">
                        <Service name='Learning' icon='fa-hands-helping bg-red-400' description='Our ready-made lesson plans make it easy for classroom educators 
                          and homeschoolers to provide meaningful instruction to students.'/>
                      </div>
                      <div class="item">
                        <Service name='Education' icon='fa-university bg-blue-400' description='Our ready-made lesson plans make it easy for classroom educators 
                          and homeschoolers to provide meaningful instruction to students.'/>
                      </div> */}


{/* <Event imageUrl='./events/event1.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/>
              <Event imageUrl='./events/event2.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/>
              <Event imageUrl='./events/event3.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/>
              <Event imageUrl='./events/event1.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/>
              <Event imageUrl='./events/event2.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/>
              <Event imageUrl='./events/event3.png' title='Seminar Writing' description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididun.'/> */}


{/* Mid carousel */}
          {/* <div className='w-full h-video overflow-hidden bg-image'>
            <img className='object-fill bg-fixed w-full h-auto rounded-t-lg' src='./events/event6.jpg' alt="" />
          </div> */}