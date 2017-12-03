import React from 'react';
import { compose, pure, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

/* global google */

const hoc = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBBIPRh7wPALSS_SgmRICN6ZlzSlawC4ok&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  pure,
);

export const JobDetailMap = ({location}) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={new google.maps.LatLng(location.lat, location.lng)}
  >
    <Marker
      position={{ lat: location.lat, lng: location.lng }}
    />
  </GoogleMap>
);

export default hoc(JobDetailMap);
