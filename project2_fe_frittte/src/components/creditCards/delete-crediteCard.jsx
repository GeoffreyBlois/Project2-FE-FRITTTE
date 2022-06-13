import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";

export default function CrdeiteCardRegister() {

    const url = "http://localhost:9006";

    const [user, setUser] = useContext(userContext);

    const creditCardInput = useRef();
    // const creditCradNameInput  = useRef();
    // const cvvInput = useRef();
    // const expDateInput = useRef();
    // const limitInput = useRef();
    // const usernameInput = useRef();

    async function deleteCC() {
    console.log(user.username)


        const userCC = {

            creditCardNumber: creditCardInput.current.value,
            // creditCardName: creditCradNameInput.current.value,
            // cvv: cvvInput.current.value,
            // expDate: expDateInput.current.value,
            // limit: limitInput.current.value,
            customerUsername: user.username,  
    };

        try {
                          
            const response = await axios.delete(`${url}//deleteCreditCard`, userCC, {withCredentials: true});
            
        } catch (error) {
            alert(error.response.data);
           
        }
    }

    return (
        <>
                <h4>Please register below.</h4>
                <input type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                {/* <input placeholder="Enter name on the credit card number" ref={creditCradNameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter CVV from the backend of the card" ref={cvvInput}></input>
                <input placeholder="Enter expiration date" ref={expDateInput}></input>
                <br></br>               
                <br></br>
                <br></br>
                <input placeholder="Enter the limit on the card" ref={limitInput}></input> */}
                <br></br>                   
                <br></br>
                <button onClick={deleteCC}>Delete Credit Card</button> 

        </>
    );
}
