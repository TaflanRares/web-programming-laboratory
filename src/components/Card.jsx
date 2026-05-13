function Card(props) {
    const descriptionText = typeof props.description === 'string' && props.description.trim() !== ''
        ? props.description
        : 'No description provided.';

    return (
        <div>
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{descriptionText}</p>
        </div>
    );
}

export default Card;