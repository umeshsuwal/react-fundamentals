import CardBody from './CardBody';

function Card() {
  return (
    <div style={{ marginTop: '1rem', padding: '2rem', border: '1px dashed #888' }}>
      <h3>A card</h3>
      <CardBody />
    </div>
  );
}

export default Card;