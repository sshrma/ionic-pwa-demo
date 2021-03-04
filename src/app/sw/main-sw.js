/**
 * SID: Extending the service workers to include custom ones in APP, you can include as many as you want
 * Note: The name of the service worker file MUST be in a format "*-sw.js" and place the file in "src/app/sw/" folder.
 */

// automatically generated service worker by @angular/pwa (ngsw)
importScripts('ngsw-worker.js');

// service worker handling firebase messaging
importScripts('firebase-messaging-sw.js');
