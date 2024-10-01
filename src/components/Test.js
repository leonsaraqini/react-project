import { useParams } from "react-router-dom";



const Test = () => {
    const test = useParams();

    console.log(test);

    return <h1>Test</h1>
}

export default Test;
