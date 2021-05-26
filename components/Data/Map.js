import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

export default function MapGEO(props) {

    function getColour(d) {

        return d > 21 ? '#084594' :
            d > 18 ? '#2171b5' :
                d > 15 ? '#4292c6' :
                    d > 12 ? '#6baed6' :
                        d > 9 ? '#9ecae1' :
                            d > 6 ? '#c6dbef' :
                                d > 3 ? '#deebf7' :
                                    '#f7fbff';
    }

    function style(constituency){
        
        return {
            fillColor: getColour(constituency.properties.Totals.Take_Up_Percent),
            weight: 1,
            opacity: 0.5,
            color: 'black',
            dashArray: '2',
            fillOpacity: 1
        };
    }



    function onEachConstituency(constituency, layer){
   
        layer.on({
            click: (event) =>{ props.onChange(event.target.feature)}
        })

      
    }



    return (

        <MapContainer 
        center={[53.64883949245872, -1.7454470467296537]} 
        zoom={6} scrollWheelZoom={false} 
        style={{ height: "70vh", width: "100%" }}
         
        >

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <GeoJSON data={props.geojson} attribution="&copy;" style={style} onEachFeature={onEachConstituency}></GeoJSON>


        </MapContainer>
    );

}