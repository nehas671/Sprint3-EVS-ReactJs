import Header from './header';
import Slogan from './slogan';
import Footer from './footer';
import Aside from './aside';

let set;
const EvsLogin= (props) => 
{
    set=true;
  return(
  <div>
    
    <Header/>
    <main>
      <Slogan/>
      <section class="Custom-container technology-container">
        <div class="row mx-0 px-sm-0 mb-4">
          <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
              <h2 class="font-weight-bold"><center>
                LOGIN
                </center>
              </h2><br/>
              
              <form  onMouseMove={EnableDisable}>
                <div class=" form-group row pb-3">
                  <label for="service" class="col-4 mr-3 font-weight-bold">
                    Select login type :
                  </label>
                  <select class="form-control col-7 state" id="state" onChange={handleChange} required>
                  <option>Select</option>
                        <option>Administrator</option>
                        <option>Electroll Officer</option>
                        <option>Voter</option>
                  </select>
                  <small id="namevalid" class="form-text text-danger invalid-feedback">
                      Select option from dropdown
                    </small>
                </div>
                
                <div class="form-group row pb-3">
                  <label for="email" class="col-4 col-form-label font-weight-bold">
                    Email Id :
                  </label>
                  <div class="col-8">
                    <input type="text"  class="form-control" id="email" name="email" placeholder="eg. abcd@gmail.com" onBlur={validateEmail} required ></input>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
                      Enter email in proper format(eg. abcd@gmail.com)
                    </small>
                  </div>
                </div>
                <div class="form-group row pb-3">
                  <label for="password" class="col-4 col-form-label mr-3 font-weight-bold">
                    Password :
                  </label>
                  <div>
                    <input type="password" id="password" name="password" class="form-control" onBlur={validatePassword} required ></input>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
                      Enter password
                    </small>
                  </div>
                </div>
                <button class="btn btn-primary" id="btnsubmit" disabled="disabled">
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        <Aside/>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
  )
}


let validEmail=false;
let validPassword=false;
let validSelectType=false;

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  
  if(validEmail&&validPassword&&validSelectType)
  {  
    set=false;
    console.log("set",set);
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  }
}





function validateEmail(event)
{
  const data = event.target.value;
  console.log("target",data);
  
  let regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  
  if (regex.test(str) && str != "") 
  {
    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
    // valid(username);
    validEmail = true;
  }
  else
  {
    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    // inputRequired(username, str);
    validEmail = false;
  }
}





function validatePassword(event) 
{
  const data = event.target.value;
  
  
  if (data != "") 
  {
    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
    // valid(username);
    validPassword = true;
  }
  else
  {
    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    // inputRequired(username, str);
    validPassword = false;
  }
}


function handleChange(event)
{
    var selectType=event.target.value;
    if(selectType ==="Select")
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error("Please select election name from drop down!")
        validSelectType=false;
        
    }
    else
    {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        validSelectType=true;
    }
}

export default EvsLogin;