import styled,{css} from 'styled-components'

const buttonStyles = css`
background-color: black;
color: white;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const CollectionItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
`

export const CollectionItemImage = styled.div`
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;
`

export const CollectionFooter = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

.name {
  width: 90%;
  margin-bottom: 15px;
}

.price {
  width: 10%;
}

`

export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

${buttonStyles}
`