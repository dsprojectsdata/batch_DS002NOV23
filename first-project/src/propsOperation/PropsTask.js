import Card from "./Card";

const PropsTask = () => {

    const blogs = [
        {
            id: 1,
            name: "Why we use CSS?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            id: 1,
            name: "What is AI?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            id: 1,
            name: "What is AI?",
            content: "We will see in future"
        },
    ];

    return (
        <>
            <h1>All Cards</h1>
            <div style={{ display: "flex", gap: 24 }}>

                {blogs.map((blog, index) => {
                    return (
                        <Card key={index} name={blog.name} content={blog.content} />
                    )
                })}

                {/* <Card name={name} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" />
                <Card name="What is AI?" content="We will see in future" />
                <Card content="We will see in future" /> */}
            </div>
        </>

    )
}

export default PropsTask;