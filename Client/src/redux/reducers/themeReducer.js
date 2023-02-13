export default (state, action) => {
    switch (action.type) {
    case 'getTheme':
        return {
            rotating: action.payload
        }
    default:
        return state
    }
}