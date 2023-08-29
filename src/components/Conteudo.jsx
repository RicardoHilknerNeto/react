
export default function Conteudo(props){
    // Área declarativa


    return (
        <>
        {/* Área imperativa */}
        
        <section>
            <p><a href="/">Home Page</a></p>
            <button onClick={() => alert("Hello World")}>Click Me!</button>
            <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
        </section>
        </>
    )
}