import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AddSession = () =>{
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
                <h5>Add Session</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/viewSession">  View Sessions</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE SESSION ID YOU WANT TO ADD</p>
                </div>


                <div className="row justify-content-center mx-2">
                  <div className="col-md-10 mt-5">
                    <input className="delete-student-input form-dark py-2 px-3" type="text" placeholder="Enter Session..."/>
                  </div>
                  <div className="col-md-10 pt-3 pb-5 mb-4">
                    <input className="admin-btn py-2 px-5" type="submit" />                    
                  </div>
                </div>

              </div>
            </section>

        
          </div>
        </div>

      </section>
		</div>
	)
}