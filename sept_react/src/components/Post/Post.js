import {useNavigate} from "react-router-dom";
// import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, userId, title} = post;
    const navigate = useNavigate();

  return(
      <div>
          <div>id: {id}</div>
          <div>userId: {userId}</div>
          <div>title: {title}</div>
          {/*<Link to={id.toString()} state={{...post}}>post details</Link>*/}
          <button onClick={()=>navigate(id.toString(), {state: post})}>Details</button>
          <br/><br/>
      </div>
  )
}

export {Post}