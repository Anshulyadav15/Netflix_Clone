import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function turncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="banner-overveiw">{turncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
