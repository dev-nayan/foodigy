import React from "react";
import { useRouteError } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faRocket } from "@fortawesome/free-solid-svg-icons";

function Error() {
  const myError = useRouteError();
  console.log(myError);
  return (
    <div className="err">
      <h1>
        <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} />
        {myError.status} My Page  {myError.statusText}!!!
      </h1>
      <h3>{myError.data}</h3>

     
      <h5>
      <FontAwesomeIcon
        icon={faRocket}
        style={{ color: "orange", fontSize: "x-large" }}
      />
        <b>{myError.error.stack}</b>
      </h5>
    </div>
  );
}

export default Error;
