
const ActionTypes = {
  GetInviteRequested: 'GET_INVITE_REQUESTED',
  GetInviteRejected: 'GET_INVITE_REJECTED',
  GetInviteFulfilled: 'GET_INVITE_FULFILLED',

  AddToInviteRequested: 'ADD_TO_INVITE_REQUESTED',
  AddToInviteRejected: 'ADD_TO_INVITE_REJECTED',
  AddToInviteFulfilled: 'ADD_TO_INVITE_FULFILLED',

  GuestAdded: 'GUEST_ADDED'
};

const inviteReducer = (state={}, action) =>  {
	console.log(action)
		switch(action.type) {

			case ActionTypes.GetInviteRequested: {
			    return Object.assign({}, state, {
			        inProgress: true,
			        error: '',
			        success: ''
			      });
			    }

		    case ActionTypes.GetInviteRejected: {
		          return Object.assign({}, state, {
		            inProgress: false,
		            error: 'Error in getting invite.',
		          });
		        }
		        
	        case ActionTypes.GetInviteFulfilled: {
	          const { host, agenda, guests } = action.invite;
	          const newState = Object.assign({}, state, {
	            inProgress: false,
	            success: 'Got invite.',
	            host,
	            agenda
	          });
	          newState.guests = [];
	          if (guests) {
	            newState.guests = Object.keys(guests).map(k => guests[k]);
	          }
	          return newState;
	        }
	        case ActionTypes.AddToInviteRequested : {
	        	return Object.assign({}, state, {
	        		inProgress: true,
    		        error: '',
    		        success: ''
	        	})
	        }
	        case ActionTypes.AddToInviteRejected : {
	        	return Object.assign({}, state, {
	        		inProgress: false,
    		        error: '',
    		        success: ''
	        	})
	        }
	        case ActionTypes.AddToInviteFulfilled : {
	        	const newState =  Object.assign({}, state, {
	        		inProgress: false,
    		        error: '',
    		        success: 'Added SuccesFully'
	        	});

	        	return newState;
	        }
	        case ActionTypes.GuestAdded: {
	        	const newState = Object.assign({}, state);
        	     newState.guests = newState.guests || [];
        	     newState.guests = newState.guests.slice();
        	     newState.guests.push(action.guest);
        	      return newState;
	        }
		default: 
			return state;
	}
}

export default inviteReducer;
