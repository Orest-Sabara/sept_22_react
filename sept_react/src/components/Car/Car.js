import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
   const {id,brand,price,year} = car

    const dispatch = useDispatch();

  return (
      <div>
          <div>id :{id}</div>
          <div>brand :{brand}</div>
          <div>price :{price}</div>
          <div>year :{year}</div>
          <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
          <button onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
      </div>
  )
}

export {Car}