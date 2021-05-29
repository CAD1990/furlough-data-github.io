import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MyResponsivePie from './PieChart'
import MyResponsiveBar from './BarChart'

export default function FooterTab(props) {

    return (

        <div className="Tab-Body">
            
            <Tabs key={0} defaultActiveKey={0} transition={false} id="Tabs-Body">
                <Tab key={0} eventKey={0} title={"Overview"}>
                    <div className="graph-body">
                        <MyResponsiveBar data={props} />
                    </div>
                </Tab>

            <Tab key={1} eventKey={1} title={"Gender"}>
                    <div className="graph-body">
                        <MyResponsivePie data={props} />
                    </div>
                </Tab>

            </Tabs></div>
    );
}