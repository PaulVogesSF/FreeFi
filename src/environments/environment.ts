// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyCnlhgBsIFyAVes3A69-YLKkTIBBhSvTzI',
    authDomain: 'freefi-4f345.firebaseapp.com',
    databaseURL: 'https://freefi-4f345.firebaseio.com',
    projectId: 'freefi-4f345',
    storageBucket: 'freefi-4f345.appspot.com',
    messagingSenderId: '50116035025'
  },

  agora: {
    appID: '59e5fed1ef904a139cd4eb7ae0177c6f'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
