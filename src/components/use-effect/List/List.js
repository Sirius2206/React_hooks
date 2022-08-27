import React, { useEffect, useState, useRef } from "react";
import Details from "../Details/Details";

import useJsonFetch from "../../use-json-fetch/useJsonFetch";
import "./List.css";

function List() {
  const [info, setInfo] = useState(null);
  const userRef = useRef(null);
  const [list, isLoading, error] = useJsonFetch(process.env.REACT_APP_URL);

  function pickUser(user) {
    if (userRef.current === user) {
      return;
    }
    userRef.current = user;
    setInfo(userRef.current);
  }
  return (
    <div className="list__container">
      <ul className="list__users">

        {list?.map((item) => (
          <li className="users__element" key={item.id}>
            <span className="user__name" onClick={() => pickUser(item)}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
      {info && <Details info={info} />}
    </div>
  );
}

export default List;
