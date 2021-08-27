import React from 'react';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { mostPopular_responsive } from '../components/responsive';
import GetData from '../components/getdata';
import firebase from "firebase";


function Publications() {

    // React.useEffect(() => {
    //     firebase.database().ref('books/publications/khudshinasi/').set(
    //         [
                
    //         ]
    //     );
    // });

    return (
  
        <div>
            <Sidebar />
            <div className='w-full bg-white lg:py-12 py-5'>
                <h2 className='text-center lg:text-lg text-md font-medium mb-6'>Akhbar Raftagan</h2>
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('news')}
                </OwlCarousel>
            </div>
            <div className='w-full bg-search lg:py-12 py-5'>
                <h2 className='text-center lg:text-lg text-md font-medium mb-6'>Khud Shanasi</h2>
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('khudshanasi')}
                </OwlCarousel>
            </div>
            <div className='w-full bg-white lg:py-12 py-5'>
                <h2 className='text-center lg:text-lg text-md font-medium mb-6'>Online PDF Books</h2>
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('mostpopular')}
                </OwlCarousel>
            </div>
            <Footer />
        </div>

    );
  }
  
export default Publications;




// {imageUrl: "./books/book2.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book3.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book6.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book7.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book8.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book9.png",
//                 title: "Book"},
//                 {imageUrl: "./books/book10.png",
//                 title: "Book"}


// {name: "Games",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-gamepad bg-red-400'},
// {name: "Education",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-book bg-blue-400'},
// {name: "Learning",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-pen bg-yellow-400'},
// {name: "Quiz",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-bird bg-orange'},
// {name: "Games",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-gamepad bg-green-400'},
// {name: "Games",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-gamepad bg-pink-400'},
// {name: "Games",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-gamepad bg-red-400'},
// {name: "Games",
// description: 'Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.',
// icon: 'fa-gamepad bg-pink-400'},




// {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.26%20PM.jpeg?alt=media&token=57608624-96c9-4cae-9084-80eae5463fd4",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.27%20PM.jpeg?alt=media&token=9696f63b-5e56-49ba-9ea9-558f576c2850",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.26%20PM%20(1).jpeg?alt=media&token=7f6aa6f8-276a-4f39-b5f5-500400778acd",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.27%20PM%20(1).jpeg?alt=media&token=2b755204-10c8-4988-9c84-a0f39f080c97",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.28%20PM.jpeg?alt=media&token=829d8e89-b816-4cfe-8563-acd29ef9ef85",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.28%20PM%20(1).jpeg?alt=media&token=9e8c22e1-f277-4958-9916-8abc53f0cd43",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.28%20PM%20(2).jpeg?alt=media&token=94f2897f-055a-448d-8b70-69767ce905c1",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.30%20PM.jpeg?alt=media&token=34269120-1f3e-42da-bf10-4cfc31e84870",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.29%20PM.jpeg?alt=media&token=3511f171-eda7-4dff-830a-5cf707fd75f4",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.29%20PM%20(1).jpeg?alt=media&token=03d7eb25-25a8-4970-9b6d-881c51d91ec8",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.30%20PM%20(1).jpeg?alt=media&token=9a5dfccd-5a51-49c3-b747-1b1ef5d3d822",
//                 title: ""},
//                 {imageUrl: "https://firebasestorage.googleapis.com/v0/b/jtlibrary-pk.appspot.com/o/publications%2FKhud-Shanasi%2FWhatsApp%20Image%202021-07-17%20at%203.16.30%20PM%20(2).jpeg?alt=media&token=979f9bfc-dc95-4511-a4db-af8355f41fa7",
//                 title: ""}