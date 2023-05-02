import {Card, Container, Row, Col, Image } from 'react-bootstrap';
import Uiux from "..//assets/img/ui/1a.jpg"
import Uiux2 from "..//assets/img/ui/1b.jpg"
import Uiux3 from "..//assets/img/ui/1c.png"
import Uiux4 from "..//assets/img/ui/1d.webp"
import Uiux5 from "..//assets/img/ui/1e.png"
import Uiux6 from "..//assets/img/ui/1f.jpg"

const Ui = () => {
    return (
        <div>
            <Container>
                <br></br>
                <h1 className='text-dark' id='ui'><center>UI / UX DESIGN</center></h1>
                <Row>
                    <Col md={4} className='uidesignwrapper'>
                    <Card className=" bg-light text-dark  uidesign" >
                            <Image src={Uiux} alt="ui design"  />
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
                            <Image src={Uiux2} alt="ui design"  />
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
                            <Image src={Uiux3} alt="ui design"  />
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
                            <Image src={Uiux4} alt="ui design"  />
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
                            <Image src={Uiux5} alt="ui design"  />
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
                            <Image src={Uiux6} alt="ui design"  />
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

export default Ui