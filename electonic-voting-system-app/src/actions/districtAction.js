
let showDistrictAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/districts",
            {
                "Access-Control-Allow-Origin": "*"
            }
            

          );

          const data = await res.json();
          console.log("showDistrictAction ", data);
          dispatch({type: "SHOW_DISTRICTS", payload: data});
    }
}
export default showDistrictAction;