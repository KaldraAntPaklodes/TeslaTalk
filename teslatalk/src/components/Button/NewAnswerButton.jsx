import { Link } from "react-router-dom"
import { NEW_ANSWER_ROUTE } from "../../routes/const"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NewAnswerButton=()=>{

    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn){
        return
    }
    
    return(
        <div className="newAnswerButton"><Link to={NEW_ANSWER_ROUTE}>Create New Answer</Link></div>
    )
}

export default NewAnswerButton