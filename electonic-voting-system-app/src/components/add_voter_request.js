const AddVoterRequest = (props)=>{
    return(
        <div>
            <h2>Add Voter Request</h2>
            <br></br>
            <br></br>
            <form action="" style={{width:'500px', margin:'auto'}}>
                <label for='Name'>Name</label>
                <input type="text" name="Name" id="name" className="form-control"></input>
            
                <label for="Gender" >Gender</label>
                <select name="Gender" id="gender" className="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                
                <label for="Contact Number">Contact Number</label>
                <input type="text" name="Contact Number" className="form-control"></input>
                <label for="Email Id">Email Id</label>
                <input type="text" name="Email Id" className="form-control"></input>
                <label for="Constituency">Constituency</label>
                <input type="text" name="Constituency" className="form-control"></input>
                
                <label for="State" >State</label>
                <select name="State" id="state" className="form-control">
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                </select>

                                
            </form>
        </div>
    )
}

export default AddVoterRequest;