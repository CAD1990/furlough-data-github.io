import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import FooterTab from '@components/Data/Tabs'
import dynamic from 'next/dynamic'
import Title from '@components/Data/Title'




export default function Body(props) {

    const [constituency, setTabState] = useState([{ constituency: {} }]);
    const [availableData, setAvailableData] = useState(false)


    const MapGEO = dynamic(() => import("@components/Data/Map"), {
        ssr: false
    });

    const setConstituency = (clickedConstituency) => {

        setTabState(clickedConstituency)

    }

    const setAuth = () => {
        setAvailableData(true)
    }

    function TabAuth() {

        if (availableData) {

            return <FooterTab props={constituency} />



        }
        else {
            return <h1>Click a Constituency to find out more</h1>
        }
    }

    function TitleAuth() {


        if (availableData) {
            return <Title props={constituency} />
        }
        else {
            return null
        }
    }

    return (
        <div className="body">
            <Card style={{ width: '100%' }}>
                <TitleAuth />
                <Card.Body><MapGEO geojson={props.body} updateConstituency={setConstituency} auth={setAuth} /></Card.Body>

                <Card.Footer style={{ height: '100%' }}><TabAuth /></Card.Footer>

            </Card>
        </div>

    )
}