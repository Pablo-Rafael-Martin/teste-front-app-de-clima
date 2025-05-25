import { MapPin, MapPinIcon } from "@phosphor-icons/react";
import { Flex, Space } from "antd";
import styled from "styled-components";
import { RowCurrentInfoFontSizes } from "@/app/style/theme";
import SecondaryText from "./SecondaryText";

function RowCurrentInfo() {
    return (
        <WrapperCurrentInfo>
            <Flex style={{ width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                <Container1>
                    <div className="row-1">
                        <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Space size={16} className="container-content">
                                <MapPinIcon size={32} />
                                <ChosenLocation className="local">Local da busca</ChosenLocation>
                            </Space>

                            <CurrentDate className="container-date">
                                Data e horario atuais
                            </CurrentDate>
                        </Flex>
                    </div>

                    <div className="row-2">
                        <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="container-1">
                                <Space size={95} style={{ alignItems: 'center' }}>
                                    <Temperature className="temp">Temp</Temperature>

                                    <div className="container-temp-range">
                                        <Space direction="vertical" size={16}>
                                            <SecondaryInfo className="temp-range">Temperatura mínima</SecondaryInfo>
                                            <SecondaryInfo className="temp-range">Temperatura máxima</SecondaryInfo>
                                        </Space>
                                    </div>
                                </Space>

                                <SecondaryInfo className="status">Status do local</SecondaryInfo>
                            </div>

                            <Flex className="container-2" gap={16}>
                                <Card className="card-1">
                                    <SecondaryText>Umidade</SecondaryText>
                                    <AditionalInfo className="value">80%</AditionalInfo>
                                </Card>
                                <Card className="card-2">
                                    <SecondaryText>Sensacao termica</SecondaryText>
                                    <AditionalInfo className="value">22</AditionalInfo>
                                </Card>
                            </Flex>
                        </Flex>
                    </div>
                </Container1>
            </Flex>
        </WrapperCurrentInfo>
    );
}

const WrapperCurrentInfo = styled.div`
    width: 100%;
    padding: 32rem 16rem;
    /* border: 1px solid white; */
    margin-top: 32rem;
    margin-bottom: 48rem;
    flex-shrink: 0;
`;

const Container1 = styled.div`
    /* background-color: red; */
    width: 100%;
    flex-shrink: 0;
`;

const ChosenLocation = styled.div`
    font-size: ${RowCurrentInfoFontSizes.local.desktop};
`;

const CurrentDate = styled.div`
    font-size: ${RowCurrentInfoFontSizes.local.desktop};
`;

const Temperature = styled.div`
    font-size: ${RowCurrentInfoFontSizes.temp.desktop};
    font-weight: 700;
`;

const SecondaryInfo = styled.div`
    font-size: ${RowCurrentInfoFontSizes.status.desktop};
    opacity: 0.72;

    &.status { 
        margin-top: 24rem;
    }
`;

const AditionalInfo = styled.div`
    font-size: ${RowCurrentInfoFontSizes.aditionalInfo.desktop};
    font-weight: 600;
`;

const Card = styled.div`
    display: flex;
    backdrop-filter: blur(36px);
    background: rgba(255, 255, 255, 0.1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 24rem;
    width: 148rem;
    height: 101rem;
`;


export default RowCurrentInfo;