import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { divIcon } from 'leaflet'
import { FadeLoader } from 'react-spinners';

const icons = {
    xxSmall: divIcon({className:'marker-icon pink',iconSize:[12,12]}),
    xSmall: divIcon({className:'marker-icon pink',iconSize:[16,16]}),
    small: divIcon({className:'marker-icon pink',iconSize:[24,24]}),
    normal: divIcon({className:'marker-icon purple',iconSize:[32,32]}),
    large: divIcon({className:'marker-icon purple',iconSize:[48,48]}),
    xLarge: divIcon({className:'marker-icon red',iconSize:[72,72]}),
    xxLarge: divIcon({className:'marker-icon red',iconSize:[96,96]}),
}

const MapView = (props) => {
 const {locations, mapCenter, isLoading } = props
 const markerElement = locations?.map((l,i) => {
     const { id, country_code, country, province, coordinates:{ latitude, longitude }, latest: { confirmed } } = l
     let markerIcon = icons.xxSmall;

     if( confirmed >= 101 && confirmed <= 500 ) {
        markerIcon = icons.xSmall;
     } else if( confirmed >= 501 && confirmed <= 1000 ) {
        markerIcon = icons.small;
        } else if( confirmed >= 1001 && confirmed <= 5000 ) {
            markerIcon = icons.normal;
        } else if( confirmed >= 5001 && confirmed <= 10000 ) {
            markerIcon = icons.large;
        } else if( confirmed >= 10001 && confirmed <= 50000 ) {
            markerIcon = icons.xLarge;
        } else if( confirmed >= 50001 ) {
            markerIcon = icons.xxLarge;
        }

        let title = country;
        if( province !== '' && province !== country ){
            title = `${title} - ${province}`;
        }

        return (
            <Marker key={`${id}-${country_code}`} position={[latitude, longitude]} icon={markerIcon}>
                <Popup>{title}</Popup>
            </Marker>
        );
 })
  return (
    <MapContainer className="map-view z-10" center={mapCenter} zoom={5}>
        <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
       {markerElement } 
    </MapContainer>
  )
}

export default MapView