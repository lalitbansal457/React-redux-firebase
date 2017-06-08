import database from './database';

import firebase from 'firebase';



/*const config = {
    apiKey: "AIzaSyDrptst3Z7hy_um5sRaFdGa-D970q0y76c",
    authDomain: "react-redux-firebase-88b79.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-88b79.firebaseio.com",
    projectId: "react-redux-firebase-88b79",
    storageBucket: "react-redux-firebase-88b79.appspot.com",
    messagingSenderId: "941638839613"
  };
  firebase.initializeApp(config);

  const database = firebase.database();*/

const ActionTypes = {
  GetInviteRequested: 'GET_INVITE_REQUESTED',
  GetInviteRejected: 'GET_INVITE_REJECTED',
  GetInviteFulfilled: 'GET_INVITE_FULFILLED'
};

export function getInvite() {
	return dispatch => {
		dispatch(getInviteRequestedAction());
    console.log(" get_invites")
		return database.ref('/').once('value', (snap) => {
			const invite = snap.val();
      console.log(invite)
			dispatch(getInviteFulfilledAction(invite));
		}).catch((error) => {
	      console.log(error);
	      dispatch(getInviteRejectedAction());
    	});
	}
}

function getInviteRequestedAction() {
  return {
    type: ActionTypes.GetInviteRequested
  };
}

function getInviteRejectedAction() {
  return {
    type: ActionTypes.GetInviteRejected
  }
}

function getInviteFulfilledAction(invite) {
  return {
    type: ActionTypes.GetInviteFulfilled,
    invite
  };
}