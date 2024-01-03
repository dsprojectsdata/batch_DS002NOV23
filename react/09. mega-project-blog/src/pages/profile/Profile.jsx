import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Image, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"

import instanceAxios from '../../services/base';
import { GET_PROFILE_URL, REQUIRED, UPDATE_PROFILE_URL } from '../../constants';
import Input from '../../components/form-component/Input';
import SubmitBtn from '../../components/form-component/SubmitBtn';

const Profile = () => {

    const [profile, setProfile] = useState();
    const [previewURL, setPreviewURL] = useState();
    const [isLoading, setIsLoading] = useState();

    const { handleSubmit, register } = useForm()

    const handleImageChange = (e) => {
        // console.log(e.target.files[0])
        if(e.target.files){
            const previewURL = URL.createObjectURL(e.target.files[0]);
            setPreviewURL(previewURL);
            // Error if we do not put a if condition
        }
    }

    const fetchUserData = async () => {
        setIsLoading(true);
        try {
            const response = await instanceAxios.get(GET_PROFILE_URL)
            setProfile(response.data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const updateProfile = async (data) => {
        // console.log(data.profile);
        // console.log(data.profile[0]);
        const profileUpdateData = {
            profile: data.profile[0],
            name: data.name
        }
        if(data.password !== ""){
            profileUpdateData["password"] = data.password
        }
        // const formData = FormData();
        // formData.append("profile", data.profile[0])
        // formData.append("name", data.name)
        const response = await instanceAxios.post(UPDATE_PROFILE_URL, profileUpdateData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    const dummyImage = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <Container>
            <Row className='my-5'>
                <Col xs={5} md={4}>
                    <Image src={previewURL ? previewURL : (profile?.avatar ? `http://localhost/ds-tc-blog/${profile.avatar}` : dummyImage)} roundedCircle width={"100%"} />
                    
                </Col>
                <Col md={1}></Col>
                <Col xs={7} md={7}>
                    <div className='my-4'>
                        <h2>Welcome Nikhilesh Sharma</h2>
                        <p>Feel free to edit your information below</p>

                        {profile && <Form onSubmit={handleSubmit(updateProfile)} className='formbox' style={{ paddingTop: 24 }} onChange={handleImageChange} >

                            <Form.Control type="file" className='mb-3' {...register("profile")} />

                            <Input
                                label="Full Name"
                                defaultValue={profile?.name}
                                {...register("name", {
                                    required: REQUIRED
                                })}
                            />

                            <Input
                                label="Email"
                                type="email"
                                disabled
                                defaultValue={profile?.email}
                            />

                            <Input
                                label="Password"
                                type="password"
                                {...register("password")}
                            />

                            <div className='text-center'>
                                <SubmitBtn>Upload</SubmitBtn>
                            </div>

                        </Form>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile