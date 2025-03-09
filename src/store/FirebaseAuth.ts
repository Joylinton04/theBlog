import { auth } from '../config/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Dispatch } from 'redux';
import { setUser, clearUser } from "./authSlice"

interface AuthUser {
  uid: string;
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

export const initializeAuthListener = (dispatch: Dispatch) => {
  onAuthStateChanged(auth, (user: User | null) => {
    if (user) {
      const authUser: AuthUser = {
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL,
        displayName: user.displayName
      };
      dispatch(setUser(authUser));
    } else {
      //signed out
      dispatch(clearUser());
    }
  });
};