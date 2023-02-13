import {useSelector} from "react-redux";

import '../../App.css'
import {Cars, Form} from "../../components";

const CarsPage = () => {

    const {loading} = useSelector(state=>state.cars)
    return (
        <div className="wrapper">
            <Form/>
            <hr/>
            {loading&&<h1>Loading.....</h1>}
            <Cars />
        </div>
    );
}

export {CarsPage}