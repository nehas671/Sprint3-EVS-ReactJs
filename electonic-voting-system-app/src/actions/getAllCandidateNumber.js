/* Axios is a library that helps us make http requests to external resources. */
import axios from 'axios';

let GetAllCandidateNumber = () => {

     /*   async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/number"
        );

        /*  Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */

        dispatch({ type: "CANDIDATE_NUMBER", payload: res.data });
    }
}

export default GetAllCandidateNumber;