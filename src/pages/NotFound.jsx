import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='notfoundpage'>
            <h1 className='oops'>!Oops</h1>
            <h5 className='error-404'>404 - page not found</h5>
            <Link to='/' className='back-to-home-btn'>
                <i className="fas fa-home"></i>
                Back to home
            </Link>
        </div>
    )
}

export default NotFound
