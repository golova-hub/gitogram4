import { makeRequests } from '../requests'

export const getRepoReadme = (owner, repo, payload) =>
  makeRequests({
    // url: `/repos/${owner}/${repo}/readme`,
    url: '/repos/golova-hub/gitogram4/readme',
    ...payload
  })
