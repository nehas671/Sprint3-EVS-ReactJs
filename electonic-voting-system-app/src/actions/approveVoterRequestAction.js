import axios from 'axios';

const UpdateProductAction = (requestObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:8080/myapp/product/" + requestObj.id,
                { 
                    name: requestObj.name, 
                    quantity: requestObj.quantity,
                    price: requestObj.price
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Request serverResponse: ', res.data);
          dispatch({type: "APPROVE_REQUEST", payload: res.data});

    }
}

export default UpdateProductAction;
