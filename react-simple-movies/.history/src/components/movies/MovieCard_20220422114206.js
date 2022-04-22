import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbUrl } from "apiConfig/config";
import Button from "components/button/Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieCard = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`${tmdbUrl("w500")}${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-5 text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} full>
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};

export default MovieCard;
