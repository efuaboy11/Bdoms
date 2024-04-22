import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"

export const Scheme1 = () =>{
  return(
    <div>
      <DashFrame />
      <div class="main-content">
      <section class="payment-form container-lg">
        <h4 class="text-center py-3">Scheme Off Work</h4>
        <form action="" class="row g-3 justify-content-center">
          <div class="col-md-5">
            <label for="name" class="form-label">Student ID</label>
            <input type="text" class="form-control  form-dark" id="name" placeholder="SBHSIE32"  autocomplete="off"/>
          </div>
  
          <div class="col-md-5">
            <label for="name" class="form-label">class</label>
            <select id="inputState" class="form-select form-dark">
              <option selected>...</option>
              <option>LDC</option>
              <option>Nusery 1</option>
              <option>Nusery 2</option>
              <option>Nusery 3</option>
              <option>Primary 1</option>
              <option>primary 2</option>
              <option>primary 3</option>
              <option>primary 4</option>
              <option>primary 5</option>

            </select>
            

          </div>
  
          <div class="col-md-5">
            <label for="name" class="form-label">Select term</label>
            <select id="inputState" class="form-select form-dark">
              <option selected>...</option>
              <option>First term</option>
              <option>Second term</option>
              <option>Third term</option>
            </select>
          </div>

          <div class="payment-link my-2">
            <a href="#" class="button-dashboard">Submit</a>
          </div>
  
        </form>
  
      </section>    
    </div>
    </div>
  )
}