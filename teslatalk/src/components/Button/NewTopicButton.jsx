import { Link } from "react-router-dom"
import { NEW_TOPIC_ROUTE } from "../../routes/const"

const NewTopicButton=()=>{
    return(
        <div className="newTopicButton"><Link to={NEW_TOPIC_ROUTE}>Create New Topic</Link></div>
    )
}

export default NewTopicButton