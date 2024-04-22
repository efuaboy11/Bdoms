import { Link, useLocation} from "react-router-dom"


export const  Navbar = () =>{

  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }
  return(
    <nav class="navbar navbar-expand-md navbar-light primary-background position-sticky top-0">
      <div class="container-xxl">
        <a href="#" class="navbar-brand">

        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="#main-nav" aria-expanded="false" arial-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul class="navbar-nav flex-md-nowrap">
            <li class="nav-item home-nav">
              <Link to="/" className={`nav-link p-4 text-white ${isActive("/") ?"current": ""}`}>Home</Link>
              <div class="sub-menu-l">
                <ul class="navbar-nav px-3 pb-3">
                  <li class="nav-item"><a href="#goal" class="nav-link text-white px-2">School goals</a></li>
                  <li class="nav-item"><a href="#about" class="nav-link text-white ps-2">About</a></li>
                  <li class="nav-item"><a href="#extra-activity" class="nav-link text-white">Extra School work</a></li>
                  <li class="nav-item"><a href="#news" class="nav-link text-white">News</a></li>
                  <li class="nav-item"><a href="#gallery" class="nav-link text-white">Photos</a></li>

                </ul>
              </div>
            </li>

            <li class="nav-item">
              <Link to="/event" className={`nav-link p-4 text-white ${isActive("/event") ?"current": ""}`}>EVENTS</Link>
            </li>

            <li class="nav-item">
              <Link to="/gallery" className={`nav-link p-4 text-white ${isActive("/gallery") ?"current": ""}`}>GALLERY</Link> 
            </li>

            <li class="nav-item">
              <Link to="/portal" target="_blank" rel="noopener noreferrer" className={`nav-link p-4 text-white ${isActive("/portal") ?"current": ""}`}>SCHOOL PORTAL</Link>
            </li>

            <li class="nav-item">
              <Link to="/application" className={`nav-link p-4 text-white ${isActive("/application") ?"current": ""}`}>TEACHER APPLICATION</Link>
            </li>

            <li class="nav-item">
              <Link to="/contact" className={`nav-link p-4 text-white ${isActive("/contact") ?"current": ""}`}>CONTACT US</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}