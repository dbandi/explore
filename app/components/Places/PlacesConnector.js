import React from 'react';
import { connect } from 'react-redux';
import Places from './Places';
import { bindActionCreators } from 'redux';

import { fetchPlaces } from '../../actions/placesActions';

const mapStateToProps = function (store) {
    return {
        places: store.places.places
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchPlaces: (places) => dispatch(fetchPlaces(places))
    }
}

class PlacesConnector extends React.Component {
    render() {
        return (
            <Places places={this.props.places} fetchPlaces={(places) => this.props.fetchPlaces(places)} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesConnector);