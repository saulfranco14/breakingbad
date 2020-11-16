import styled from 'styled-components'


export const Container = styled.div`
    display         : flex;
    align-items     : center;
    padding-top     : 5rem;
    flex-direction  : column;
`

export const ButtonNext = styled.div `
    background              : --webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% );
    background-size         : 300px;
    font-family             : Arial, Helvetica, sans-serif;
    color                   : #fff;
    margin-top              : 2rem;
    margin-bottom           : 2rem;
    padding                 : 1rem 2rem;
    font-size               : 2rem;
    border                  : 2px solid black;
    cursor                  : pointer;
`

export const ContenedorFrase = styled.div`
    margin-top : 9rem;
    border-radius : .5rem;
    background-color: #FFF;
    padding:1rem;
    width: 85%;
    height: 150px;
`

export const FraseContenedor = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    font-size : 24px;
    text-align: center;
    margin: 0 auto;
    color : black;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size : 18px;
    }
`

export const SubtituloContenedor = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    font-size : 20px;
    text-align: right;
    margin: 0 auto;
    color : gray;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size : 14px;
    }
`
