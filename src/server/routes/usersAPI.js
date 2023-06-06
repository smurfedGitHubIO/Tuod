import { authStore } from '../stores/stores'
import { goto } from '$app/navigation';
import { db, auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

export const signUp = async (name, email, password, wordsList) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      goto('/login')

      const user = {
        name: name,
        index: 0,
        day: new Date().getDate(),
        uid: cred.user.uid,
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
  const user = doc(db, 'users', authStore.user.uid);
  const userSnap = await getDoc(user).then(val => val);
  authStore = userSnap.data();
  return authStore;
}

export const updateUser = async (newUser) => {
  try {
    let userSnap = doc(db, 'users', newUser.uid);
    let unusedVar = await updateDoc(userSnap, newUser).then(val => val);
    return true;
  } catch (error) {
    return false;
  }
  
}