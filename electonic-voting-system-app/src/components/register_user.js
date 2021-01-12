const RegisterUser = (props)=>{
    return(
        <div>
            <h2>Register User</h2>
            <br></br>
            <br></br>
            <div class="container">
            <form action="" style={{width:'500px', margin:'auto'}}>
            <div class="row">
                <div class="col-25">
                <label for='Name'>Name :</label>
                </div>
                <div class="col-75">
                <input type="text" name="Name" id="name" className="form-control" placeholder="Enter Your Name"></input>
                </div>
                </div>

                <div class="row">
                <div class="col-25">
                <label for="Gender" >Gender:</label>
                </div>
                <div class="col-75">
                <select name="Gender" id="gender" className="form-control" placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                </div>
                
                <div class="row">
                <div class="col-25">
                <label for="Contact Number">Contact Number :</label>
                </div>
                <div class="col-75">
                <input type="text" name="Contact Number" className="form-control" placeholder="Your Number"></input>
                </div>
                </div>

                <div class="row">
                <div class="col-25">
                <label for="Email Id">Email Id:</label>
                </div>
                <div class="col-75">
                <input type="text" name="Email Id" className="form-control" placeholder="Your Email Id"></input>
                </div>
                </div>

                

                <div class="row">
                <div class="col-25">
                <label for="State" >District:</label>
                </div>
                <div class="col-75">
                <select name="District" id="district" className="form-control">
                    <option value="Washim">Washim</option>
                    <option value="Akola">Akola</option>
                    <option value="Digras">Digras</option>
                </select>
                </div>
                </div>

                           
            </form>
            </div>
        </div>
    )
}

export default RegisterUser;