import "./DisplayList.css";

const DisplayList = (props) => {
    return (
        <>
            <ol className="order-list">
                {props.names.map(name => {
                    return <li>{name}</li>
                })}
            </ol>
        </>
    );
}

export default DisplayList;