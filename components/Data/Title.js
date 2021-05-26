import Card from 'react-bootstrap/Card'




export default function Title(props) {

    const object = []

   if(!props.props){

   }else{
       object.push(props.props.properties.Name)
   }
    

    return (

        <Card.Header><h1>{object}</h1></Card.Header>

    );
}