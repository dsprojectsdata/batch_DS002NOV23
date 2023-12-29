import React from 'react'
import { Card, Button } from 'react-bootstrap'
import blogs from '../image/blog-img.jpg'

const AllBlog = () => {
  return (
    <>
    <section className='Blog py-5' id='Blog'>
            <div className='container'>
                <h1 className='fw-bold text-center pb-4' style={{fontSize: '50px'}}>All Blog</h1>
                <div className='row'>
				<div className='col-lg-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>
				<div className='col-lg-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>
				<div className='col-lg-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>

                <div className='col-lg-4 mt-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>

                <div className='col-lg-4 mt-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>

                <div className='col-lg-4 mt-4'>
					<Card>
						<Card.Img variant="top" src={blogs} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</Card.Text>
							<Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
						</Card.Body>
					</Card>
				</div>
				
				</div>
				<div className='text-center'><Button variant="primary" className='px-5 mt-5' size="lg">Load More</Button></div>
            </div>
        </section>
    </>
  )
}

export default AllBlog