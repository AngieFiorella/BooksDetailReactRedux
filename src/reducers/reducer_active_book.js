// state argument is not application state
// this reducer is responsible for 


//two arguments: the current state and action
export default function(state=null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload
	}
	return state
}