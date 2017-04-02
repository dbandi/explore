import axios from "axios";

export function fetchPlaces(place_id) {
  return function(dispatch) {
    axios.get('https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&oauth_token=MX12PJNE4ETCS2HTTXZLLUHUCQ5EBIHINKG0VJWHMYHJVQ1Z&v=20170401&place_id=' + place_id)
      .then((response) => {
          console.log(response);
        dispatch({type: "FETCH_PLACES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PLACES_REJECTED", payload: err})
      })
  }
}