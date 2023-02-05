import {Posts} from "../../components";
import {Outlet} from "react-router-dom";
import css from './PostPage.module.css'

export const PostsPage = () => {
    return(
        <div className={css.PostPage}>
            <Posts />
            <Outlet/>
        </div>
    )
}