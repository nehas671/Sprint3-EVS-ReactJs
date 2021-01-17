import axios from 'axios';

let GetAllByLeader = (leader) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/election/party/leader/${leader}`
            );
          
          dispatch({type: "VIEW_PARTY", payload: res.data});
    }
}

export default GetAllByLeader;
