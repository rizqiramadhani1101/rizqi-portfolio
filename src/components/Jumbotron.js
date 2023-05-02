import { Col, Row, Container, Button } from 'react-bootstrap';
const Jumbotron = () => {
    return (
        <div className=" intro">
        <Container className='"text-white  text-center d-flex justify-content-center align-items-center'>
            <Row>
                <Col>
                <div className='title'>RIZQI RAMADHANI</div>
                <div className='title'>My Portfolio</div>
                <div className='button jumbotron text-center'>
                    <Button> Contact Us</Button>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Jumbotron