import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import markerIconPng from "../../Images/icon/map-point.svg"


const MapBox = () => {
    return (
        <MapContainer center={[50.504, 30.465]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            />
            <Marker position={[50.504, 30.465]} icon={new Icon({iconUrl: markerIconPng, iconSize: [30, 50], iconAnchor: [12, 41]})}>
                <Popup>
                    г.Киев, ул. Шахтерская 9   <br/> Really!<br/>  Best coffee in Ukraine
                </Popup>
            </Marker>

        </MapContainer>
    );
};

export default MapBox;