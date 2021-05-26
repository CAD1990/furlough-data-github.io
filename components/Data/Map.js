import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

export default function MapGEO(props) {

    function getColour(d) {

        return  d > 18 ? '#006d2c' :
                    d > 14 ? '#2ca25f' :
                        d > 12 ? '#66c2a4' :
                            d > 8 ? '#99d8c9' :
                                d > 4 ? '#ccece6' :
                                    '#edf8fb';
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