import showData from "./Shows/showData";
import ShowCards from "./Shows/ShowCards";

function Shows() {
  return (
    <div className="bg-blanky-yellow min-h-screen">
      <h1 className="font-custom2 flex justify-center items-center pb-4 pt-6 text-5xl sm:text-4xl">
        Upcoming Live Shows
      </h1>
      <div className="pt-7">
        {showData.map((show) => (
          <ShowCards key={show.id} url={show.url} title={show.title} />
        ))}
      </div>
    </div>
  );
}

export default Shows;
