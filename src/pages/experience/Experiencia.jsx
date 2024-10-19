import './Experience.scss'
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll'

export default function Experience(){
    return (
        <>
            <RevealOnScroll>
                <section className="container-experience">
                    <h2 className='title-page'>Experiência Profissional</h2>
                    <article>
                        <span>
                            <h3>Vendedor - Magazine Luiza</h3>
                            <h3>05/12/2023 - Atualmente</h3>
                        </span>
                        <ul>
                            <li>
                                Proporciono atendimento personalizado aos clientes, identificando suas necessidades e oferecendo soluções adequadas.
                            </li>
                            <li>
                                Demonstro produtos e destaco suas características e benefícios para aumentar as vendas.
                            </li>
                            <li>
                                Colaboro com a equipe para alcançar metas de vendas e participo ativamente de reuniões e treinamentos.
                            </li>
                            <li>
                                Sou membro do conselho dos colaboradores, onde participo e transmito reuniões e treinamento para equipe.
                            </li>
                        </ul>
                    </article>
                </section>
            </RevealOnScroll>
        </>
    )
}