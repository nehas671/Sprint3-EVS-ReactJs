class VoterRequest{

    constructor( voterId,name,  district,  constituency,  emailId, applicationStatus, contactNumber,  dob){
        this.voterId=voterId;
        this.name = name;
        this.district = district;
        this.constituency = constituency;
        this.emailId = emailId;
        this.applicationStatus = applicationStatus;
        this.contactNumber = contactNumber;
        this.dob = dob;
    }
}
export default VoterRequest;