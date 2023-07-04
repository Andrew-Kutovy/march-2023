
const CharacterComponent = (props) => {
    const {id,name,status,species,gender,image} = props

    return (
        <div className={'Character'}>
            <div className={'photo'}>
                <img src={image} alt={name}></img>
            </div>
            <div className={'info'}>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>status: {status}</p>
                <p>species: {species}</p>
                <p>gender: {gender}</p>
            </div>
        </div>
    )
}

export default CharacterComponent;