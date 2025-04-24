import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <span className="title">Balatro Shop</span>
        <div className="menu">
          <a className="navbtn" href="#">
            Home
          </a>
          <a className="navbtn" href="#">
            Catalog
          </a>
          <a className="navbtn" href="#">
            About
          </a>
          <a className="navbtn" href="#">
            Admin
          </a>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
