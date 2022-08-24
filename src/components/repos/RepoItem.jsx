import PropTypes from 'prop-types'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className='repo-item'>
            <div className="repo-item-body">
                <h3>
                    <a href={html_url}>
                        <i class="fa-solid fa-link"></i>
                        {name}
                    </a>
                </h3>
                <p className='repo-desc'>{description}</p>
                <div className='main-badge'>
                    <div className='badge bg-skyblue'>
                        <i class="fa-solid fa-eye"></i>
                        {watchers_count}
                    </div>
                    <div className='badge bg-green'>
                        <i class="fa-solid fa-star"></i>
                        {stargazers_count}
                    </div>
                    <div className='badge bg-red'>
                        <i class="fa-solid fa-info"></i>
                        {open_issues}
                    </div>
                    <div className='badge bg-yellow'>
                        <i class="fa-solid fa-utensils"></i>
                        {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

RepoItem.propType = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
