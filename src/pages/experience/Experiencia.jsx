import './Experience.scss'

export default function Experience(){
    return (
        <>
                <section className="container-experience">
                    <h2 className='title-page'>Experiência Profissional</h2>
                    <article>
                        <h3>Especialista em Vendas - Magazine Luiza</h3>
                        <h4>05/12/2023 - Atualmente</h4>
                        <p>
                           <strong>Resumo: </strong>
                            Responsável por entender as necessidades do cliente, buscando não apenas atender as
                            necessidades, mas também contruir uma relação de confiança e fidelidade.
                            Minha atuação no conselho de colaboradores complementa essa função, permitindo-me contribuir
                            ativamente para o sucesso da empresa como um todo.
                        </p>
                        <p>
                           <strong>Competências: </strong>
                            Participação no processo seletivo, treinamento e integração para novos
                            colaboradores, trabalho em equipe, ambiente colaborativo.
                        </p>
                    </article>
                        <div className="layout-experience"></div>
                    <article>
                    <h3>Lavador de Veiculos - Robinson (Terceirizado da Toyota)</h3>
                        <h4>05/12/2023 - Atualmente</h4>
                        <p>
                           <strong>Resumo: </strong>
                           Durante meu tempo na Toyota, fui responsável por garantir que cada veículo estivesse em
                           perfeita condição antes da entrega, o que envolvia uma verificação minuciosa de cada detalhe.
                        </p>
                        <p>
                           <strong>Competências: </strong>
                           Feedback positivo, atenção a detalhes, gerenciamento de tempo e garantia de qualidade.
                        </p>
                    </article>
                </section>
        </>
    )
}