import './Heading.css';

function Heading (props) {
    return (
        <>
            <h2 className="Heading__header">{props.heading}</h2>
            <div className="Heading__header-border"></div>
        </>
    );
}

export default Heading;