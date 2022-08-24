import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='user-item'>
            <div className='userItem-main'>
                <div className="avator">
                    <img src={avatar_url} alt="Profile" />
                </div>
                <div>
                    <h4 className='card-title'>{login}</h4>
                    <Link to={`/user/${login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>

        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
