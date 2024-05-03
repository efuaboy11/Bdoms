import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { useState } from "react"

export const Contact = () =>{
  const [contactName, setContactName] = useState("")
  const[contactEmail, setContactEmail] = useState("")
  const[message, setMessage] = useState("")
  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }

  return(
    <div>
      <Navbar />
      <section id="heading" class="light-background">
        <div class="container-lg">
          <div class="d-md-flex d-inline justify-content-between">
            <div>
              <h1 class="l-text fw-bold dark-font">Contact <span class="text-secondary1"> Us</span></h1>
            </div>

            <div class="d-lg-flex justify-content-between texts">
              <Link to='/' class="px-4">Home</Link>
              <i class="fa-solid fa-arrow-right d-none d-md-block"></i>
              <p class="text-secondary1 px-4 d-none d-md-block">US</p>           
            </div>
          </div>      
        </div>

      </section>   

      <section id="message" class="py-5">
        <div class="container-lg">
          <h2 class="ml-text fw-bold text-center">Send <span class="text-secondary1"> Us A</span> Message</h2>
          <p class="sm-text text-secondary1 text-center">Feel free to message us with any of your complain. We will get back to you as soon as possible</p>
        

          <div>
            <form action="" class="row g-3">
              <div class="col-md-11">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="e.g John Smith" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
              </div>

              <div class="col-md-11">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="name" placeholder="e.g @johnsmith.gmail.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
              </div>

              <div class="mb-3 col-md-11">
                <label for="diabilityYes" class="form-label">Message</label>
                <textarea class="form-control" id="diabilityYes" rows="9" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-lg primary-background">MESSAGE US</button>
              </div>
            </form>
          </div>

          <div class="row my-5 align-items-center justify-content-center g-2">
            <div class=" col-lg-4">
              <div class="card pb-5">
                <div class="card-body text-center py-4">
                  <i class="fa-solid fa-location-dot text-muted ml-text"></i>
                  <h4 class="card-title m-text fw-bold my-3 pb-3">Location</h4>
                  <hr />
                  <p class="card-text  d-lg-block text-muted"></p>
                </div>
              </div>
            </div>

            <div class=" col-lg-4">
              <div class="card pb-4">
                <div class="card-body text-center py-4">
                  <i class="fa-solid fa-phone text-muted ml-text"></i>
                  <h4 class="card-title m-text fw-bold my-3 pb-3">Phone & Email</h4>
                  <hr />
                  <p class="card-text  d-lg-block text-muted "></p>
                </div>
              </div>
            </div>

            <div class=" col-lg-4">
              <div class="card pb-1">
                <div class="card-body text-center py-4">
                  <i class="fa-solid fa-clock text-muted ml-text"></i>
                  <h4 class="card-title m-text fw-bold my-3 pb-3"> School Time</h4>
                  <hr/>
                  <p class="card-text  d-lg-block text-muted "></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <footer>

        <div className="primary-background  pt-5 pb-3">
          <div className="container-lg text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 text-start footer-text">
                <h5  data-aos="fade-right"  data-aos-duration="1000">Here at Baby's Day Out / Fredita Children We give Your Children nothing but the best. We try to ensure you child is well rounded both academically, socially and mentally.</h5>
              </div>
              <div className="col-lg-4"  data-aos="zoom-in"  data-aos-duration="1000">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-facebook" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-whatsapp" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-instagram" /></a>                 
                </div>
                <div className="py-3">
                  <p className="sm-text">Check our recent post and update on our social media platform</p> 
                </div>
              </div>

              <div className="col-lg-4 text-start ps-5 footer-link"  data-aos="fade-left"  data-aos-duration="1000">
                <div>
                  <h4>Quick links</h4>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link p-1 footer-link ${isActive("/") ?"current2": ""}`}>Home</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/event" className={`nav-link p-1 footer-link ${isActive("/event") ?"current2": ""}`}>EVENTS</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-1 footer-link ${isActive("/gallery") ?"current2": ""}`}>GALLERY</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/portal" className={`nav-link p-1 footer-link ${isActive("/portal") ?"current2": ""}`}>SCHOOL PORTAL</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/application" className={`nav-link p-1 footer-link ${isActive("/application") ?"current2": ""}`}>TEACHER APPLICATION</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link p-1 footer-link ${isActive("/contact") ?"current2": ""}`}>CONTACT US</Link> 

                    </li>
                  </ul>
                </div>


              </div>
            </div>
            <hr/>

            <div className="text-center end-text">
              <p>Copyright &copy;2023, Baby's Day Out / Fredita Children Academy</p>
              <p>powered by: <a href="#">Ehiz</a></p>
            </div>
          </div>
        </div>
      </footer>             
    </div>  
      
  )
}