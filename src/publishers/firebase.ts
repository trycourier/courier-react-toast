import firebase from 'firebase/app';
import 'firebase/messaging';

class FirebasePublisher {
  messaging: any;
  constructor(firebaseConfig: any) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //TODO: add firbase listener
    this.messaging = { onMessage: () => {} };
  }
  init(callback: Function) {
    this.messaging.onMessage(callback);
  }
}

export default FirebasePublisher;