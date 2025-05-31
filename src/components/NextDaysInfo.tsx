import styled from "styled-components";
import NextDaysInfoCard from "./NextDaysInfoCard";

const forecastData = [
    {
        dia: "Hoje",
        descricao: "Parcialmente nublado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Amanhã",
        descricao: "Ensolarado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Quarta",
        descricao: "Chuva",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Quinta",
        descricao: "Tempestade",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sexta",
        descricao: "Frio intenso",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sábado",
        descricao: "Nublado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sábado",
        descricao: "Ensolarado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
];


function NextDaysInfo() {
    return (
        <ContainerNextDaysInfo className="next-days-info">
            <h2>Próximos dias</h2>
            <ContainerNextDaysInfoCards>
                {
                    forecastData.map((data, index) => {
                        const { dia, descricao, temperatura, minima, maxima } = data;

                        return (
                            <NextDaysInfoCard date={dia} description={descricao} temperature={temperatura} minimum={minima} maximum={maxima} index={index} />
                        )
                    })
                }
            </ContainerNextDaysInfoCards>
        </ContainerNextDaysInfo>
    );
}


const ContainerNextDaysInfo = styled.div`
    width: 33.3334%;
    /* height: 500rem; */
    flex: 1;
    padding-left: 16rem;
`;

const ContainerNextDaysInfoCards = styled.ul`
    width: 100%;
    padding: 24rem;
    border-radius: 32rem;
    display: flex;
    flex-direction: column;
    row-gap: 8rem;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(36px);
`;


export default NextDaysInfo;