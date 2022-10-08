import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;


  header{
    margin-top: 70px;
  }

  @media(max-width: 900px) {
    margin-top: 0%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 900px) {
    flex-direction: column;
  }
`

export const Card1 = styled.div`
  width: 300px;
  height: 530px;
  background-color: #00A76B;
  padding: 0 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  header{ 
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    img{
      filter: invert(99%) sepia(14%) saturate(259%) hue-rotate(186deg) brightness(113%) contrast(100%);
    }
  }
  
  span{
    margin-bottom: 26px;
    margin-top: 24px;
  }
  
  a{
    background: #EBE7E7;
    font-size: 16px;
    color: #00A76B;
    padding: 10px 50px;
    border-radius: 92px;
    border: none;
    transition: background 0.2s ease-in;
    text-decoration: none;

    &:hover{
      background: #fff;
    }

    &:active{
      background: #bfbfbf;
    }
  }

  @media(max-width: 900px) {
    border-radius: 0;
    width: 100%;
  }
  
`
export const Card2 = styled.div`
  width: 300px;
  height: 530px;
  background-color: #00403F;
  padding: 0 16px;
  header{ 
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    img{
      filter: invert(99%) sepia(14%) saturate(259%) hue-rotate(186deg) brightness(113%) contrast(100%);
    }
  }
  
  span{
    margin-bottom: 26px;
    margin-top: 24px;
  }
  
  a{
    background: #EBE7E7;
    font-size: 16px;
    color: #00A76B;
    padding: 10px 50px;
    border-radius: 92px;
    border: none;
    transition: background 0.2s ease-in;
    text-decoration: none;

    &:hover{
      background: #fff;
    }

    &:active{
      background: #bfbfbf;
    }
  }

  
  @media(max-width: 900px) {
    border-radius: 0;
    width: 100%;
  }
`
export const Card3 = styled.div`
  width: 300px;
  height: 530px;
  padding: 0 16px;
  border-top-right-radius: 8px;
  background-color: #007E7E;
  border-bottom-right-radius: 8px;
  header{ 
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    img{
      filter: invert(99%) sepia(14%) saturate(259%) hue-rotate(186deg) brightness(113%) contrast(100%);
    }
  }
  
  span{
    margin-bottom: 26px;
    margin-top: 24px;
  }
  
  a{
    background: #EBE7E7;
    font-size: 16px;
    color: #00A76B;
    padding: 10px 50px;
    border-radius: 92px;
    border: none;
    transition: background 0.2s ease-in;
    text-decoration: none;

    &:hover{
      background: #fff;
    }

    &:active{
      background: #bfbfbf;
    }
  }

  
  @media(max-width: 900px) {
    border-radius: 0;
    width: 100%;
  }

`

export const ParagraphContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 52px;
`




export const Footer = styled.footer`
  margin-top: 8px;
  background: #252525;
  width: 100%;
  max-width: 900px;
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  font-size: 18px;

  button{
    margin-left: 8px;
    background: #EBE7E7;
    border: none;
    padding: 8px 24px;
    border-radius: 70px;
    transition: background 0.2s ease-in;
    

    &:hover{
      background: #fff;
    }

    &:active{
      background: #bfbfbf;
    }

  }
  
  @media(max-width: 900px) {
    height: 90px;
    border-radius: 0;
    font-size: 16px;
    margin:0;
  }
`