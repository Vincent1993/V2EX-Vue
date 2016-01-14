import { EventEmitter } from 'events'
const store = new EventEmitter()

store.fetchItems = (api) => {
  return fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'no-cors'
  }).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(new Error(res.statusText))
    }
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  }).catch(err => {
    console.log(err)
  })
}

store.fetchItemsByTab = (tab) => {
  const api = tab
  return store.fetchItems(api)
}

export default store
