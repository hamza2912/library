function Course( props ) {

  const {imageUrl, instructor_img, organiser, course_name, contact, type, duration, course_desc, instructor, instructor_desc, start_date, end_date, status, form_link} = props;

    return (

        <div className='w-full lg:mt-8 mt-2 lg:pl-40 lg:pr-32 pl-8 pr-6 flex flex-col lg:flex-row gap-4 items-center py-6 bg-search'>
            <div className='lg:w-2/5 w-full'>
                <div className='w-full flex flex-row justify-center'>
                    <div className='w-2/3 p-2 bg-white shadow-lg'>
                    <img className='w-full h-auto' src={imageUrl} alt="" />
                    </div>
                </div>
            </div>
            <div className='lg:w-3/5 w-full mx-auto flex flex-col gap-2'>
                <h2 className='lg:text-2xl text-lg font-medium'>{course_name}</h2>
                <p><span className="font-semibold">Organizing Partner:</span> {organiser}</p>
                <p><span className="font-semibold">Instructor:</span> {instructor} <span className="text-sm text-gray-700">, {instructor_desc}</span></p>
                <p><span className="font-semibold">Duration:</span> {duration}</p>
                <p><span className="font-semibold">Date:</span> {start_date + '-' + end_date}</p>
                <p><span className="font-semibold">Description:</span> {course_desc}</p>
                <p><span className="font-semibold">Application Status:</span> {status}</p>
                {form_link != '' ? <a href={form_link} target="_blank"><p><span className="font-semibold">Enroll now at: </span> {form_link}</p></a> : null}
                <p><span className="font-semibold">Contact Details:</span> {contact}</p>
            </div>
        </div>

    );


}

export default Course;