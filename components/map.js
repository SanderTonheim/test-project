import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapExample = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat:24, lng:20}}
    >
    </GoogleMap>
  ))
);


export default MapExample
