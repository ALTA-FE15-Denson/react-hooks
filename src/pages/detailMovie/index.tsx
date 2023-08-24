import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailMovie from "../../component/DetailMovie";
import { useLocation } from "react-router-dom";

const index = () => {
  const [movie, setMovie] = useState<any>([]);
    const [mode, setMode] = useState<boolean>(false);
  const location = useLocation();

  const detailMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${location.state.page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc3YjdjMzgxMGFhMTAyZGI3MTQyYWFjMjBlNjQwNSIsInN1YiI6IjY0ZTAzNjdlMzcxMDk3MDBmZmJhMDJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VC-eGJ4mjX79BtO8Cz1Pxh5gA4sAOsizchA-1_a7XU`,
          },
        }
      )
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    detailMovie();
  }, []);

  const selectedMovie = movie.find((item: any) => item.id === location.state.id)

  return (
    <>
    
    <nav className="bg-black border-gray-200 fixed z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Netflix
            </span>
          </a>
          <button
            className="bg-transparent focus:outline-none hover:border-none p-0 transition-all"
          >
            <img
              src={`${
                mode === true ? "../public/night.png" : "../public/day.png"
              }`}
              alt=""
              className="w-9 h-9"
            />
          </button>
        </div>
      </nav>
      
      <section>
      {movie && (
        <div className="h-[100vh] w-[100vw] relative">
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}
            alt=""
            className="h-[100vh] w-full  object-cover"
          />
          <DetailMovie
            title={selectedMovie?.title}
            poster_path={selectedMovie?.poster_path}
            overview={selectedMovie?.overview}
            release_date={selectedMovie?.release_date}
            vote_average={selectedMovie?.vote_average}
            vote_count={selectedMovie?.vote_count}
            popularity={selectedMovie?.popularity}
          />
        </div>
      )}
    </section>
      </>
    
  );
};

export default index;
