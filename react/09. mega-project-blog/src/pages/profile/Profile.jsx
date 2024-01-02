import React, { useEffect } from 'react'
import { Form, Button, Container, Row, Image, Col } from 'react-bootstrap';
import instanceAxios from '../../services/base';
import { GET_PROFILE_URL } from '../../constants';
import { useSelector } from 'react-redux';
import Input from '../../components/form-component/Input';
import SubmitBtn from '../../components/form-component/SubmitBtn';

const Profile = () => {

    const token = useSelector(state => state.auth.token)

    const fetchUserData = async () => {
        try {
            const response = await instanceAxios.get(GET_PROFILE_URL)
        } catch (error) {
            
        }
        
    }

    // headers: {
    //     "Content-Type": "multipart/form-data"
    // }

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
                            
                            <Input
                                label="Full Name"
                            />

                            <Input
                                label="Email"
                                type="email"
                                disabled
                            />

                            <Input
                                label="Password"
                                type="password"
                            />

                            <div className='text-center'>
                                <SubmitBtn>Upload</SubmitBtn>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile