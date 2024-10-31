export default function Post({ postName='No Tittle', postBody='No Body' }) {
    return (
        <div style={{
            padding: "10px",
            border: "solid teal 5px",
            // width: "50%",
            margin: "25px",
            }}>
            <h2>{postName}</h2>
            <hr />
            <p>{postBody}</p>
        </div>
    );
}