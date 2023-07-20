import React from 'react';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import GetData from '../components/getdata';

function KnowledgeGateway() {

    const [courseType, setcourseType] = React.useState("upcoming");
    const current = React.useRef(null);
    const past = React.useRef(null);
    const upcoming = React.useRef(null);

    const setCourseType = (name) => {
        if(current.current.classList.contains("shadow-lg")){
          current.current.classList.remove('shadow-lg');
        }
        if(past.current.classList.contains("shadow-lg")){
            past.current.classList.remove('shadow-lg');
        }
        if(upcoming.current.classList.contains("shadow-lg")){
            upcoming.current.classList.remove('shadow-lg');
        }
        if(name === "current"){
          current.current.classList.add("shadow-lg");
        } else if(name === "past"){
          past.current.classList.add("shadow-lg");
        } else if(name === "upcoming"){
          upcoming.current.classList.add("shadow-lg");
        } else {
            if(!current.current.classList.contains("shadow-lg")){
              current.current.classList.add('shadow-lg');
            }
        }

        setcourseType(name);
    }

    const showCoursesbyType = () => {
        if(courseType === "current"){
            const data =  GetData('showCurrentCourses');
            return data;
        }
        if(courseType === "past"){
            const data =  GetData('showPastCourses');
            return data;
        }
        if(courseType === "upcoming"){
            const data =  GetData('showUpcomingCourses');
            return data;
        }
    }

    return (
  
        <div>
            <Sidebar />
            <div className='mt-0 lg:py-12 pt-24 pb-5'>
                <h1 className='text-center font-semibold lg:text-3xl text-lg'>Knowledge Gateway</h1>
                <div className='lg:pl-40 lg:pr-32 pl-8 pr-6 grid lg:grid-cols-3 grid-cols-2 gap-4 mt-5'>
                    <div ref={current} onClick={() => setCourseType("current")} className='shadow-lg p-2 cursor-pointer flex flex-row flex-wrap justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-calendar-week text-pink-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Current Courses</p>
                    </div>
                    <div ref={upcoming} onClick={() => setCourseType("upcoming")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-chalkboard text-blue-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Upcoming Courses</p>
                    </div>
                    <div ref={past} onClick={() => setCourseType("past")} className='p-2 cursor-pointer flex flex-row justify-center items-center bg-white shadow-sm hover:shadow-lg rounded-lg'>
                        <i class="fas fa-chalkboard-teacher text-red-400"></i>
                        <p className='ml-2 text-xs lg:text-sm'>Past Courses</p>
                    </div>
                </div>
                <div className='w-full mx-auto grid grid-cols-1 lg:my-2 my-6'>
                    {showCoursesbyType()}
                </div>
            </div>
            <Footer />
        </div>

    );
  }
  
export default KnowledgeGateway;