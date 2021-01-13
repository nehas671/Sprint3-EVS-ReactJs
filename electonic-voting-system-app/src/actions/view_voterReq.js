let ViewVoterReqAction=()=>{
    return async function(dispatch){
    const res=await fetch(
        "http://localhost:8080/evs/admin/voterRequest"
    );
    const data=await res.json();
    console.log("action data:",data);
    dispatch({type:"VIEW_VOTERREQ",payload:data});
}
}
export default ViewVoterReqAction;