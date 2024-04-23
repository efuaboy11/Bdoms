import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const UploadScheme = () =>{
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Upload Scheme</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewPictureUploads'>View Scheme Uploaded</Link>
						  </div>
            </div>

            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
                </div>

               <form action="">
                  <div className="row  mx-2">
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Class</label>
                        <select className="form-select form-control compulsory form-dark">
                          <option>...</option>
                          </select>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Term</label>
                        <select className="form-select form-control compulsory form-dark">
                          <option>...</option>
                          </select>
                      </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Session</label>
                        <select className="form-select form-control compulsory form-dark">
                          <option>...</option>
                          </select>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Date</label>
                        <input className="admin-input form-dark py-2 px-3" type="datetime-local" />
                      </div>
                      <div className="col-md-10 pt-3 pb-5 mb-4">
                        <input className="admin-btn py-2 px-5" type="submit" />
                        
                      </div>
                  </div>

               </form>

              </div>
            </section>


        
          </div>
        </div>

      </section>
		</div>
	)
}