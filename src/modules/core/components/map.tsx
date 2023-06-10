'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import React from 'react'
import L from 'leaflet'

import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'
import marker from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: marker.src,
  iconRetinaUrl: marker2x.src,
  shadowUrl: shadow.src
})

interface MapProps {
  center?: number[]
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[45vh] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  )
}

export default Map
