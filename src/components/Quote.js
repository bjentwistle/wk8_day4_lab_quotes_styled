import styled from "styled-components"

const QuoteContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items:center;
    
`
const QuoteBox= styled.figure`
    background-color: lightgrey;
    font-size:20px;
    border-radius: 10px;
    width:30%;
    padding: 20px;

`
const QuoteBy = styled.figcaption`
    text-align:left;
`

const QuoteText = styled.blockquote`
    text-align:center;
`

const Quote = ({by, children}) => {

    return (
        <QuoteContainer>
        <QuoteBox>
            <QuoteText>"{children}"</QuoteText>   
        </QuoteBox>
        <QuoteBy> -{by} </QuoteBy>
        </QuoteContainer>
      
)
}
  
export default Quote;