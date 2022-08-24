import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import ReposList from '../components/repos/ReposList'
import GithubContext from '../context/github/GithubContext'

function User() {
    const { user, getUser, loading, getUserRepos, repos } = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if (loading) {
        return <Spinner />
    }


    return (
        <>
            <div className='single-user-page'>
                <Link to='/' className='back-to-search-link'>
                    Back to Search
                </Link>
                <div className="custom-card-image">
                    <div className="personal-profile">
                        <figure>
                            <img src={avatar_url} alt="" />
                        </figure>
                        <div className="card-text">
                            <h2>{name}</h2>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
                <div className="card-name">
                    <h1>{name}</h1>
                    <div className='type-badge'>
                        {type}
                    </div>
                    {hireable && (
                        <div className="hireable-badge">
                            Hireable
                        </div>
                    )}
                </div>

                <div className="card-action">
                    <p className='user-bio'>{bio}</p>
                    <a href={html_url} target='_blank' rel='noreferrer' className='visit-profile'>
                        Visite Github profile
                    </a>
                </div>
                <div className="user-stats">
                    {location && (
                        <div className='stat'>
                            <div className="location" style={{ fontSize: '1.7rem', color: '#ccc', marginBottom: '5px' }}>Location</div>
                            <div className="stat-location"><h3>{location}</h3></div>
                        </div>
                    )}
                    {blog && (
                        <div className='stat'>
                            <div className="location" style={{ fontSize: '1.7rem', color: '#ccc', marginBottom: '5px' }}>Website</div>
                            <div className="stat-location">
                                <h3>
                                    <a href={`https://${blog}`}
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        {blog}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    )}
                    {twitter_username && (
                        <div className='stat'>
                            <div className="location" style={{ fontSize: '1.7rem', color: '#ccc', marginBottom: '5px' }}>Twitter</div>
                            <div className="stat-location">
                                <h3>
                                    <a href={`https://twitter.com/${twitter_username}`}
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        {twitter_username}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
                <div className="user-stats2">
                    <div className="stat2">
                        <div className="followers">
                            <div className="stat-title">
                                Followers
                            </div>
                            <div className="stat-value">
                                {followers}
                            </div>
                        </div>
                        <div className="stat-figure">
                            <i className="fa-solid fa-users"></i>
                        </div>
                    </div>
                    <div className="stat2">
                        <div className="followers">
                            <div className="stat-title">
                                Following
                            </div>
                            <div className="stat-value">
                                {following}
                            </div>
                        </div>
                        <div className="stat-figure">
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className="stat2">
                        <div className="followers">
                            <div className="stat-title">
                                Public Repos
                            </div>
                            <div className="stat-value">
                                {public_repos}
                            </div>
                        </div>
                        <div className="stat-figure">
                            <i className="fa-brands fa-codepen"></i>
                        </div>
                    </div>
                    <div className="stat2">
                        <div className="followers">
                            <div className="stat-title">
                                Public Gists
                            </div>
                            <div className="stat-value">
                                {public_gists}
                            </div>
                        </div>
                        <div className="stat-figure">
                            <i className="fa-solid fa-store"></i>
                        </div>
                    </div>
                </div>
                <ReposList repos={repos} />
            </div>
        </>
    )
}

export default User