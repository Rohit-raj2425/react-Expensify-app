import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //   database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// //   });

// //   database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

//   database.ref('expenses').push({
//       description: 'Bill',
//       note: 'House Keeping',
//       amount: 5000,
//       createdAt: 345686
//   });


//   //database.ref('notes/-MRS5rEqSLhws0CvvC9R').remove();

// //   database.ref('notes').push({
// //       title: 'Course Topics',
// //       body: 'Reactive-native, Angular, python'
// //   });

// //  database.ref().on('value', (snapshot) => {
// //      const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //  }, (e) => {
// //      console.log('Error with data fetching ', e);
// //  });

// // setTimeout(() => {
// //     database.ref('name').set('Mohit');
// // }, 3500);

// //   database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val());
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data ', e);
// //     });

// //   database.ref().set({
// //       name: 'Rohit Raj',
// //       age: 21,
// //       stressLevel: 6,
// //       job: {
// //           title: 'Software developer',
// //           company: 'Amazon'
// //       },
// //       location: {
// //           city: 'Bihar',
// //           country: 'India'
// //       }
// //   }).then(() => {
// //       console.log('Data is saved');
// //   }).catch((e) => {
// //       console.log('This failed',e);
// //   });

// //   database.ref().update({
// //      stressLevel: 9,
// //      'job/company': 'Apple',
// //      'location/city': 'Bangloare'
// //   });

// // database.ref().remove().then(() => {
// //     console.log('Remove Suceeded!');
// // }).catch((e) => {
// //     console.log("Remove failed: ", e.message);
// // });