import { makeRequests } from '../requests'

export const getRepoReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  console.log(owner, repo)
  return makeRequests({
    // чтобы получить ответ в формате HTML необходимо передать заголовок
    // headers: {
    //   accept: contentHeader
    // },
    // url: `/repos/${owner}/${repo}/readme`,
    headers: contentHeader,
    // url: '/repos/golova-hub/gitogram4/readme'
    url: `/repos/${owner}/${repo}/readme`
  })
}
