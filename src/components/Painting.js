import PropTypes from "prop-types";

export default function Painting(props) {
  console.log(props);
  const { imgUrl, title, authorProfile, authorName, price, quantity } = props;
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author:<a href={authorProfile}>{authorName}</a>
      </p>
      <p>Price:{price} credits</p>
      <p>Availability:{quantity < 10 ? "finished" : "available"}</p>
      <button type="button">Add to bag</button>
    </div>
  );
}
Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorProfile: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
