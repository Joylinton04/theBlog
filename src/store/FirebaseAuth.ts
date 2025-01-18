import { auth } from '../config/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Dispatch } from 'redux';
import { setUser, clearUser } from "./authSlice"

interface user {
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean,
}


export const Users:user[] = [
    {
       name: 'Linton2.0',
       email: 'linton2.0@gmail.com',
       password: '123',
       isAdmin: true,
    }
]

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
      console.log(user.email, 'has signed in')
      dispatch(setUser(authUser));
    } else {
      //signed out
      dispatch(clearUser());
    }
  });
};