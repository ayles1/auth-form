export enum AppRoutes {
  //index
  index = '/',
  error = '*',

  // auth
  register = '/register',
  activate = '/activate',
  activateRequest = '/activate/:id',
  login = '/login',

  //user
  profile = 'profile/:id',
  upload = '/upload'
}
