class Candidate {
    constructor(candidateName, address, age, contact_number, email, party) {
      this.candidateName = candidateName;
      this.address = address;
      this.age = age;
      this.contact_number = contact_number;
      this.email = email;
      this.party = { "partyName": party.partyName};
    }
  }
  
  export default Candidate;