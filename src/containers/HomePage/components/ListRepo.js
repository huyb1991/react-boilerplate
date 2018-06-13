import React from 'react'
import PropTypes from 'prop-types'

const ListRepo = ({ repos }) => (
  <ul>
    {repos && repos.map(repo => (
      <li key={repo.id}>{repo.name}</li>
    ))}
  </ul>
)

ListRepo.defaultProps = {
  repos: [],
}

ListRepo.propTypes = {
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default ListRepo
