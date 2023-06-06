import { db, auth } from './firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getWords = async (authStore) => {
  const docRef = doc(db, 'words', authStore.uid);
  const snapshot = await getDoc(docRef);
  return snapshot.data().word;
}
