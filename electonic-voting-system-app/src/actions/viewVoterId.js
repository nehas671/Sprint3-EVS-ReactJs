let viewVoterIdAction=(user)=>{
    return async function (dispatch){
        const res=await fetch(
            `http://localhost:8080/evs/user/voterId/${user}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
            }
        );
        const data =await res.json();
        console.log("action data:",data);
        dispatch({type:"VIEW_VOTERID",payload:data});
    }
}
export default viewVoterIdAction;