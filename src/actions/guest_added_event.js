import database from './database';

const ActionTypes = {
 GuestAdded: 'GUEST_ADDED'
};

 export function watchGuestAddedEvent(dispatch) {
 	database.ref('/guests').on('child_added', (snap) => {
 	    dispatch(getGuestAddedAction(snap.val()));
 	  });
 }


 function getGuestAddedAction(guest) {
 	return {
 		type: ActionTypes.GuestAdded,
 		guest
 	}
 }