export class BaseApi {
  resource: string
  constructor (resource: string) {
    this.resource = resource
  }

  list () {
    return useFetch(`/${this.resource}`, {
      method: 'GET',
      baseURL: '/api',
    })
  }

  create (payload: any) {
    console.log('CREATE');
    return useFetch(`/${this.resource}`, {
      method: 'POST',
      baseURL: '/api',
      body: payload,
    })
  }

  get (id: string) {
    return useFetch(`/${this.resource}/${id}`, {
      method: 'GET',
      baseURL: '/api',
    })
  }

  update (id: string, payload: any) {
    console.log('UPDATE');
    return useFetch(`/${this.resource}/${id}`, {
      method: 'PATCH',
      baseURL: '/api',
      body: payload,
    })
  }

  delete (id: string) {
    return useFetch(`/${this.resource}/${id}`, {
      method: 'DELETE',
      baseURL: '/api',
    })
  }
}
