export const initialState = 0;


const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
      break
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
      break
    default:
      return state
  }
}


export default reducer
