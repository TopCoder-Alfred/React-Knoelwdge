import styled from "styled-components";

const ContentWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`

const ErrorPage = () => {
    return (
        <ContentWrapper>
            <h1>Error 404</h1>
        </ContentWrapper>
    )
}
export default ErrorPage