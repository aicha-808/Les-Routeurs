import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom'; 
import { Bouton } from './navbar/Bouton';
import { Form } from "./navbar/Form";

export const Navbar = ({selectItems, recherche, validation}) => {
  
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#e">UniverWax @</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="mx-3"   > 
              <Link to="/">Home</Link> 
            </li>
            <li className="mx-3"   > 
            <Link to="/about">About</Link>
            </li>
          </ul>   
          <Form  onChange={recherche} value={selectItems} />
          <Bouton onClick={validation} nom='Connect' />
          </div>
        </div>
      </nav>
    )
}
