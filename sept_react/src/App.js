import './App.css';
import {Routes, Route} from "react-router-dom";
import {HomePage, UsersPage, PostsPage, AboutPage, NotFoundPage, PostDetailsPage} from "./pages";
import {MainLayout} from "./layouts";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<PostDetailsPage />}/>
                </Route>

                <Route path={'about'} element={<AboutPage/>}/>
            </Route>
            <Route path={"*"} element={<NotFoundPage />}/>
        </Routes>
    </div>
  );
}

export default App;
