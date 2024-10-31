import "./TagButtomStyle.css"


export default function TagButtom ({ title="Click Me", children }) {
    return (
        <div>
            {title == null || title == "" ? (
               <div></div>
            ) : (
                <button className="tagButton">
                    { title }
                    { children }
                </button>
            )}
        </div>
    )
}