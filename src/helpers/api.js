// Should config baseUrl based on project
const username = 'huyb1991'
const baseUrl = `https://api.github.com/users/${username}`

export default {
  getRepos: `${baseUrl}/repos?type=all&sort=updated`,
}
