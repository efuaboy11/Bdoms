import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const EditStudentPage = () =>{
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Update Student Proile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <form action="">
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className="form-control form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                <input type="datetime-local" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark">
                  <option>...</option>
                  <option>Male</option>
                  <option>Female</option>
                  </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Father Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Mother Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>


              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Gurdian Name</label>
                <input type="text" className="form-control  form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Phone Number <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Email <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                  <label for="inputState" className="form-label">State of origin <span className="red-text">*</span></label>
                  <select id="inputState" className="form-select form-control compulsory form-dark">
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

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Religion <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark">
                  <option>...</option>
                  <option>Christian</option>
                  <option>Muslim</option>
                  <option>others</option>
                  </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Disabily <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark">
                  <option selected>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Class <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark">
                  <option selected>...</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">City/Town</label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name"/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Previous School</label>
                <input type="text" className="form-control  form-dark" id="student-first-name"/>
              </div>

              <div className="mb-3">
                <label for="diabilityYes" className="form-label">If you have any disability please state below</label>
                <textarea className="form-control form-dark" id="diabilityYes" rows="3"></textarea>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="formFileLg" className="form-label">(Passpot)</label>
                <input className="form-control form-control-lg compulsory form-dark" id="formFileLg" type="file"/>
              </div>
            </div>

            <div className="py-4">
              <button className="admin-btn py-2 px-5" >Update</button>
            </div>
           
          </form>
        </section>
        


      </div>
    </div>
  )  
}