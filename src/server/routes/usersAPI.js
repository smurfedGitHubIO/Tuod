import { authStore } from '../stores/stores'
import { goto } from '$app/navigation';
import { db, auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const signUp = async (name, email, password, wordsList) => {
  console.log("a");
  await createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      goto('/login')

      const user = {
        name: name,
        index: 0,
      };
      setDoc(doc(db, "users", cred.user.uid), user);
      setDoc(doc(db, "words", cred.user.uid), {word: wordsList});
      return true;
    })
    .catch(err => {
      console.log(err.message);
      return false;
    });
}

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      authStore.set(cred);
      goto('/dashboard');
      return '';
    })
    .catch(err => {
      return err.message;
    })
}

export const logOut = () => {
  return signOut(auth)
    .then(() => {
      goto('/login');
    })
    .catch((err) => {
      console.log(err.message);
    });
};
