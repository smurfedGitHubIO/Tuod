import { db, auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { updateUser } from './usersAPI';

export const getWordOfTheDay = async (authStore, wordsStore) => {
  const currentDay = new Date().getDate();
  if (authStore.day != currentDay) {
    let currentUser = authStore;
    currentUser = {
      ...currentUser,
      day: currentDay,
      index: currentUser.index+1,
    };
    console.log(currentUser, "weh");
    let unusedVar = await updateUser(currentUser).then(val => val);
    return wordsStore[currentUser.index];
  } else {
    return wordsStore[authStore.index];
  }
}