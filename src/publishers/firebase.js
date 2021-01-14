import firebase from 'firebase/app';
import 'firebase/messaging';

class FirebasePublisher {
  constructor(firebaseConfig) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //TODO: add firbase listener
    this.messaging = { onMessage: () => {} };
  }
  init(callback) {
    this.messaging.onMessage(callback);
  }
}

export default FirebasePublisher;