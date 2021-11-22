import "./DisplayList.css";

const DisplayList = (props) => {
    return (
        <>
            <ol class="order-list">
                {props.names.map(name => {
                    return <li>{name}</li>
                })}
            </ol>
        </>
    );
}

export default DisplayList;