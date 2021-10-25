function Event( props ) {

    const {imageUrl, imageUrl2, title, date, description, type} = props;

    if (type === 'detailed'){

        return (

            <div className='w-full lg:mt-8 mt-2 lg:pl-40 lg:pr-32 pl-8 pr-6 flex flex-col lg:flex-row items-center py-6 bg-search'>
                <div className='lg:w-3/5 w-full mx-auto'>
                    <h2 className='text-center lg:text-4xl text-lg font-medium font-jameel'>{title}</h2>
                    <p className='text-sm text-center mt-4'>{date}</p>
                    <div className='lg:w-4/5 w-full mx-auto mt-4'>
                        <h2 className='font-serif italic text-quote text-orange text-start -mb-12'>"</h2>
                        <p className='text-center mt-2 font-jameel text-lg'>{description}</p>
                        <div className='flex justify-end'>
                        < h2 className='font-serif italic text-quote text-orange text-end -mt-2'>"</h2>
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/5 w-full'>
                    <div className='w-full flex flex-row justify-start'>
                        <div className='w-2/3 p-2 bg-white shadow-lg'>
                        <img className='w-full h-auto' src={imageUrl} alt="" />
                        </div>
                    </div>
                    {
                        imageUrl2 ? 
                        <div id='mb-services' className='w-full flex flex-row justify-end z-10 -mt-5'>
                            <div className='w-2/3 p-2 bg-white shadow-lg'>
                                <img className='w-full h-auto' src={imageUrl2} alt="" />
                            </div>
                        </div> : null
                    }
                    
                </div>
            </div>
    
        );

    } else {

        return (
  
            <div className='flex flex-col rounded-lg shadow-lg'>
                <img className='w-full h-events rounded-t-lg' src={imageUrl} alt="" />
                <div className='w-full bg-white rounded-b-lg p-2 flex flex-col items-end'>
                <p className='text-lg font-jameel'>{title}</p>
                <p className='text-sm line-clamp overflow-ellipsis text-gray-700 font-jameel mt-2 text-right'>{description}</p>
                </div>
            </div>
    
        );

    }

  }
  
export default Event;



// <div className='flex flex-row rounded-lg shadow-lg mb-10'>
            //     <div className='w-1/3'>
            //         <img className='w-full h-auto rounded-l-lg' src={imageUrl} alt="" />
            //     </div>
            //     <div className='w-2/3'>
            //         <div className='w-full bg-white rounded-b-lg p-2'>
            //             <p className='text-lg'>{title}</p>
            //             <p className='text-sm'>{date}</p>
            //             <p className='text-sm text-gray-700'>{description}</p>
            //         </div>
            //     </div>
            // </div>