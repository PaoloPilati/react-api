import { useState } from "react";

function ActressCard({ actress }) {
  // destructuring delle proprietà dall'oggetto actress
  const { name, birth_year, nationality, biography, image, awards = [], most_famous_movies } = actress;
  const movies = most_famous_movies || [];
  const age = new Date().getFullYear() - birth_year;
  const [imageSrc, setImageSrc] = useState(image);

  return (
    <div className="col-md-4 mb-4">
      <article className="card h-100">

        <img
          src={imageSrc}
          className="card-img-top"
          alt={name}
          onError={() => setImageSrc("https://cdn.artphotolimited.com/images/5c77db4dea7f855052aeb269/1000x1000/salma-hayek.jpg")}
        />

        <div className="card-body">

          <h2 className="card-title">{name}</h2>

          <div className="card-text">
            <strong>Anno nascita:</strong> {birth_year} ({age} anni)
          </div>

          <div className="card-text">
            <strong>Nazionalità:</strong> {nationality}
          </div>

          <div className="card-text">{biography}</div>

          <div className="card-text">
            <strong>Premi:</strong> {awards}</div>

          {movies.length > 0 && (
            <div className="card-text">
              <strong>Film più popolari:</strong>
              <ul className="list-group list-group-flush mt-1">
                {movies.map((movie, index) => (
                  <li className="list-group-item" key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </article>
    </div>
  );
}

export default ActressCard;