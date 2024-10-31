import TagButtom from "./TagButtom"


// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    return (
        <div style={{ margin: "30px", border: "solid teal 5px" }}>
            {/* <button className="tagButton">Click Me</button> call anther badge(TagButtom)*/}
            <TagButtom title='اخر المقالات' >
                <div>
                    <span>🫠🫠🫠</span>
                </div>
            </TagButtom>

            <TagButtom title='اكثر قرائة' >
                <div>
                    <img style={{ width: "100px", height: "60px" }} src="https://picsum.photos/200/300" />
                </div>
            </TagButtom>
            <TagButtom title='مميز' >
                <div>
                    <h1>Click Me</h1>
                    <span>��🤗🤗��</span>
                </div>
            </TagButtom>
            <TagButtom title='مقالات الاسبوع ' />
            <TagButtom title='اخبار التكنولجيا ' />
            {/* <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom />
            <TagButtom /> */}
        </div>
    )
}

