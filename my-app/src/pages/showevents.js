import React from 'react';
import Event from '../components/event';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import GetData from '../components/getdata';

function ShowEvents() {

    const [eventType, seteventType] = React.useState("events");
    const events = React.useRef(null);
    const seminar = React.useRef(null);
    const courses = React.useRef(null);
    const bookStalls = React.useRef(null);
    const competition = React.useRef(null);

    const setEventType = (name) => {
        if(events.current.classList.contains("shadow-lg")){
            events.current.classList.remove('shadow-lg');
        }
        if(seminar.current.classList.contains("shadow-lg")){
            seminar.current.classList.remove('shadow-lg');
        }
        if(courses.current.classList.contains("shadow-lg")){
            courses.current.classList.remove('shadow-lg');
        }
        if(bookStalls.current.classList.contains("shadow-lg")){
            bookStalls.current.classList.remove('shadow-lg');
        }
        if(competition.current.classList.contains("shadow-lg")){
            competition.current.classList.remove('shadow-lg');
        }
        if(name === "seminar"){
            seminar.current.classList.add("shadow-lg");
        } else if(name === "courses"){
            courses.current.classList.add("shadow-lg");
        } else if(name === "bookStalls"){
            bookStalls.current.classList.add("shadow-lg");
        } else if(name === "competition"){
            competition.current.classList.add("shadow-lg");
        } else {
            if(!events.current.classList.contains("shadow-lg")){
                events.current.classList.add('shadow-lg');
            }
        }

        seteventType(name);
    }

    const showEventsbyType = () => {
        if(eventType === "events"){
            const data =  GetData('showallevents');
            return data;
        }
        if(eventType === "seminar"){
            const data =  GetData('showSeminar');
            return data;
        }
        if(eventType === "courses"){
            const data =  GetData('showcourses');
            return data;
        }
        if(eventType === "competition"){
            const data =  GetData('showCompet');
            return data;
        }
        if(eventType === "bookStalls"){
            const data =  GetData('showallStalls');
            return data;
        }
    }

    return (
  
        <div>
            <Sidebar />
            {/* lg:pl-40 lg:pr-32 pl-8 pr-6 */}
            <div className='mt-0 lg:py-12 pt-24 pb-5'>
                <h1 className='text-center font-semibold lg:text-3xl text-lg'>Events Gallery</h1>
                <div className='lg:pl-40 lg:pr-32 pl-8 pr-6 grid lg:grid-cols-5 grid-cols-3 gap-4 mt-5'>
                    <div ref={events} onClick={() => setEventType("events")} className='shadow-lg p-2 cursor-pointer flex flex-row flex-wrap justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-calendar-week text-pink-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Events</p>
                    </div>
                    <div ref={seminar} onClick={() => setEventType("seminar")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-chalkboard-teacher text-red-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Seminars</p>
                    </div>
                    <div ref={courses} onClick={() => setEventType("courses")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-chalkboard text-blue-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Workshops</p>
                    </div>
                    <div ref={competition} onClick={() => setEventType("competition")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-trophy text-yellow-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Competitions</p>
                    </div>
                    <div ref={bookStalls} onClick={() => setEventType("bookStalls")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-book text-orange"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Book Stalls</p>
                    </div>
                </div>
                <div className='w-full mx-auto grid grid-cols-1 lg:my-2 my-6'>
                    {showEventsbyType()}
                </div>
            </div>
            <Footer />
        </div>

    );
  }
  
export default ShowEvents;