import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Card from "../../component/Card";
import axios from "axios";
import Button from "../../component/Button";

const index = () => {
  
  const navigate: NavigateFunction = useNavigate();
  const [movie, setMovie] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [mode, setMode] = useState<boolean>(false);

  const movies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc3YjdjMzgxMGFhMTAyZGI3MTQyYWFjMjBlNjQwNSIsInN1YiI6IjY0ZTAzNjdlMzcxMDk3MDBmZmJhMDJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VC-eGJ4mjX79BtO8Cz1Pxh5gA4sAOsizchA-1_a7XU`,
          },
        }
      )
      .then((res) => {
        setMovie(res.data.results);
        setLoading(true);
        setPage(res.data.page);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const detailMovies = (id:number) => {
    navigate(`/movie-detail/${id}`, {
      state: {
        id: id,
        page: page,
      },
    })
  }

  const previousMovies = () => {
    if (page > 1){
      setPage(page - 1);
    }
  }

  const nextMovies = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    movies();
  }, [page]);

  return (
    <>
      <section className={`${mode === true ? "bg-white" : "bg-black"}`}>
          <h1
            className={`text-center mt-20 mb-6 ${
              mode === true ? "text-red-600 bg-white" : "text-white bg-black"
            } font-[600]`}
          >
            Now Playing
          </h1>
          <div className="flex flex-wrap justify-end mb-2 px-6">
            <button
              className={`${
                page <= 1 ? "bg-transparent cursor-not-allowed" : "bg-transparent"
              } text-white focus:outline-none mx-2 hover:border-none hover:bg-red-500`}
              onClick={() => previousMovies()}
              disabled={page <= 1}
            >
              Previous
            </button>
            <button
              className="bg-transparent text-white focus:outline-none hover:border-none hover:bg-red-500"
              onClick={() => nextMovies()}
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-6 gap-3 container mx-auto px-6 pb-5">
            {
              movie && movie.map((item: any, index) => {
                return (
                  <Card
                    key={index}
                    id={item?.id}
                    image={item?.poster_path}
                    mode={mode}
                    onClick={() => detailMovies(item?.id)}
                  />
                );
              })
            }
          </div>
          
        </section>
    </>
  );
};

export default index;
