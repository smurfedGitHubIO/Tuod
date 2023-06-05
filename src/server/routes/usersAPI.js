import { authStore } from '../stores/stores'
import { goto } from '$app/navigation';
import { db, auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export const signUp = async (name, email, password, wordsList) => {
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

export const logIn = async (email, password) => {
  
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (cred) => {
      console.log(cred);
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

export const updateAuthStore = async (authStore) => {
  const val = doc(db, 'users', authStore.user.uid);
  const valSnap = await getDoc(val);
  authStore = valSnap.data();
  return authStore;
}

export const updateUser = async () => {

}