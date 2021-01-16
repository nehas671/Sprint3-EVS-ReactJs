class Candidate {
    constructor(candidateName, address, age, contactNumber, email, partyName, leader, symbol) {
      this.candidateName = candidateName;
      this.address = address;
      this.age = age;
      this.contactNumber = contactNumber;
      this.email = email;
      this.party = { "partyName": partyName, "leader": leader, "symbol": symbol};
    }
  }
  
  export default Candidate;