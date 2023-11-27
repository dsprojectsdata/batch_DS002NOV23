const BlogComponent = ({name = "Common Blog", description}) => {

    // console.log("name >>", name);
    // console.log("description >>", description);

    // const {name, description} = {
    //     name: "Blog 1",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor dolorem repellat necessitatibus tenetur esse qui numquam cum explicabo. Vel excepturi dolorum, molestias odit iure mollitia repellendus explicabo facere non!"
    // };

    // console.log("obj >>", name, description);

    return (
        <div style={{ width: 300, border: "1px solid #787878", padding: 16 }}>
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Click Here</button>
        </div>
    )
}

export default BlogComponent;