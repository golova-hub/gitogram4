import { makeRequests } from '../requests'

export const getRepoReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequests({
    // чтобы получить ответ в формате HTML необходимо передать заголовок
    // headers: {
    //   accept: 'application/vnd.github.v3.html+json'
    // },
    // url: `/repos/${owner}/${repo}/readme`,
    headers: contentHeader,
    url: '/repos/golova-hub/gitogram4/readme'
  })
}
