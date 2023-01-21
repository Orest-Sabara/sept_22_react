const Character = ({character}) => {
    // const {name, surname, imag} = props;
    // const {simpson} = props;
    const { name, status, species, image} = character;

    return (
        <div style={{textAlign: 'center'}}>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <img src={image} alt={name}/>
            <br/><br/>
        </div>
    )
}

export  {Character}