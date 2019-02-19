import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import clone from 'lodash/clone'
import omit from 'lodash/omit'
import Axios, { AxiosResponse, AxiosInstance } from 'axios'

const request: AxiosInstance = Axios.create()

request.interceptors.response.use((response: AxiosResponse): any => {
  let { status, config } = response
  let method = (config.method || '').toLocaleUpperCase()

  /**
   * hidden body when method euqal DELETE
   * https://stackoverflow.com/questions/299628/is-an-entity-body-allowed-for-an-http-delete-request?answertab=active#tab-top
   */
  if (method === 'DELETE') {
    response.data = status >= 200 && status < 300
      ? { code: 0, message: 'success', data: {} }
      : { code: -1, message: 'error', data: null }
  }

  if (isPlainObject(response.data)) {
    let data: any = clone(response.data)
    let privates: any = omit(response, ['data'])
    privates = mapValues(privates, (value) => ({ value, writable: false }))
    return Object.defineProperties(data, privates)
  }

  return response
})

export default request

export const CancelToken = Axios.CancelToken
