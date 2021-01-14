let showDistrictAction = () => {
    
    return async function (dispatch) {
        const res = await fetch(
            
            "http://localhost:8080/evs/districts"

          );

          const data = await res.json();
          console.log("showDistrictAction ", data);
          dispatch({type: "SHOW_DISTRICTS", payload: data});
    }
}
export default showDistrictAction;