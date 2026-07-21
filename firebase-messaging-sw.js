importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC7wLm9cFWpLVjLCRoX5FIMJr6pr1hdoHQ",
  authDomain: "almacenzx.firebaseapp.com",
  databaseURL: "https://almacenzx-default-rtdb.firebaseio.com",
  projectId: "almacenzx",
  storageBucket: "almacenzx.firebasestorage.app",
  messagingSenderId: "806380031146",
  appId: "1:806380031146:web:7c72619106eb9a889dd4d3"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification?.title || 'Almacén Zubex',
    { body: payload.notification?.body, icon: '/icon.png' }
  );
});
