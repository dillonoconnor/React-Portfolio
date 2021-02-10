import './Card.css';

function Card(props) {
  return (
    <article>
      <h3>{props.project}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default Card;