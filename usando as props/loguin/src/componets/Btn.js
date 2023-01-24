function Evento (){
    function MeuEvento(){
        alert("deu bom")
    }
    return(
        <>
        <p>teste do evento</p>
        <button onClick={MeuEvento}>CLIQUE</button>
        </>
    )
}
export default Evento 