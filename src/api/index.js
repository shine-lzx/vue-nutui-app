import request from '@/config/request'

export function mockapi(params) {
  return request({
    url: '/swipes',
    method: 'get',
    params,
  })
}

export function list(params) {
  return request({
    url: '/patient',
    method: 'post',
    params,
  })
}
