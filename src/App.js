import PaintingList from "./components/PaintingList";
import paintings from "./painting.json";
import Section from "./components/Section";

export default function App() {
  return (
    <div>
      {/* <PaintingList items={paintings}></PaintingList> */}
      <Section title="Top of the week">
        <PaintingList items={paintings}></PaintingList>
      </Section>
      <Section></Section>
      {/* <Painting
        imgUrl={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        authorProfile={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />
      <Painting
        imgUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        authorProfile={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />
      <Painting
        imgUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        authorProfile={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
}
