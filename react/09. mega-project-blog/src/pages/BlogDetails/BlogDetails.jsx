import React from 'react'
import { Container, Image } from 'react-bootstrap'

const BlogDetails = () => {

    const imageSrc = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'

    const style = {
        sectionStyle: {
            width: 900,
            margin: "auto"
        },
        image: {
            width: "auto",
            maxWidth: "100%"
        },
        topHeader: {
            display: "flex",
            justifyContent: "space-between",
        }
    }

    return (
        <>
            <Container className='py-5'>
                <section style={style.sectionStyle}>
                    <div style={style.topHeader}>
                        <p>Nov 16 2023</p>
                        <p>Education</p>
                    </div>
                    <Image src={imageSrc} style={style.image} />
                    <h1 className='mt-3 mb-2'>You can have anything you want in Life If You Dress for it</h1>
                    <div className='content'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veritatis, ratione odio animi sed suscipit, fugiat vero in minima nam, porro voluptas laudantium sequi corrupti? Dolor id delectus laboriosam tenetur!</p>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default BlogDetails