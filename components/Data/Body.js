import Card from 'react-bootstrap/Card'
import { useState, setState } from 'react'
import FooterTab from '@components/Data/Tabs'
import dynamic from 'next/dynamic'
import Title from '@components/Data/Title'




export default function Body(props) {

    const [constituency, setTabState] = useState([{constituency: {}}]);
    const [availableData, setAvailableData] = useState(false)
    

    const MapGEO = dynamic(() => import("@components/Data/Map"), {
        ssr: false
    });
   

    function TabAuth() {
     
        if (availableData) {
            
            return <FooterTab props={constituency.constituency} />

            

        }
        else {
            return <p>Click a Constituency to find out more</p>
        }
    }

    function TitleAuth(){


        if(availableData){
            return <Title props={constituency.constituency}/>
        }
        else {
            return null
        }
    }

    return (
        <div className="body">
            <Card style={{ width: '100%' }}>
                <Card.Body><MapGEO geojson={props.body} onChange={(value) => setTabState({ constituency: value }, setAvailableData(true))} /></Card.Body>
                <TitleAuth />
                <Card.Footer style={{height: '100%'}}><TabAuth /></Card.Footer>

            </Card>
        </div>

    )
}