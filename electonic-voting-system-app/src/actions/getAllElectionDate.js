import axios from 'axios';

let GetAllElectionDate = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/election/date"
          );
          dispatch({type: "DATE", payload: res.data});
    }
}

export default GetAllElectionDate;