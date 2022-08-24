import PropTypes from 'prop-types'
import RepoItem from './RepoItem'


function ReposList({ repos }) {
    return (
        <div className="repolist-page">
            <div className="repo-body">
                <h2>Top Repositories</h2>
                {repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default ReposList
