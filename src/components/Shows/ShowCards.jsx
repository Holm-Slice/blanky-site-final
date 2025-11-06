import PropTypes from "prop-types";

function ShowCards({ url, title }) {
  return (
    <div className=" relative flex justify-center items-center w-full lg:w-4/5 h-auto mx-auto mb-20 py-7 px-7">
      <img src={url} alt={title} className="max-w-full h-auto" />
    </div>
  );
}

ShowCards.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShowCards;
