class Candidate {
    constructor(candidateName, address, age, contact_number, email, partyName, leader, symbol) {
      this.candidateName = candidateName;
      this.address = address;
      this.age = age;
      this.contact_number = contact_number;
      this.email = email;
      this.party = { "partyName": partyName, "leader": leader, "symbol": symbol};
    }
  }
  
  export default Candidate;