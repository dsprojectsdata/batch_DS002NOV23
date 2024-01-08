import React from "react";
import { Card, Button } from "react-bootstrap";
import BlogCardBtn from "./BlogCardBtn";

const Blogcard = ({ title, description, image, btnTitle = "Details" }) => {
	return (
		<>
			<Card className="mb-3">
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<BlogCardBtn title={btnTitle} />
				</Card.Body>
			</Card>
		</>
	);
};

export default Blogcard;
