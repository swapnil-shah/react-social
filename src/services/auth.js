import { auth, provider } from '../firbase'

export const signInWithGoogle = async () => {
  let user;
  await auth.signInWithPopup(provider)
    .then(res => {
      user = res.user
    })
    .catch(error => {
      console.log(error.message)
    })
  return user;
}

export const logout = async () => {
  let logoutSuccess;
  await auth.logout()
    .then(() => {
      logoutSuccess = true
    })
    .catch(error => {
      console.log(error.message)
    })
  return logoutSuccess
}
