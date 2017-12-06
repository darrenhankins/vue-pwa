import firebase from 'firebase'
import config from './firebaseconfig.js'

firebase.initializeApp(config)

export const db = firebase.database()
