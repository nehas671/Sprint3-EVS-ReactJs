import axios from 'axios';

let GetAllElectionConstituency = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/election/constituencyname"
          );
          dispatch({type: "CONSTITUENCY_NAME", payload: res.data});
    }
}

export default GetAllElectionConstituency;