/*
* Se verifica que el usuario puede ver un item determinado según sus permisos guardados en localstorage
*/
export function can (state) {
  return permission => {
    const userInfo = JSON.parse(localStorage.getItem('CASHFLOW_SESSION_INFO'))
    const per = (userInfo !== null) ? userInfo.permissions.filter(item => { return item === permission }).length : 0
    if (per > 0) {
      return true
    } else {
      return false
    }
  }
}

export function UserInfo (state) {
  return JSON.parse(localStorage.getItem('CASHFLOW_SESSION_INFO'))
}

export function dataEvent (state) {
  return JSON.parse(localStorage.getItem('HEV_DATA_EVENT'))
}
