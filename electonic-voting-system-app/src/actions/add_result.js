import axios from "axios";

let addResultAction = (election_name,state_name) => {
    console.log("result in action",election_name);
    return async function (dispatch) {
        const res = await axios.post (
            `http://localhost:9090/evs/result/${election_name}/${state_name}`, { 
                
                body: JSON.stringify({  
                   
                })
            },
               { 
                    "Content-type": "application/json; charset=UTF-8"
                }
        )


        .then(response=>{
            console.log("showResultAction ",response);
            dispatch({type:"ADD_RESULT",payload:response.data});
            alert("Data Inserted Sucessfully");

            
        }) .catch(error => {
            console.log("error Response:",error.response)
            console.log("data:",error.response.data.message);
            alert(error.response.data.message);
            
        });


          
         
    }
}
export default addResultAction;
