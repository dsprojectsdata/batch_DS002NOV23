import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { FaRegCalendarAlt } from "react-icons/fa";
import parse from 'html-react-parser';

import instanceAxios from "../../services/base";
import { BLOG_SINGLE_URL } from "../../constants";

const BlogDetails = () => {
    const { slug } = useParams();
    const [detailsdata, setdetailsdata] = useState();

    const blogDetails = async () => {
        try {
            const response = await instanceAxios.get(`${BLOG_SINGLE_URL}/${slug}`);
            console.log("response>>", response?.data?.data);
            setdetailsdata(response?.data?.data);
        } catch (error) {
            console.error("Error fetching blog details:", error);
        }
    };
    useEffect(() => {
        blogDetails();
    }, []);

    const style = {
        sectionStyle: {
            width: 900,
            margin: "auto",
        },
        image: {
            width: "auto",
            maxWidth: "100%",
        },
        topHeader: {
            display: "flex",
            justifyContent: "space-between",
        },
    };

    return (
        <>
            <Container className="py-5">
                <section style={style.sectionStyle}>
                    <div style={style.topHeader}>
                        <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <FaRegCalendarAlt />
                            <Moment format="MMM D YYYY">{detailsdata?.created_at}</Moment>
                        </p>
                        <p>{detailsdata?.category["name"]}</p>
                    </div>
                    <Image src={detailsdata?.image} style={style.image} />
                    <h1 className="mt-3 mb-2">{detailsdata?.title}</h1>
                    <div className="content mt-3">
                        {detailsdata?.content && parse(detailsdata?.content)}
                        {/* <p>{detailsdata?.content}</p> */}
                    </div>
                </section>
            </Container>
        </>
    );
};

export default BlogDetails;
