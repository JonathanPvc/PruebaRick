import React, { useEffect, useState } from "react";

import { Pagination } from "../components/molecule/Pagination";
import { NavBar } from "../components/organism/NavBar";

import { Home } from "../components/template/Home";



export const PrincipalHome = () => {
  const [episode, setEpisode] = useState([]);

  const [info, setInfo] = useState({})

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchEpisode = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEpisode(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));

  };

  const onPrevious = () => {
    fetchEpisode(info.prev)
  }
  const onNext = () => {
    fetchEpisode(info.next)
  }

  useEffect(() => {
    fetchEpisode(initialurl);
  }, []);
  return (

    <>
      <NavBar title={"Rick and Morty App"} />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Home episode={episode} />
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious} />

      </div>
    </>


  );
}


