
import React from "react";
import { Link } from 'react-router-dom';

type Props = {
  name: string;
};
//
export default function Page(props :Props) {
  console.log(props); 

  const name  = props.name;
  return (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">{name}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            {/*
            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
            */}
          </li>
        </ul>
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
          </li>          
        </ul>
      </div>
    </div>
  </nav> 
  );
}
/*
<li className="nav-item">
  <Link to="/posts" className="nav-link active" aria-current="page">Post</Link>
</li>
*/