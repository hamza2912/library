function Service( props ) {

    const {name, icon, description} = props;
    var icons = `fas ${icon} text-white rounded-full p-2`

    return (
  
        <div className='flex flex-row'>
            <div>
                 <i class={icons}></i>
             </div>
            <div className='flex flex-col pl-5'>
                <p className='font-medium'>{name}</p>
                <p className='text-sm my-2'>{description}</p>
                {/* <button className='w-full bg-blue rounded-lg p-2 text-white text-xs focus:outline-none'>Browse the library</button> */}
            </div>
        </div>


    );
  }
  
export default Service;