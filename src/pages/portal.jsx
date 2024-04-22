import "aos/dist/aos.css"
import "../css/style.css"
import { Link } from "react-router-dom"

export const Portal = () =>{
  return(
    <div>
      <section id="portal">
        <div class="portal-background-img">
          <div class="container-sm">
            <div class=" portal-content">
              <div class="portal-text mx-3">
                <h1>BABY'S DAYOUT / FREDITA CHILDREN ACADEMY</h1>
                <h4 class="text-muted">School Data Management System.</h4>
                <h4 class="text-muted">Managing Student record.</h4>
              </div>
    
              <div class="portal-form  forms">
                <div class=" portal-heading  mt-5">
                  <h1 class="text-primary1">BABY'S DAY OUT / <br /> FEDRITA CHILDREN ACADEMY</h1>
                  <p class="text-muted sm-text">School Data Management System.</p>
                </div>
                <h1 class="pb-5 text-primary1 sign-in-text">Sign In</h1>
                <form action="">
                  <div class="form-input">
                    <input type="text" placeholder="Username" />
                  </div>
                  <div class="portal-input-password">
                    <input type="password" placeholder="Password" class="password-input" />
                    <i class="bi bi-eye toggle-password" ></i>
                  </div>
                  
                  <div className="my-5 py-5">
                    <Link to="/dashboard" target="_blank" rel="noopener noreferrer"class="btn btn-lg primary-background app-btn">Login</Link>
                  </div>
                  
                </form>

                <p>Proudly developed by <a href="#">Ehiz</a></p>

                



              </div>
            </div>
          </div>
          

        </div>
      </section>

    </div>
      
  )
}