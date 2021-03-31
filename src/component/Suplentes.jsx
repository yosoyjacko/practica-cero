import { connect } from "react-redux";

const Suplentes = ({suplentes}) => (
    <section>
        <h2>Suplentes</h2>
        <div>
            {
                suplentes.map(j=>(
                    <article className="suplente">
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps) (Suplentes);