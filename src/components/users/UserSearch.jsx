import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
    const [text, setText] = useState('')

    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => { setText(e.target.value) }
    const { users, searchUsers, removeUsers } = useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === "") {
            setAlert('Please enter something', 'error')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    const handleDelete = (e) => {
        removeUsers();
    }

    return (
        <>
            <div className='user-search'>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder='serach any github repositries.....'
                        value={text}
                        onChange={handleChange}
                    />
                    <button>Search</button>
                </form>
                {users.length > 0 && (
                    <button onClick={handleDelete} className='clear-btn'>
                        Clear
                    </button>
                )}

            </div>
        </>
    )
}

export default UserSearch
