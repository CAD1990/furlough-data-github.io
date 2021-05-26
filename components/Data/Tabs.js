import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MyResponsivePie from './PieChart'
import MyResponsiveBar from './BarChart'

export default function FooterTab(props) {

    const tabInfo = [props]

    const renderTabs = (data, index) => {

        const results = [
            <Tab eventKey={"Eligible"} title={"Furlough vs Non Furlough"}>
                <div className="graph-body">
                    <MyResponsiveBar data={data} />
                </div>
            </Tab>,
            <Tab eventKey={"Gender"} title={"Furlough by Gender"}>
                <div className="graph-body">
                    <MyResponsivePie data={data} />
                </div>
            </Tab>
        ]


        return (


         

            <Tabs defaultActiveKey={"Eligible"} transition={false} id="Tabs-Body">
                {results}
            </Tabs>

        )
    }



    return (
        
        <div className="Tab-Body">{tabInfo.map(renderTabs)}</div>
    );
}