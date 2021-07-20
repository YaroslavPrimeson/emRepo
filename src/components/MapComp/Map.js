// import React from 'react';
// import { compose, withProps } from "recompose"
// import {withGoogleMap, GoogleMap, Marker, withScriptjs} from 'react-google-maps'
//
//
// const API_KEY = 'AIzaSyBlxpRESB2fSg32tA1lVNLvLpG9m5mX5co'
//
// const exampleMapStyles = [
//     { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//     { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//     { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//     {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//     },
//     {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//     },
//     {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{ color: "#263c3f" }],
//     },
//     {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#6b9a76" }],
//     },
//     {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ color: "#38414e" }],
//     },
//     {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#212a37" }],
//     },
//     {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9ca5b3" }],
//     },
//     {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{ color: "#746855" }],
//     },
//     {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{ color: "#1f2835" }],
//     },
//     {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#f3d19c" }],
//     },
//     {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{ color: "#2f3948" }],
//     },
//     {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#d59563" }],
//     },
//     {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#17263c" }],
//     },
//     {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#515c6d" }],
//     },
//     {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{ color: "#17263c" }],
//     },
// ];
//
// const MyMapComponent = compose(
//     withProps({
//
//         googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap
// )(() =>
//     <GoogleMap
//         options={{
//             styles: exampleMapStyles,
//         }}
//
//         defaultZoom={14}
//         defaultCenter={{lat: 50.504, lng: 30.465}}
//     >
//         <Marker position={{lat: 50.504, lng: 30.465}} title={"Самый лучший кофе"} markerWithLabel={true}/>
//     </GoogleMap>
// );
// export default MyMapComponent