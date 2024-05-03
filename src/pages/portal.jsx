import "aos/dist/aos.css"
import "../css/style.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export const Portal = () =>{
  const {username, password, setUsername, setPassword, loginUser, loading} = useContext(AuthContext)
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
                          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div class="portal-input-password">
                          <input type="password" placeholder="Password" class="password-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        
                        <div className="my-5 py-5" onClick={loginUser}>
                          <p className="btn btn-lg primary-background app-btn">{loading ? <CircularProgress color="inherit"/> : "Login"}</p>
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