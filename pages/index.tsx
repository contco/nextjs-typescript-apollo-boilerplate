import Head from 'next/head'
import styled from "styled-components";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-grow: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: orange;
  font-size: 80px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs BoilerPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Container>
        <Title>Next JS BoilerPlate</Title>
      </Container>
    </div>
  )
}
