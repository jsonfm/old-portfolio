import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: -3.996623,
    lng: -79.201539,
  },
  zoom: 15,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyA_c7KMN1Z7AHIGgXrYOLB2d1vlY6c6VFQ' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={-3.996623}
        lng={-79.201539}
        text={'Loja'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap