function Outralist ({itens}){
    return(
        <>
            <h3>Lista de coissas</h3>
            {itens.length > 0 ? (
            itens.map((item, index) => <p key={index}>{item}</p>)
            ):(<p>Não a itens na lista</p>)}
        </>
    )
}

export default Outralist

