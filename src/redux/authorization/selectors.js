

export const users = state => state.authorization.user

export const getToken = state => state.authorization.token

export const isLoggedIn = state => state.authorization.isLoggedIn

export const isRefreshing = state => state.authorization.isRefreshing