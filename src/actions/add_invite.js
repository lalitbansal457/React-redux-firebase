import database from './database';

const ActionTypes = {
  AddToInviteRequested: 'ADD_TO_INVITE_REQUESTED',
    AddToInviteRejected: 'ADD_TO_INVITE_REJECTED',
    AddToInviteFulfilled: 'ADD_TO_INVITE_FULFILLED',
};
console.log()

export function addToInvite(name) {
	console.log(name)
	return dispatch => {
		dispatch(addToInviteRequestedAction())

		 const guestRef = database.ref('/guests');
		 guestRef.push({
		 	name
		 }).then(function(response){
		 	dispatch(addToInviteFulfilledAction({name}))
		 }).catch(function(error){
		 	dispatch(addToInviteRejectedAction());
		 });
	}
}




function addToInviteRequestedAction() {
	return {
		type: ActionTypes.AddToInviteRequested
	}
}

function addToInviteRejectedAction() {
	return {
		type: ActionTypes.AddToInviteRejected
	}
}

function addToInviteFulfilledAction(addInvite) {
	return {
		type: ActionTypes.AddToInviteFulfilled,
		addInvite
	}
}