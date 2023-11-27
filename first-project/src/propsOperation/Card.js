

// const Card = (props) => {
const Card = ({ name = "Default Blog Name", content }) => {

    // console.log("name >>", name || "Default String");

    // console.log("props >>", props, props.name);

    return (
        <>
            <div style={{ width: "300px", border: "1px solid #000", padding: 24 }}>
                <h1>{name}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                <button>Click Here</button>
            </div>
        </>
    )
}

export default Card;