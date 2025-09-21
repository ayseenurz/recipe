import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebaseConfig";

//üye olma fonksiyonu kullanıcı adı ile

export const signUp = async (username, email, password) => {
  if (email && password) {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (credential.user) {
        await updateProfile(credential.user, {
          displayName: username,
        });
        console.log("Başarılı")
      }
    } catch (error) {
      console.log(error);
    }
  }
};

/* giriş yapma fonksiyonu */

export const signIn =  async (email,password) => {
    if(email && password) {
        try {
            await signInWithEmailAndPassword(auth,email,password);
        } catch (error) {
            console.log(error)
        }
    }
}

/* çıkış yapma fonksiyonu */

export const logOut = async() => {
    await signOut(auth);
}