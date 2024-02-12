import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link as MyLink } from "react-router-dom";
import Blogcard from "../../components/BlogCard/Blogcard";
import { fetchBlogs } from "../../services/Blogs";

const Blogs = () => {
    const [blogData, setblogData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [totalBlogData, setTotalBlogData] = useState(0)

    const DATA_PER_PAGE = 6

    const handleLoadMore = () => {
        getallblogdata(currPage + 1)
    }

    useEffect(() => {
        getallblogdata();
    }, []);

    // GET BLOGS API
    const getallblogdata = async (curr_page = 1) => {
        setIsFetching(true);
        try {
            const data = {
                curr_page: curr_page,
                data_per_page: DATA_PER_PAGE
            }
            // const response = await instanceAxios.post(GET_ALL_BLOGS_URL, data);
            const response = await fetchBlogs(data);
            setblogData([...blogData, ...response?.data?.data.blogs]);
            setTotalBlogData(response.data.data.total);
            curr_page !== currPage && setCurrPage(curr_page);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <section className="Blog py-5" id="Blog">
            <Container>
                <h1 className="fw-bold text-center pb-4" style={{ fontSize: "50px" }}>
                    All Blog
                </h1>
                <Row>
                    {blogData.map((data, index) => (
                        <Col lg={4} key={index}>
                            <MyLink to={`/blog-details/${data?.slug}`}>
                                <Blogcard
                                    title={data?.title}
                                    description={data?.short_content}
                                    image={data?.image}
                                />
                            </MyLink>
                        </Col>
                    ))}
                </Row>
                {totalBlogData !== blogData.length && 
                <div className="text-center">
                    <Button
                        variant="primary"
                        className="px-5 mt-5"
                        size="lg"
                        onClick={handleLoadMore}
                        disabled={isFetching}
                    >
                        {isFetching && <Spinner size="sm" style={{ marginRight: 8 }} />}
                        Load More
                    </Button>
                </div>}
            </Container>
        </section>
    );
};

export default Blogs;
