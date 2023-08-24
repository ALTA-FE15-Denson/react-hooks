import React, { FE } from "react";

interface DetailMovieProps {
  title?: string;
  release_date?: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  overview?: string;
  poster_path?: string;
}

const DetailMovie: FE<DetailMovieProps> = ({
  title,
  release_date,
  popularity,
  vote_average,
  vote_count,
  overview,
  poster_path,
}) => {
  return (
    <div className="absolute w-[70vw] bottom-16 left-1/2 transform -translate-x-1/2 bg-black rounded-lg">
      <div className=" shadow-lg grid grid-cols-3 gap-4 ">
        <div className="col-span-1 h-full">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
            className="w-full h-full object-cover rounded-l-md"
          />
        </div>
        <div className="col-span-2 ">
          <div className="flex flex-col p-3">
            <h1 className="text-3xl text-red-600 font-[800] text-center mb-2">
              {title}
            </h1>
            <p className="text-white">Release Date : {release_date}</p>
            <p className="text-white">Popularity : {popularity}</p>
            <p className="text-white">Vote Average : {vote_average}</p>
            <p className="text-white">Vote Count : {vote_count}</p>
            <p className="text-white">
              Overview : <p>{overview}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
