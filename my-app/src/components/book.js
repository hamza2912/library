function Book( props ) {

    const {imageUrl, url, name, css} = props;

    if(url){

        return (
            
            <a href={url} target='_blank'>
                <div className={css}>
                
                    <div className='w-24 h-32 bg-black mb-2'>
                        <img className='w-full h-full' src={imageUrl} alt="" />
                    </div>
                    <p class='leading-none w-24 font-jameel text-lg'>{name}</p>
                </div>
            </a>
    
        );

    } else {

        return (
  
            <div className={css}>
                <div className='w-24 h-32 bg-black mb-2'>
                    <img className='w-full h-full' src={imageUrl} alt="" />
                </div>
                <p class='leading-none w-24 font-jameel text-lg'>{name}</p>
            </div>
    
        );

    }

    
  }
  
export default Book;