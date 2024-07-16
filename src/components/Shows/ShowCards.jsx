function ShowCards({ url, title }) {
  return (
    <div className="show-card">
      <img src={url} alt={title} />
      {/* <h2>{title}</h2> */}
    </div>
  );
}

export default ShowCards;
