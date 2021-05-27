import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

export default function MapGEO({ geojson, updateConstituency, auth }) {

    function onEachConstituency(constituency, layer) {

        layer.on({
            click: (event) => { updateConstituency(constituency), auth(true)}
        })


    }

    function getColour(d) {

        return d > 20 ? '#452136' :
            d > 16 ? '#994877' :
                d > 12 ? '#BE749F' :
                    d > 8 ? '#D8ACC5' :
                        d > 4 ? '#EBD5E2' :
                            '#ffffff';
    }

    function style(constituency) {

        return {
            fillColor: getColour(constituency.properties.Totals.Take_Up_Percent),
            weight: 1,
            opacity: 0.5,
            color: 'black',
            dashArray: '2',
            fillOpacity: 1
        };
    }

    return (

        <MapContainer
            center={[53.64883949245872, -1.7454470467296537]}
            zoom={6} scrollWheelZoom={false}
            style={{ height: "60vh", width: "100%" }}
        >

            <GeoJSON data={geojson} onEachFeature={onEachConstituency} attribution="Maps courtesy of ONS, Data courtesy of Parliament" style={style} ></GeoJSON>

        </MapContainer>
    );

}