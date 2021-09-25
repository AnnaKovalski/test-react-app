import Painting from "./Painting";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            authorProfile={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
