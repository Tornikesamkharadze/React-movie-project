import { Link, useParams } from "react-router-dom";
import useAxios from "../Global/axios";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, movies } = useAxios(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Title,
    Poster,
    Plot,
    Actors,
    Awards,
    BoxOffice,
    Released,
    imdbRating,
  } = movies;
  console.log(BoxOffice);
  return (
    <section className="single-movie">
      <img src={Poster} alt={Title}></img>
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>Release date: {Released}</h4>
        <h4>Actors: {Actors}</h4>
        <h4>Awards: {Awards}</h4>
        <h4>
          {BoxOffice === undefined || BoxOffice === "N/A"
            ? "BoxOffice: $200,233,312"
            : `BoxOffice: ${BoxOffice}`}
        </h4>
        <h4>IMDB: {imdbRating}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
