import 'whatwg-fetch'
import Cookies from 'js-cookie'

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null
  }

  return response.json()
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Override option method method
 * @param {object} options request option
 * @param {string} overrideMethod request method
 */
const setupRequestOptions = (options = {}, overrideMethod) => {
  const token = Cookies.get('token')

  const newOptions = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  if (overrideMethod) newOptions.method = overrideMethod
  if (options.body) {
    newOptions.headers['Content-Type'] = 'application/json'
    newOptions.body = JSON.stringify(options.body)
  }

  return newOptions
}

/**
 * Request API by fetch with JSON format
 * @param {string} url api endpoint
 * @param {object} options request option
 * @param {string} overrideMethod request method
 */
const fetchJSON = (url, options, overrideMethod) => {
  const newOptions = setupRequestOptions(options, overrideMethod)

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
}

/**
 * Request API by fetch with FormData format
 * @param {string} url api endpoint
 * @param {object} options request option
 * @param {string} overrideMethod request method
 */
const fetchFile = (url, options, overrideMethod) => {
  const newOptions = { ...options, method: overrideMethod }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
}

export const getRequest = (url, options) => fetchJSON(url, options, 'GET')
export const postRequest = (url, options) => fetchJSON(url, options, 'POST')
export const putRequest = (url, options) => fetchJSON(url, options, 'PUT')
export const deleteRequest = (url, options) => fetchJSON(url, options, 'DELETE')
export const postFileRequest = (url, options) => fetchFile(url, options, 'POST')
