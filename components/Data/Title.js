import Card from 'react-bootstrap/Card'


export default function Title({title}) {

    return (

        <Card.Header><h1>{title}</h1></Card.Header>

    );
}