import {Card, Container, Row, Col, Image } from 'react-bootstrap';
import Web from "..//assets/img/webdev/1.jpg"
import Web2 from "..//assets/img/webdev/2.jpg"
import Web3 from "..//assets/img/webdev/3.jpg"
import Web4 from "..//assets/img/webdev/4.jpg"
import Web5 from "..//assets/img/webdev/5.jpeg"
import Web6 from "..//assets/img/webdev/6.jpg"

const Webdev = () => {
    return (
        <div>
            <Container>
                <br></br>
                <h1 className='text-white' id='webdev'><center>WEB DEVELOPMENT</center></h1>
                <Row>
                    <Col md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web} alt="ui design"  className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                    <Col md={4}  className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web2} alt="ui design"  className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                    <Col  md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web3} alt="ui design"   className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                    <Col  md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web4} alt="ui design"   className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                    <Col  md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web5} alt="ui design"  className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                    <Col  md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Web6} alt="ui design"  className='image'/>
                            <div className='bg-light'>
                                <div className='p-2 m-1'>

                                
                                <Card.Title className='text-center'>UI Design</Card.Title>
                                <Card.Text className='text-left'>
                                          This is a wider card with supporting 
                                           
                            </Card.Text>
                         <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>
                         </div>
                     </Card>
                    </Col>
                </Row>
            </Container>
        
      </div>
    )
}

export default Webdev