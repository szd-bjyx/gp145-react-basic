const defaultState = {
  counter: 0
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'loadData':
      return {
        counter: action.data
      }
    default:
      return state
  }
}