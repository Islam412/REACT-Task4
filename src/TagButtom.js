import "./TagButtomStyle.css"


export default function TagButtom ({ title="Click Me", children }) {
    return (
        <button className="tagButton">
            { title }
            { children }
        </button>
    )
}