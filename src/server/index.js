import {
  logIn,
  signUp,
  logOut
} from './routes/usersAPI'
import { db, auth} from './routes/firebase'

export {
  logIn,
  signUp,
  logOut,
  db,
  auth
}