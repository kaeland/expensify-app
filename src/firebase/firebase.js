import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed will fire when one of our expenses gets removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed will fire when one of our expenses changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// // Turn Firebase DataSnapshot into a readable Javascript array of objects:
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // Now subscribe to changes made to the database with a call to .on()
// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // Setup "expenses" with three items (description, note, amount, createdAt)

// // database.ref('expenses').push({
// //   description: 'Baseball',
// //   note: '',
// //   amount: 123,
// //   createdAt: 132342
// // });

// // database.ref('notes').push({
// //   title: 'Course Topics', 
// //   body: 'React Native, Angular, Python'
// // });

// // const notes = [{
// //   id: '12',
// //   title: 'First Note',
// //   body: 'This is my note'
// // }, {
// //   id: '134afd',
// //   title: 'Second Note',
// //   body: 'This is my note'
// // }];

// // databse.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// //   const { name, job } = snapshot.val();
// //   console.log(`${name} is a ${job.title} at ${job.company}.`);
// // });

// // setTimeout(() => {
// //   database.ref().update({
// //     name: 'Andrew',
// //     job: {
// //       company: 'SpaceX',
// //       title: 'Manager'
// //     }
// //   });
// // }, 3500);


// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref().set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref().set(30)
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {
// //     console.log('Error fetching data', error);
// //   });


// // database.ref().set({
// //   name: 'Kaeland Chatman', 
// //   age: 26, 
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //  stressLevel: 9,
// //  'job/company': 'Amazon',
// //  'location/city': 'Seattle'
// // });

// // database.ref().remove().then(() => {
// //   console.log('Remove succeeded.');
// // }).catch((error) => {
// //   console.log('Remove failed:', error);
// // });

