import "../../css/dashboard.css"
import { DashFrame } from "../../component/dashFrame"

export const  PaymentStep1 = () =>{
  return(
    <div>
      <DashFrame />
      <div class="main-content dashboard-border">
        <section class="payment-form container-lg ">
          <h4 class="text-center py-3">Payment</h4>
          <form action="" class="row g-3 justify-content-center">
            <div class="col-md-5">
              <label for="name" class="form-label">Student ID</label>
              <input type="text" class="form-control  form-dark" id="name" placeholder="SBHSIE32"  autocomplete="off"/>
            </div>

            <div class="col-md-5">
              <label for="name" class="form-label">Payments</label>
              <select id="inputState" class="form-select form-dark">
                <option selected>...</option>
                <option>School fees</option>
                <option>P.T.A bills</option>
                <option>other bills</option>
              </select>
            </div>
    
            <div class="col-md-5">
              <label for="name" class="form-label">Section</label>
              <input type="text" class="form-control form-dark" id="name" placeholder="2021/2022" autocomplete="off"/>
              

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