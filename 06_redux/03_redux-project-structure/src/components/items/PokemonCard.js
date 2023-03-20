function PokemonCard({ pokemon }) {

    return (
        <div>
            <h3>포켓몬 이름 : { pokemon.name }</h3>
            <p>상세보기 url : { pokemon.url }</p>
        </div>
    );
}

export default PokemonCard;