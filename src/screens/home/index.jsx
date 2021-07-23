import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #03001e;  
    background: -webkit-linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e);
    background: linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e);
`;

const Typist = styled.div`
    width: 80%;
    height: 400px;
    position: absolute;
    top: 35%;
    left: 150px;
`;

const TypistTitle = styled.span`
    color: #fdeff9;
    font-family: 'Raleway',sans-serif;
    font-weight: bolder;
    font-size: 80px;
`;

const TypistName = styled.span`
    color: #ec38bc;
`;

const TypistSubtitle = styled.p`
    color:#e7d5e2;
    font-size: 55px;
    margin-top: -0px;
`;

const TypistDescription = styled.p`
    font-size: 20px;
    color:#e7d5e2;
    width: 70%;
    margin-top: -40px;
    margin-bottom: 30px;
`;

const TypistContact = styled.a`
    font-size: 22px;
    font-family: 'Raleway',sans-serif;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ec38bc;
    border-radius: 4px;
    text-decoration: none;
    color: #ec38bc;
    font-weight: bold;
    margin-top: 10px;

    &:hover{
        background-color: #00000064;
        transition:.3s;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Typist>
                <div className="typist-title">
                    <TypistTitle>Hi, <TypistName>Cata</TypistName> here.</TypistTitle>
                </div>
                <TypistSubtitle>Loving yellow things and creating stuff sometimes.</TypistSubtitle>
                <TypistDescription>I'm a software developer based in Colombia. I have profound interest on Front End development, design, 3D modeling and everything in between.</TypistDescription>
                <TypistContact href="mailto:cgarces711@gmail.com"> <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>Say hello</TypistContact>
            </Typist>
        </HomeContainer>
    )
}

export default Home;