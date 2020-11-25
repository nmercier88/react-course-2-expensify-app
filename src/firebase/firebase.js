import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

//database.ref('age').set(27);
//database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Second set call worked.');
// }).catch((e) => {
//     console.log('Things didnt work for the second set call.', e);
// });

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software Developer',
//     isSingle: null
// });