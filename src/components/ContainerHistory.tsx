import { Flex, Space } from "antd";
import SecondaryText from "./SecondaryText";
import styled from "styled-components";
import { ContainerHistoryFontSizes } from "@/app/style/theme";

const dadosClima = [
    {
        local: "São Paulo, SP",
        temperaturaC: 23,
        chovendo: true
    },
    {
        local: "Rio de Janeiro, RJ",
        temperaturaC: 28,
        chovendo: false
    },
    {
        local: "Porto Alegre, RS",
        temperaturaC: 18,
        chovendo: true
    },
    {
        local: "Manaus, AM",
        temperaturaC: 31,
        chovendo: false
    }
];



function ContainerHistory() {
    return (
        <Flex vertical className="container-history" style={{ flexShrink: 1, overflowY: 'hidden' }}>
            <SecondaryText>Visto recentemente</SecondaryText>

            <Space direction="vertical" size={12} style={{ width: '100%', marginTop: '24rem', flexShrink: 1, overflowY: 'auto' }}>
                {dadosClima.map((item, index) => (
                    <HistoryCard key={index} style={{ color: 'white' }}>
                        <Space direction="vertical" size={16} style={{ width: '100%' }}>
                            <Flex style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div className="icon">Icone</div>

                                <Temp>{item.temperaturaC}</Temp>
                            </Flex>

                            <Space direction="vertical" size={4} style={{ width: '100%' }}>
                                <Local>{item.local}</Local>

                                <Status>{item.chovendo.toString()}</Status>
                            </Space>
                        </Space>
                    </HistoryCard>
                ))}
            </Space>
        </Flex>
    );
}

const HistoryCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.18);
    border-radius: 38rem;
    border: 1px solid white;
    backdrop-filter: blur(36px);
    padding: 24rem;
`;

const Temp = styled.span`
    font-size: ${ContainerHistoryFontSizes.temp.desktop};
    color: white;
    font-weight: 500;
`;

const Local = styled.span`
    font-size: ${ContainerHistoryFontSizes.local.desktop};
    color: white;
    font-weight: 400;
`;

const Status = styled.span`
    font-size: ${ContainerHistoryFontSizes.status.desktop};
    color: white;
    opacity: .78;
`;

export default ContainerHistory;