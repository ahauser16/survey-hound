import React from 'react';
import {TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = () => {

    class SimpleExample extends React.Component {
      constructor() {
        super()
        this.state = {
          lat: 51.505,
          lng: -0.09,
          zoom: 13
        }
      }
    
      render(SimpleExample) {
        const position = [this.state.lat, this.state.lng];
        return (
          <LeafletMap center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </LeafletMap>
        );
      }
    }
}

export default MapContainer
