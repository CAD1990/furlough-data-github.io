import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'

export default function MyResponsiveBar({ data }) {


    const json = []



    if (!data.props) {

    } else {

        const properties = data.props.properties

        const maleNoFurlough = (properties.Eligible["Male"] - properties.Male["Employments Furloughed"])
        const femaleNoFurlough = (properties.Eligible["Female"] - properties.Female["Employments Furloughed"])
        json.push(
            {
                "id": "Male Workers",
                "Not Furloughed": maleNoFurlough,
                "Furloughed": properties.Male["Employments Furloughed"]
            },
            {
                "id": "Female Workers",
                "Not Furloughed": femaleNoFurlough,
                "Furloughed": properties.Female["Employments Furloughed"]
            },
            {
                "id": "All Workers",
                "Not Furloughed": (maleNoFurlough + femaleNoFurlough),
                "Furloughed": (properties.Male["Employments Furloughed"] + properties.Female["Employments Furloughed"])
            })



    }


    console.log(json)





    return (

  
            <ResponsiveBar
                data={json}
            keys={["Not Furloughed", "Furloughed"]}
                indexBy="id"
                margin={{ top: 50, right: 40, bottom: 100, left: 80 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternLines',
                        background: '#00A7B5',
                        color: '#00A7B5',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#CFB500',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: "Not Furloughed"
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: "Furloughed"
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Gender',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'No. Workers',
                    legendPosition: 'middle',
                    legendOffset: -55
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={'#ffffff'}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'row',
                        justify: true,
                        translateX: 30,
                        translateY: 70,
                        itemsSpacing: 10,
                        itemWidth: 100,
                        itemHeight: 0,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        
        

    )
}