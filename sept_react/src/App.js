import './App.css';
import {ImgBlock} from "./components/ImgBlock/ImgBlock";

function App() {
    const url = 'https://static.onecms.io/wp-content/uploads/sites/6/2019/11/rick-and-morty-season-4-2000.jpg'

    return (
        <div className="App">
            <ImgBlock url={url}/>
        </div>
    );
}

export default App;
