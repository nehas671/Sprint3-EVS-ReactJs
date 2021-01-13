let showPartysAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/party"
          );
          const data = await res.json();
          console.log("Part List Action", data);
          dispatch({type: "SHOW_PARTYS", payload: data});
    }
}

export default showPartysAction;