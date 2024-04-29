import "aos/dist/aos.css"
import "../css/style.css"
import { Link } from "react-router-dom"

export const Portal = () =>{
  return(
    <div>
      <section id="portal">
        <div class="portal-background-img">
          <div class="container-sm">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row align-items-center ">
                  <div className="col-lg-7 d-none d-lg-block">
                    <div class="portal-text mx-3">
                      <h1>BABY'S DAYOUT / FREDITA CHILDREN ACADEMY</h1>
                      <h4 class="text-muted">School Data Management System.</h4>
                      <h4 class="text-muted">Managing Student record.</h4>
                    </div>
                  </div>

                  <div className="col-lg-5 row mt-5 ">
                    <div class="portal-form  forms">
                      <h1 class="pb-5 text-primary1 sign-in-text ps-3">Sign In</h1>
                      <form action="" className="m-3">
                        <div class="form-input">
                          <input type="text" placeholder="Username" />
                        </div>
                        <div class="portal-input-password">
                          <input type="password" placeholder="Password" class="password-input" />
                        </div>
                        
                        <div className="my-5 py-5">
                          <Link to="/dashboard" target="_blank" rel="noopener noreferrer"class="btn btn-lg primary-background app-btn">Login</Link>
                        </div>
                        
                      </form>
                      <p className="p-3">Proudly developed by <a href="#">Ehiz</a></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class=" portal-content">

    

            </div>
          </div>
          

        </div>
      </section>

    </div>
      
  )
}