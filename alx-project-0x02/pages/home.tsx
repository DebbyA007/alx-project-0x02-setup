import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Card
        title="Card One"
        content="This is the first card's content."
      />

      <Card
        title="Card Two"
        content="Here’s some different text in the second card."
      />

      <Card
        title="Card Three"
        content="And this is the third card, showing how reusable components work!"
      />
    </div>
  );
}
