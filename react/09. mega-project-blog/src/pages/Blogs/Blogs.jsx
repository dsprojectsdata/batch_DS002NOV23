import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import blogs from "../../assets/images/blog-img.jpg";
import { GET_ALL_BLOGS_URL } from "../../constants";
import instanceAxios from "../../services/base";
import { Link } from "react-router-dom";
import Blogcard from "../../components/BlogCard/Blogcard";

const Blogs = () => {
    const [blogData, setblogData] = useState([]);
    const getallblogdata = async () => {
        try {
            const response = await instanceAxios.get(GET_ALL_BLOGS_URL);
            setblogData(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getallblogdata();
    }, []);

    return (
        <section className="Blog py-5" id="Blog">
            <Container>
                <h1 className="fw-bold text-center pb-4" style={{ fontSize: "50px" }}>
                    All Blog
                </h1>
                <Row>
                    {blogData.map((data, index) => (
                        <Col lg={4} key={index}>
                            <Link to={`/blog-details/${data?.slug}`}>
                                <Blogcard
                                    title={data?.title}
                                    description={data?.short_content}
                                    image={data?.image}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
                <div className="text-center">
                    <Button variant="primary" className="px-5 mt-5" size="lg">
                        Load More
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Blogs;
