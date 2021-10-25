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

    React.useEffect(() => {
        // firebase.database().ref('data/').set(
        //     [
        //     ]
        // );
    });

    

    return (
  
        <div>
            <Sidebar />
            <div className='w-full bg-white lg:py-12 py-24'>
                <h2 className='text-center lg:text-3xl text-2xl font-medium mb-6 font-jameel'>اخبار رفتگان</h2>
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('news')}
                </OwlCarousel>
            </div>
            <div className='w-full bg-search lg:py-12 py-5'>
                <h2 className='text-center lg:text-3xl text-2xl font-medium mb-6 font-jameel'>خود شناسی</h2>
                <img className='w-64 h-auto mx-auto mb-10' src="events/khud.jpeg" alt="" />
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('khudshanasi')}
                </OwlCarousel>
            </div>
            <div className='w-full bg-search lg:py-12 py-5'>
                <h2 className='text-center lg:text-3xl text-2xl font-medium mb-6 font-jameel'>کتاب شناسی</h2>
                <img className='w-64 h-auto mx-auto mb-10' src="events/kitab.jpeg" alt="" />
                <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('kitabShanasi')}
                </OwlCarousel>
                {/* <OwlCarousel className='owl-theme w-full lg:pl-40 lg:pr-32 pl-8 pr-6 mx-auto' loop={true} margin={20} items={6} nav={true} 
                autoplay={true} responsive={mostPopular_responsive} >
                {GetData('khudshanasi')}
                </OwlCarousel> */}
            </div>
            <div id='whatsapp-groups' className='w-full bg-white lg:py-12 py-5 lg:px-40 px-5'>
                <h2 className='text-center text-lg font-medium mb-6'>Whatsapp Groups</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='bg-search p-4 flex flex-col items-center rounded-lg'>
                        <h2 className='text-xl font-semibold font-jameel'>جعفر طیار لائبریری PDF کتب 2 </h2>
                        <p className='mt-5 font-normal text-base text-center font-jameel'>کتب پڑھنے کے شوقین لوگوں کے لیے جعفرطیار لائبریری  نے واٹس ایپ پر ایک  گروپ بنایا ہے جس میں تفسیر، سیرت، تاریخ، تصوف، طنزومزاح، سفرنامے، سوانح حیات، سیاست، افسانے، ناول، شاعری، انسائیکلوپیڈیا، ادب اور  موٹیویشنل کتب کی پی پی ڈی ایف (PDF)  شئیر  کی جاتی ہیں  جسے آپ باآسانی مفت میں ڈاؤن لوڈ کر کے پڑھ سکتے ہیں ۔
