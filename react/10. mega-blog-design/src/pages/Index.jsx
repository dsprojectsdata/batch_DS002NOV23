import React from 'react'
import bg from '../image/bg.jpg'
import blogs from '../image/blog-img.jpg'
import { Button, Card } from 'react-bootstrap'


const Index = () => {
   
  return (
    <>
        <section className='top_bg py-5 d-flex justify-content-center align-items-center text-center text-white' id='top_bg' style={{ backgroundImage: `url(${bg})`,  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '600px', backgroundColor: '#0000008a', backgroundBlendMode: 'multiply'}}>
            <div className='container'>
                <h1 className='fw-bold' style={{fontSize: '50px'}}>Lorem Ipsum</h1>
           
                <p style={{fontSize: '20px', fontWeight: '500', width: '75%', margin: '0 auto'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </section>

        <section className='Blog py-5' id='Blog'>
            <div className='container'>
                <h1 className='fw-bold text-center' style={{fontSize: '50px'}}>Blog</h1>
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
				
				</div>
				<div className='text-center'><Button variant="primary" className='px-5 mt-5' size="lg">See All</Button></div>
            </div>
        </section>
       
    </>
  )
}

export default Index