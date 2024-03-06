export default function ListItem () {
    return (
        <div className="listItem horizontal-flex">
            <div className="listItemImageContainer">
                <img src='#'/>
            </div>
            <div className="vertical-flex">
                <h4>Name</h4>
                <button onClick={
                    () => {}
                }>Go to Recipe</button>
            </div>
        </div>
    )
}