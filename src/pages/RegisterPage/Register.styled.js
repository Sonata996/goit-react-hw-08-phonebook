import styled from 'styled-components'
import { Input } from '@chakra-ui/react'

export const ConteinerForm = styled.div`
padding-top: 30px;
height: 280px;
background-image: url('https://thumbs.dreamstime.com/b/fall-background-autumn-colorful-leaves-fall-background-autumn-colorful-leaves-sun-flares-99090759.jpg');
background-position: center;
  background-repeat: no-repeat;
`
export const ConteinetInput = styled.div`
display: flex;
flex-direction: column
`
export const FormRegister = styled.form`
max-width: 400px;
margin-left: auto;
margin-right: auto;
display: flex;
gap: 20px;
flex-direction: column
`
export const FormInput = styled(Input)`
background-color: beige;
border-radius:3px ;
border-top:none ;
border-left:none ;
border-right:none ;
`
export const FormButton = styled.button`
margin-left: auto;
margin-right: auto;
width: 9em;
height: 3em;
border-radius: 30em;
font-size: 15px;
font-family: inherit;
border: none;
position: relative;
overflow: hidden;
z-index: 1;
box-shadow: 6px 6px 12px #c5c5c5,
-6px -6px 12px #fff;
&:hover::before{
    width: 9em;
}
&:before{
    content: '';
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #b60fd8 0%, #f94747 100%);
    transition: .5s ease;
    display: block;
    z-index: -1;
}
`