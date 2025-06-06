'use client'

import ContainerHistory from "@/components/ContainerHistory";
import OutlinedInput from "@/components/OutlinedInput";
import RowCurrentInfo from "@/components/RowCurrentInfo";
import RowHistoricInfo from "@/components/RowHistoricInfo";
import SecondaryText from "@/components/SecondaryText";
import { Layout, Flex, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import { GlobalVars } from "./style/GlobalVars";
import Image from "next/image";


const handleSubmit = (values: any) => {
    console.log("Form values:", values);
}

function HomePage() {
    return ( 
        <>
            <GlobalVars />
            <Layout style={{ height: "100vh", width: "100vw", backgroundColor: "transparent" }}>
                <Content style={{ color: "white" }}>
                    <MainFrame className="main-frame">
                        <Flex style={{ height: "100%" }} >
                            <Image
                                src="/images/main-bg.png" alt="Website's background" fill={true}
                                style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
                            />

                            <SearchColumn className="col-1">
                                <Flex vertical style={{ padding: '24rem', gap: '42rem', height: '100%' }}>
                                    <ContainerSearch>
                                        <Space direction="vertical" style={{ width: '100%' }} size={12}>
                                            <SecondaryText>Local</SecondaryText>

                                            <OutlinedInput onSearch={handleSubmit} />
                                        </Space>
                                    </ContainerSearch>

                                    <ContainerHistory />
                                </Flex>
                            </SearchColumn>

                            <MainContent className="col-3">
                                <Flex vertical style={{height: '100%'}}>
                                    <RowCurrentInfo />

                                    <RowHistoricInfo />
                                </Flex>
                            </MainContent>
                        </Flex>
                    </MainFrame>
                </Content>
            </Layout >
        </>
     );
}


const MainFrame = styled.div`
    height: 100%;
    padding-top: var(--main-frame-padding);
    padding-bottom: var(--main-frame-padding);
`

const SearchColumn = styled.div`
    height: 100%;
    padding: 0;
    background-color: red;
    backdrop-filter: blur(36px);
    background: rgba(255, 255, 255, 0.1);
    z-index: 50;
    border-radius: 32rem;
    border: 1px solid white;
`;

const ContainerSearch = styled.div`
    flex-shrink: 0;
`;

const MainContent = styled.div`
    flex-shrink: 0;
    height: 100%;
    padding-right: 0;
`;

export default HomePage;