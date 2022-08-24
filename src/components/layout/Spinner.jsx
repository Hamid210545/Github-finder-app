
import spinner from './assets/spinner.gif'

function Spinner() {
    return (
        <div className='spinner-page'>
            <img
                width={100}
                className='text-center mx-auto'
                src={spinner}
                alt='Loading...'
            />
        </div>
    )
}

export default Spinner