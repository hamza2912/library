import React from 'react';
import Book from './book';
import Service from './service';
import Event from '../components/event';
import Course from '../components/course';
import firebase from "firebase";
import { useHistory } from "react-router";


export const data = [
    {
        name: "Loading..."
    }
]

export default function GetData ( type ) {

    const [mydata, setmydata] = React.useState(data);
    const history = useHistory();

    React.useEffect(() => {
        if (type === 'bestselling'){
            firebase.database().ref('books/bestselling/').on('value', (snapshot) => {
                setmydata(snapshot.val());
                history.push('#home');
            });
        }
        if (type === 'upcomingevent'){
            firebase.database().ref('events/upcoming/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        } 
        if (type === 'mostrecent'){
            firebase.database().ref('events/recent/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        }
        if (type === 'mostpopular'){
            firebase.database().ref('books/mostpopular/').on('value', (snapshot) => {
                setmydata(snapshot.val());
                history.push('#home');
            });
        }
        if (type === 'services'){
            firebase.database().ref('services/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        } 
        if (type === 'showevents' || type === 'showallevents' || type === 'showSeminar' || type === 'showcourses' || type === 'showCompet' || type === 'book-stalls' ){
            firebase.database().ref('allEvents/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        }
        if (type === 'showCurrentCourses' || type === 'showPastCourses' || type === 'showUpcomingCourses'){
            firebase.database().ref('courses/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        }
        if (type === 'ticker'){
            firebase.database().ref('ticker/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        } 
        if (type === 'news'){
            firebase.database().ref('books/publications/akhbarRaftagan/').on('value', (snapshot) => {
                setmydata(snapshot.val());
            });
        } 
        if (type === 'khudshanasi'){
            firebase.database().ref('books/publications/khudshinasi/').on('value', (snapshot) => {
                setmydata(snapshot.val());
                history.push('/publications');
            });
        }
        if (type === 'kitabShanasi'){
            firebase.database().ref('books/publications/kitabShanasi/').on('value', (snapshot) => {
                setmydata(snapshot.val());
                history.push('/publications');
            });
        }     
    }, []);

    if ( type === 'bestselling') {

        var bestselling = []

        mydata.forEach((item) => {
            bestselling.push(
            <div class="item mx-auto">
                <Book name={item.title} imageUrl={item.imageUrl} css='flex flex-col w-auto md:items-center md:text-center'/>
            </div>
            )
        })

        return bestselling;
    }

    if ( type === 'mostpopular') {

        var mostpopular = []

        mydata.forEach((item) => {
            mostpopular.push(
            <div class="item mx-auto">
                <Book name={item.title} imageUrl={item.imageUrl} css='flex flex-col w-auto items-center text-center' />
            </div>
            )
        })

        return mostpopular;
    }

    if ( type === 'services') {

        var services = []

        mydata.forEach((item) => {
            services.push(
            <div class="item">
                <Service name={item.name} icon={item.icon} description={item.description}/>
            </div>
            )
        })

        return services;
    }

    if ( type === 'showallevents') {

        var showallevents = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));

        sortedmydata.forEach((item) => {
        
            showallevents.push(
            <Event type='detailed' imageUrl={item.imageUrl} imageUrl2={item.imageUrl2} title={item.name} date={item.date} description={item.description}/>
            )
        })

        return showallevents;
    }

    if ( type === 'showevents') {

        var showevents = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        // console.log(sortedmydata);

        if(sortedmydata.length > 1){
            for (let index = 0; index < 6; index++) {
                showevents.push(
                    <div class="item">
                        <Event imageUrl={sortedmydata[index].imageUrl} title={sortedmydata[index].name} description={sortedmydata[index].description}/>
                    </div>
                )
            }
        }

        return showevents;
    }

    if ( type === 'showSeminar') {

        var showSeminar = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.eventType === 'seminar')

        sortedmydata.forEach((item) => {
        
            showSeminar.push(
            <Event type='detailed' imageUrl={item.imageUrl} imageUrl2={item.imageUrl2} title={item.name} date={item.date} description={item.description}/>
            )
        })

        return showSeminar;
    }

    if ( type === 'showcourses') {

        var showcourses = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.eventType === 'courses')

        sortedmydata.forEach((item) => {
        
            showcourses.push(
            <Event type='detailed' imageUrl={item.imageUrl} imageUrl2={item.imageUrl2} title={item.name} date={item.date} description={item.description}/>
            )
        })

        return showcourses;
    }

    if ( type === 'showCompet') {

        var showCompet = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.eventType === 'competition')

        sortedmydata.forEach((item) => {
        
            showCompet.push(
            <Event type='detailed' imageUrl={item.imageUrl} imageUrl2={item.imageUrl2} title={item.name} date={item.date} description={item.description}/>
            )
        })

        return showCompet;
    }

    if ( type === 'showallStalls') {

        var showallStalls = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.eventType === 'bookStalls')

        sortedmydata.forEach((item) => {
        
            showallStalls.push(
            <Event type='detailed' imageUrl={item.imageUrl} imageUrl2={item.imageUrl2} title={item.name} date={item.date} description={item.description}/>
            )
        })

        return showallStalls;
    }

    if ( type === 'upcomingevent') {

        return mydata;
    }
    
    if ( type === 'ticker') {

        return mydata;
    }

    if ( type === 'mostrecent') {

        return mydata;
    }

    if ( type === 'news') {

        var news = []

        mydata.forEach((item) => {
            news.push(
            <div class="item mx-auto">
                <Book url={item.url} name={item.title} imageUrl={item.imageUrl} css='flex flex-col w-auto items-center text-center' />
            </div>
            )
        })

        return news;
    }

    if ( type === 'khudshanasi') {

        var khudshanasi = []

        mydata.forEach((item) => {
            khudshanasi.push(
            <div class="item mx-auto">
                <Book url={item.url} name={item.title} imageUrl={item.imageUrl} css='flex flex-col w-auto items-center text-center' />
            </div>
            )
        })

        return khudshanasi;
    }

    if ( type === 'kitabShanasi') {

        var kitabShanasi = []

        mydata.forEach((item) => {
            kitabShanasi.push(
            <div class="item mx-auto">
                <Book url={item.url} name={item.title} imageUrl={item.imageUrl} css='flex flex-col w-auto items-center text-center' />
            </div>
            )
        })

        return kitabShanasi;
    }


    //Knowledge Gateway

    if ( type === 'showCurrentCourses') {

        var courses = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.type === 'current')

        sortedmydata.forEach((item) => {
        
            courses.push(
                <Course type='detailed' imageUrl={item.imageUrl} course_name={item.course_name} start_date={item.start_date} end_date={item.end_date} course_desc={item.course_desc} instructor={item.instructor} instructor_desc={item.instructor_desc} contact={item.contact} organiser={item.organiser} duration={item.duration} status={item.status} form_link={item.form_link}/>
            )
        })

        return courses;
    }

    if ( type === 'showPastCourses') {

        var courses = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.type === 'past')
        console.log(mydata);
        console.log(sortedmydata);

        sortedmydata.forEach((item) => {
        
            courses.push(
            <Course type='detailed' imageUrl={item.imageUrl} course_name={item.course_name} start_date={item.start_date} end_date={item.end_date} course_desc={item.course_desc} instructor={item.instructor} instructor_desc={item.instructor_desc} contact={item.contact} organiser={item.organiser} duration={item.duration} status={item.status} form_link={item.form_link}/>
            )
        })

        return courses;
    }

    if ( type === 'showUpcomingCourses') {

        var courses = []

        let sortedmydata = mydata.sort((a, b) => (a.id < b.id ? 1 : -1));
        sortedmydata = sortedmydata.filter(x => x.type === 'upcoming')

        sortedmydata.forEach((item) => {
        
            courses.push(
                <Course type='detailed' imageUrl={item.imageUrl} course_name={item.course_name} start_date={item.start_date} end_date={item.end_date} course_desc={item.course_desc} instructor={item.instructor} instructor_desc={item.instructor_desc} contact={item.contact} organiser={item.organiser} duration={item.duration} status={item.status} form_link={item.form_link}/>
            )
        })

        return courses;
    }

};