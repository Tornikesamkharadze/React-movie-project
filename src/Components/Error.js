import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <h4>404</h4>
      <h1>Page Not Found</h1>
      <Link className="goback-link" to="/">Go back</Link>
    </div>
  );
};

export default Error;
