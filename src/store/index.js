// import Firebase from 'firebase'
import { Promise } from 'es6-promise'
import { EventEmitter } from 'events'

const api = 'https://www.v2ex.com/api/')
const itemsCache = Object.create(null)
const store = new EventEmitter()

export default store

// api.child('topics/latest.json').on('value', snapshot => {
//   topStoryIds = snapshot.val()
//   store.emit('laststroys-updated')
// })

