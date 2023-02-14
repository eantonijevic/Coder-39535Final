import "./NewBright.css"

const Bright = ({title})=>{
return(
<section className="bright bright-slide-1">
<div className="bright-container">
<article className="bright-container__text-box">
<h1 className="bright-text">{title}</h1>
<p className="bright-text">
    <strong>Compre aquí sus productos de iluminación especiales!</strong>
    <p className="bright-text">Sean cuales sean sus necesidades de iluminación LED, tenemos una solución. La iluminación LED es el camino a seguir al reemplazar sus viejas bombillas incandescentes. Las bombillas LED brindan una excelente iluminación a una fracción del costo y duran mucho más.</p>
</p>
<button className="button-primary">Comprar</button>
</article>
</div>

</section>
)
}

export default Bright