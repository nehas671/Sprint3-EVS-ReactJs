let viewReqByDistrictAction=(district)=>{
    return async function (dispatch){
        const res=await fetch(
            `http://localhost:8080/evs/admin/voterRequest/${district}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
            }
        );
        const data =await res.json();
        console.log("action data:",data);
        dispatch({type:"VIEW_VOTERREQ",payload:data});
    }
}
export default viewReqByDistrictAction;