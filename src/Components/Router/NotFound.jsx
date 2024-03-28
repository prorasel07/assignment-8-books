import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-dvh flex items-center justify-center text-center">
      <div>
        <h3 className="text-3xl font-semibold">404 Not Found this page!!</h3>
        <Link to={'/'} className="btn btn-md btn-primary mt-4">Go Home</Link>
          </div>
    </div>
  );
};

export default NotFound;
