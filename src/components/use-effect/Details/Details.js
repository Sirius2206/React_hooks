import React, { useState, useEffect, useRef } from "react";
import useJsonFetch from "../../use-json-fetch/useJsonFetch";
import Preloader from "../Preloader/Preloader";
import "./Details.css";

function Details({ info }) {
  const [user, isLoading, error] = useJsonFetch(
    process.env.REACT_APP_INFO + `/${info.id}.json`
  );

  return (
    <div className="details__container">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="details__avatar">
            <img src={user?.avatar} />
          </div>
          <div className="detail details__name">{user?.name}</div>
          <div className="detail details__city">
            <span className="bold">City:</span>
            {user?.details?.city}
          </div>
          <div className="detail details__company">
            <span className="bold">Company:</span> {user?.details?.company}
          </div>
          <div className="detail details__position">
            <span className="bold">Position:</span>
            {user?.details?.position}
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
