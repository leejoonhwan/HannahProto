// JS Utilities

export default {
  makeApiUrl: (apiPath) => {
    return process.env.API_PREFIX + apiPath
  }
}
