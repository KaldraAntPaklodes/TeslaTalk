import { Link } from "react-router-dom"
import { NEW_TOPIC_ROUTE } from "../../routes/const"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./NewTopicButton.css"

const NewTopicButton=()=>{

    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn){
        return
    }
    
    return(
        <div className="newTopicButton"><Link to={NEW_TOPIC_ROUTE}>Create New Topic</Link></div>
    )
}

export default NewTopicButton