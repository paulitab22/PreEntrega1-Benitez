import "./Navbar.css";
import Categorias from "./Categorias/categorias";
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                  <div className="container">
                    <a className="navbar-brand" href="#">Clementina</a>
                    <button className="botonPrincipalNav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                         <Categorias/>
                    </div>
                        <CartWidget/>
                </nav>
              );
            }

export default Navbar;

