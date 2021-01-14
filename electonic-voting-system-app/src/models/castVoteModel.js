class CastVoteModel 
{
    constructor(election_name, state, constituency,date, candidate_name, party_name, voter_id)
    {
        this.election_name = election_name;
        this.state = state;
        this.constituency = constituency;
        this.date = date;
        this.candidate_name = candidate_name;
        this.party_name = party_name;
        this.voter_id = voter_id;
    }

}

export default CastVoteModel;