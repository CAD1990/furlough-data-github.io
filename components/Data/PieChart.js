import { ResponsivePie } from '@nivo/pie'
import { useState } from 'react'

export default function MyResponsivePie({ data }) {


    const json = []

    if (!data.props) {
        
    } else {

        json.push(
            {
                "id": "Female Workers Furloughed",
                "value": data.props.Female["Employments Furloughed"]
            },
            {
                "id": "Male Workers Furloughed",
                "value": data.props.Male["Employments Furloughed"]
            })

    }


    const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
        let total = 0
        dataWithArc.forEach(datum => {
            total += datum.value
        })

        return (
            
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '6vh',
                    fontWeight: '600',
                }}
            >
                Total: {total}
            </text>
        )
    }





    return (


        <ResponsivePie

            data={json}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color'}}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={"#ffffff"}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: '#00a7b5',
                    color: '#00a7b5',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: '#888B8D',
                    color: '#888B8D',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: "Female Workers Furloughed"
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: "Male Workers Furloughed"
                    },
                    id: 'dots'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 200,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]} 
            innerRadius={0.6}
            enableSliceLabels={false}
            radialLabel={d => `${d.id} (${d.formattedValue})`}
            activeInnerRadiusOffset={8}
            layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
        />

    )
}




