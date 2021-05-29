import Card from 'react-bootstrap/Card'
import dynamic from 'next/dynamic'


export default function CardBody({props, updateConstituency, auth}) {

    const MapGEO = dynamic(() => import("@components/Data/Map"), {
        ssr: false
    });

    return (

        <Card.Body><MapGEO geojson={props} setConstituency={updateConstituency} auth={auth} /></Card.Body>

    );
}