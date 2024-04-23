import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"

export const Application = () =>{
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
              <h1 class="l-text fw-bold dark-font">Teacher <span class="text-secondary1">  Application</span></h1>
            </div>

            <div class="d-lg-flex justify-content-between texts">
              <a href="./index.html" class="px-4">HOME</a>
              <i class="fa-solid fa-arrow-right d-none d-md-block"></i>
              <p class="text-secondary1 px-4 d-none d-md-block">Application</p>
              
            </div>
          </div>      
        </div>

      </section>


      <section id="form">

        <div class="modal-container hidden">
          <div class="popup boxing-shadow" id="popup">
            <img src="./img/verified.jpg" alt=""/>
            <h2 class="pt-3">Thank You!</h2>
            <p>Your details has been sucessfully submitted. Thanks!</p>
            <button type="button" class="btn btn-lg primary-background my-3 " onclick="closePopup()">OK</button>
          </div>
        </div>


        <div class="container-lg py-5 boxing-shadow my-5">
          <p class="fw-bold">instruction: Please try to fill up the form</p>
          <div>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">First Name</label>
                <input type="text" class="form-control compulsory" id="name" placeholder="e.g John"/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">last Name</label>
                <input type="text" class="form-control compulsory" id="inputPassword4" placeholder="e.g Mike Smith"/>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label"> Tempopary Residence</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label ">Permanent Residence</label>
                <input type="text" class="form-control compulsory" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>

              <div class="col-md-4">
                <label for="inputState" class="form-label">State of origin</label>
                <select id="inputState" class="form-select">
                  <option selected>Abia</option>
                  <option>Adamawa</option>
                  <option>Akwa ibom</option>
                  <option>Anambra</option>
                  <option>Bauchi</option>
                  <option>Bayelsa</option>
                  <option>Benue</option>
                  <option>Borno</option>
                  <option>Crossriver</option>
                  <option>Delta</option>
                  <option>Ebonyi</option>
                  <option>Edo</option>
                  <option>Ekiti</option>
                  <option>Enugu</option>
                  <option>Imo</option>
                  <option>Jigawa</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                  <option>Kastina</option>
                  <option>Kebbi</option>
                  <option>Kogi</option>
                  <option>Kwara</option>
                  <option>Lagos</option>
                  <option>Nasarawa</option>
                  <option>Niger</option>
                  <option>Ogun</option>
                  <option>Ondo</option>
                  <option>Osun</option>
                  <option>Oyo</option>
                  <option>plateau</option>
                  <option>Rivers</option>
                  <option>Sokoto</option>
                  <option>Taraba</option>
                  <option>Yobe</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City/Town</label>
                <input type="text" class="form-control compulsory" id="inputCity" placeholder="Benin" />
              </div>
              <div class="col-md-2">
                <label for="inputSex" class="form-label">Sex</label>
                <select id="inputSex" class="form-select">
                  <option selected>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="col-md-5">
                <label for="inputNumber" class="form-label">Phone Number</label>
                <input type="tel" class="form-control compulsory" id="inputNumber" placeholder="+234879022633"/>
              </div>
              <div class="col-md-5">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="@marksmith.gmail.com"/>
              </div>
              <div class="col-md-2">
                <label for="inputDOB" class="form-label">D.O.B</label>
                <input type="date" class="form-control compulsory " id="inputDOB"/>
              </div>
              <div class="col-md-4">
                <label for="inputDisability" class="form-label">Disabily</label>
                <select id="inputDisability" class="form-select">
                  <option selected>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputReligion" class="form-label">Religion</label>
                <select id="inputReligion" class="form-select">
                  <option selected>Christian</option>
                  <option>Muslim</option>
                  <option>others...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputMaritalStatus" class="form-label">Marital Status</label>
                <select id="inputMaritalStatus" class="form-select">
                  <option selected>Married</option>
                  <option>Single</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="diabilityYes" class="form-label">If you have any disability please state below*</label>
                <textarea class="form-control" id="diabilityYes" rows="3"></textarea>
              </div>
              <div class="col-md-4">
                <label for="" class="form-label">Have you taught in any school in the past</label>
                <select id="" class="form-select">
                  <option selected>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="" class="form-label">Do you have basic computer skills</label>
                <select id="" class="form-select">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="" class="form-label">How many years have you taught</label>
                <input type="text" class="form-control compulsory " id=""/>
              </div>
              <div>
                <h5 class="text-secondary1">Upload your document below</h5>
              </div>
              <div class="col-md-4 ">
                <label for="formFileLg" class="form-label">Passpot photograph</label>
                <input class="form-control form-control-lg compulsory" id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">First leaving school certificate</label>
                <input class="form-control form-control-lgcompulsory " id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">(WASSEC/NECO/NABTEB/GCE)</label>
                <input class="form-control form-control-lg compulsory" id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">(WASSEC/NECO/NABTEB/GCE) transcript</label>
                <input class="form-control form-control-lg compulsory" id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">Unversity/polytechnic/institution Certificate</label>
                <input class="form-control form-control-lg compulsory " id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">Unversity/polytechnic/institution transcript</label>
                <input class="form-control form-control-lg compulsory" id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">Other certification</label>
                <input class="form-control form-control-lg compulsory " id="formFileLg" type="file"/>
              </div>
              <div class="col-md-4">
                <label for="formFileLg" class="form-label">CV</label>
                <input class="form-control form-control-lg compulsory" id="formFileLg" type="file"/>
              </div>
              <div class="mb-3 mt-5">
                <label for="diabilityYes" class="form-label">Why should we employ you</label>
                <textarea class="form-control compulsory" id="diabilityYes" rows="9"></textarea>
              </div>
            </form>

            <div class="col-12">
              <button class="btn btn-lg primary-background app-btn">Submit</button>
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