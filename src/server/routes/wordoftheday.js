import { db, auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { updateUser } from './usersAPI';

export const getWordOfTheDay = async (authStore, wordsStore) => {
  console.log(authStore, wordsStore)
  const currentDay = new Date().getDay();
  if (authStore.day != currentDay) {
    let currentUser = authStore;
    currentUser = {
      ...currentUser,
      day: currentDay,
      index: currentUser.index+1,
    };
    await updateUser(currentUser);
    return wordsStore[currentUser.index];
  } else {
    return wordsStore[authStore.index];
  }
}