
const DisplayList = (props) => {
    return (
        <>
            <ol>
                <li>{props.names[0]}</li>
                <li>{props.names[1]}</li>
                <li>{props.names[2]}</li>
                <li>{props.names[3]}</li>
                <li>{props.names[4]}</li>
            </ol>
        </>
    );
}

export default DisplayList;