اس واٹس ایپ گروپ کا حصہ بننے کے لیے نیچے دیے گئے لنک کو جوائن کریں.</p>
                        <a className='mt-5 bg-green-400 px-4 py-2 rounded-xl text-white shadow-lg' target="_blank" href="https://chat.whatsapp.com/Gi2zuwa03u910VvcyfTef3"><i class="fab fa-whatsapp mr-2"></i>Join Group</a>
                    </div>
                    <div className='bg-search p-4 flex flex-col items-center rounded-lg'>
                        <h2 className='text-xl font-semibold font-jameel'>آڈیو کتب کا واٹس ایپ گروپ</h2>
                        <p className='mt-5 font-normal text-base text-center font-jameel'>وہ افراد جو مسلسل مصروف رہنے کی وجہ سے  کتاب پڑھنے کے لئے ٹائم نہیں نکال پاتے۔ مگر وہ کتاب پڑھنے کی تڑپ رکھتے ہیں۔ ایسے افراد کے لیے جعفرطیار لائبریری نے آڈیو کتب کا ایک واٹس ایپ گروپ بنایا ہے جس میں مشہور کتب کی آڈیو ریکارڈنگ سلسلہ وار پیش کی جائینگی. تاکہ لوگ حالت سفر میں یا اپنے فرصت کے اوقات میں اپنی سہولت کے مطابق کتاب سن کر اپنے شوق کو پورا کر سکیں۔ </p>
                        <a className='mt-5 bg-green-400 px-4 py-2 rounded-xl text-white shadow-lg' target="_blank" href="https://chat.whatsapp.com/K9qy47sRHrwJmvG9SDPZul"><i class="fab fa-whatsapp mr-2"></i>Join Group</a>
                    </div>
                    <div className='bg-search p-4 flex flex-col items-center rounded-lg'>
                        <h2 className='text-xl font-semibold font-jameel'>جعفر طیار لائبریری ۔ اخبارات / کالم </h2>
                        <p className='mt-5 font-normal text-base text-center font-jameel'>اخبار  پڑھنے کے شوقین لوگوں کے لیے جعفرطیار لائبریری نے  واٹس ایپ پر ایک  اور گروپ بنایا ہے جس میں پاکستان کے مشہور اخبارات , نوکریوں کےاشتہارات اور مشہور کالم نگاروں کے کالمز  کو شئیر کیا جاتا ہے، جسے آپ باآسانی  مفت  میں ڈاؤن لوڈ کر کے پڑھ سکتے ہیں ۔</p>
                        <a className='mt-5 bg-green-400 px-4 py-2 rounded-xl text-white shadow-lg' target="_blank" href="https://chat.whatsapp.com/CpZu9cMFZ8e10uykkRierY"><i class="fab fa-whatsapp mr-2"></i>Join Group</a>
                    </div>
                    <div className='bg-search p-4 flex flex-col items-center rounded-lg'>
                        <h2 className='text-xl font-semibold font-jameel'>جعفر طیار لائبریری ۔ کتاب کہانی</h2>
                        <p className='mt-5 font-normal text-base text-center font-jameel'> وہ افراد جو مسلسل مصروف رہنے کی وجہ سے  پوری کتاب پڑھنے کے لئے ٹائم نہیں نکال سکتے ۔ مگر وہ کتاب پڑھنے کا شوق رکھتے ہیں۔ ایسے افراد کے لیے جعفرطیار لائبریری واٹس ایپ پر ایک گروپ واٹس ایپ پر کتاب کہانی کے نام سے تشکیل دے رہی ہے۔  جس میں تاریخ، تصوف، طنزومزاح، سفرنامے، سوانح حیات، سیاست، افسانے، ناول،  ادب اور  موٹیویشنل کتب کا خلاصہ تحریری حالت میں، آڈیو میں یا ویڈیو کی صورت میں پیش کیا جائے گا۔ اور اگر  اس گروپ کا  ممبر کسی کتاب کا تعارف یا خلاصہ  دینا چاہتا ہے تو وہ ایڈمن کو فارورڈ کر سکتا ہے۔
اس واٹس ایپ گروپ کا حصہ بننے کے لیے نیچے دیے گئے لنک کو جوائن کریں </p>
                        <a className='mt-5 bg-green-400 px-4 py-2 rounded-xl text-white shadow-lg' target="_blank" href="https://chat.whatsapp.com/CoVcDCxLUhW9AybM4iyuht"><i class="fab fa-whatsapp mr-2"></i>Join Group</a>
                    </div>
                    <div className='bg-search p-4 flex flex-col items-center rounded-lg lg:col-span-2 col-span-1 lg:w-1/2 w-full mx-auto'>
                        <h2 className='text-xl font-semibold font-jameel'>تعلیمی خبریں</h2>
                        <p className='mt-5 font-normal text-base text-center font-jameel'>جعفر طیار لائبریری نے "تعلیمی خبریں" کے نام سے ایک  واٹس ایپ گروپ بنا یا ہے جس میں میٹرک انٹر اور یونیورسٹیز سے متعلقہ ہر طرح کے تعلیمی اعلانات شئیر کئے جائیں گے ۔ اس گروپ کا حصہ بننے کے لیے دیے گئے لنک کو کلک کریں </p>
                        <a className='mt-5 bg-green-400 px-4 py-2 rounded-xl text-white shadow-lg' target="_blank" href="https://chat.whatsapp.com/L4GH2BP0cJO4koPnbgRLn3"><i class="fab fa-whatsapp mr-2"></i>Join Group</a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
  }
  
export default Publications;