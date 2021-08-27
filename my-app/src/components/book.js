function Book( props ) {

    const {imageUrl, name, css} = props;

    return (
  
        <div className={css}>
            <div className='w-24 h-32 bg-black mb-2'>
                <img className='w-full h-full' src={imageUrl} alt="" />
            </div>
            <p class='leading-none w-24'>{name}</p>
        </div>

    );
  }
  
export default Book;