import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            image: "https://media.zoomnoticias.com/p/c6a622278972ec913cda8c7ec817ef2a/adjuntos/300/imagenes/000/047/0000047428/1200x675/smart/margepng.png"
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            image: "https://cdnb.artstation.com/p/assets/images/images/035/287/409/large/nathan-renoir-javier-bart-simpson-fanart-final.jpg"
        }
    ]
    return (
        <div className="App">
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    )
}

export {Simpsons}