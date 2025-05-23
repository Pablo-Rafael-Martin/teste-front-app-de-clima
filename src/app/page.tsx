'use client'

import Image from "next/image";
import styled from "styled-components";
import { Flex, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { GlobalVars } from "./style/GlobalVars";

export default function Home() {
    return (
        <Layout style={{ height: "100vh", width: "100vw", backgroundColor: "transparent" }}>
            <GlobalVars />
            <Content>
                <MainFrame className="main-frame">
                    <Image
                        src="/images/main-bg.png" alt="Website's background" fill={true}
                        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
                    />

                    <SearchColumn className="col-1">
                        <Flex vertical>
                            {/* <ContainerSearch>

                            </ContainerSearch>

                            <ContainerHistory>

                            </ContainerHistory> */}
                        </Flex>
                    </SearchColumn>
                </MainFrame>
            </Content>
        </Layout>
    );
}

const MainFrame = styled.div`
height: 100%;
padding-top: var(--main-frame-padding);
padding-bottom: var(--main-frame-padding);
`

const SearchColumn = styled.div`
height: 100%;
background-color: red;
`;

const ContainerSearch = styled.div`

`

