import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {

    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        return (
            <div className='users'>
                <div className="user-main">
                    {
                        users.map((user) => {
                            return (
                                <UserItem key={user.id} user={user} />
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return <Spinner />
    }

}

export default UserResults
