import BlogComponent from "./BlogComponent";

const PropOperation = () => {

    const blogDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor dolorem repellat necessitatibus tenetur esse qui numquam cum explicabo. Vel excepturi dolorum, molestias odit iure mollitia repellendus explicabo facere non!";

    const blogData = [
        {
            id: 1,
            title: "Blog 1",
            description: blogDescription
        },
        {
            id: 2,
            title: "Blog 2",
            description: blogDescription
        },
        {
            id: 3,
            title: "Blog 3",
            description: blogDescription
        },
        {
            id: 4,
            title: "Blog 4",
            description: blogDescription
        }
    ];

    return (
        <>
            <h1>Props</h1>
            <div style={{ display: "flex", gap: 16 }}>
            
                {blogData.map((blog, index) => {
                    return <BlogComponent key={index} name={blog.title} description={blog.description} />;
                })}

                {/* <BlogComponent name="Blog 1" description={blogDescription} />
                <BlogComponent name="Blog 2" description={blogDescription} />
                <BlogComponent name="Blog 3" description={blogDescription} />
                <BlogComponent description={blogDescription} /> */}
            </div>
        </>
    )
}

export default PropOperation;