function Card(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;