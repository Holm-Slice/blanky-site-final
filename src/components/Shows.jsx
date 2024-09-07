import showData from "./Shows/showData";
import ShowCards from "./Shows/ShowCards";
// import "./Shows.css";

function Shows() {
  return (
    <div className="show-gallery">
      {showData.map((show) => (
        <ShowCards key={show.id} url={show.url} title={show.title} />
      ))}
    </div>
  );
}

export default Shows;

{
  /* <img src={"./src/assets/tourposters/april-24.png"} alt="" /> */
}