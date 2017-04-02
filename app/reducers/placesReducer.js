export default function reducer(
    state={
        places: [],
        fetching: false,
        fetched: false,
        error: null,
    }, action) {

    switch (action.type) {
      case "FETCH_PLACES": {
        return {...state, fetching: true}
      }
      case "FETCH_PLACES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "STORE_PLACES_FULFILLED": {
          return {
            ...state,
            fetching: false,
            fetched: true,
            places: action.payload,
          }
      }
      case "FETCH_PLACES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          places: action.payload,
        }
      }
    }

    return state
}
