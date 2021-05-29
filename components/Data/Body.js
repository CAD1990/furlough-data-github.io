import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import FooterTab from '@components/Data/Tabs'
import dynamic from 'next/dynamic'
import Title from '@components/Data/Title'
import React, { Memo } from "react";
import CardBody from '@components/Data/CardBody'




export default function Body(props) {

    const [constituency, setTabState] = useState([{ constituency: {} }]);
    const [availableData, setAvailableData] = useState(false)


    const setConstituency = (clickedConstituency) => {

        setTabState(()=>{return clickedConstituency})

    }

    const setAuth = (trueFalse) => {
        setAvailableData(() => { return trueFalse})
    }

    function TabAuth() {

        if (availableData) {

            return <FooterTab props={constituency} />

        }
        else {
            return null
        }
    }

    function TitleAuth() {

        let title = "Click a constituency to find out more"
        if (availableData) {
            
            title = constituency.Name

            return <Title title={title} />
        }
        else {
            return <Title title={title} />
        }
    }

    return (
        <div className="body">
            <Card style={{ width: '100%' }}>
                <TitleAuth />
                <CardBody props={props.body} updateConstituency={setConstituency} auth={setAuth} />
                <Card.Footer style={{ height: '100%' }}><TabAuth /></Card.Footer>

            </Card>
        </div>

    )
}