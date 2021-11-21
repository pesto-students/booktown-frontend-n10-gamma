import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const gitHubAuthProvider = new firebase.auth.GithubAuthProvider();
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
