import React, { useEffect } from 'react'
import { Form, Button, Container, Row, Image, Col } from 'react-bootstrap';
import instanceAxios from '../../services/base';
import { GET_PROFILE_URL } from '../../constants';
import { useSelector } from 'react-redux';

const Profile = () => {

    const token = useSelector(state => state.auth.token)

    const fetchUserData = async () => {
        const response = await instanceAxios.get(GET_PROFILE_URL)
        console.log(response);
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <Container>
            <Row className='my-5'>
                <Col xs={5} md={4}>
                    <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" roundedCircle width={"100%"} />
                </Col>
                <Col md={1}></Col>
                <Col xs={7} md={7}>
                    <div className='my-4'>
                        <h2>Welcome Nikhilesh Sharma</h2>
                        <p>Feel free to edit your information below</p>
                        <div className='formbox' style={{ paddingTop: 24 }}>
                            <Form.Control type="file" className='mb-3' />
                            <Form.Label htmlFor="inputPassword5" className='fw-bold' style={{ fontSize: '20px' }}>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />

                            <Form.Label htmlFor="inputPassword5" className='fw-bold mt-4' style={{ fontSize: '20px' }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />

                            <Form.Label htmlFor="inputPassword5" className='fw-bold mt-4' style={{ fontSize: '20px' }}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />

                            <div className='text-center'>
                                <Button variant="primary" className='px-5 mt-5' size="lg">Update</Button><br />
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile