import axios from "axios";

let showVoteCountAction = (election_name,state_name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/result/${election_name}/${state_name}`
              
          )



          .then(response=>{
            console.log("showResultAction ",response);
            dispatch({type:"SHOW_VOTECOUNT",payload:response.data});

            
        }) .catch(error => {
            console.log("error Response:",error.response)
            console.log("data:",error.response.data.message);
            alert(error.response.data.message);
            
        });


          
    }
}







export default showVoteCountAction ;

