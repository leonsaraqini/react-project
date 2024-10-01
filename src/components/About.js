//Classbased Component
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
    <div> 
        <h1>About</h1>
        <p>page</p>
        <User name={"Leon"}/>
        <UserClass name={"Leonita"}/>
    </div> 

    
    )
}

export default About;