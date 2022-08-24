import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function HomePage() {
    return (
        <div className='home-page'>
            <UserSearch />
            <UserResults />
        </div >
    )
}

export default HomePage
