import styled from 'styled-components'
import recycle from './Images/recycle.png'
import sun from './Images/sun.png'
import BTNDown from './Images/BTNDown.png'
import BTNUP from './Images/BTNUP.png'
import dge from '../src/Images/dge.png'
import game from '../src/Images/game.png'
import './App.css'
import { useState } from 'react'

  const Main= styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(../src/Images/Backgrounf1.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    position: relative;
    @media (max-width:1200px) {
      flex-direction: column;
    }
  `
  const LeftDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    @media (max-width:1200px) {
      align-items: start;
    }
  `
  const LeftDivForP=styled.div`
    width: 540px;
    margin-top: 100px;
    display: flex;
    justify-content: end;
    gap: 20px;
    @media (max-width:1200px) {
      margin-left: 120px;
    }
    @media (max-width:750px) {
      margin-left: 30px;
      width: 325px;
    }
  `
  const SecondDivForP=styled.div`
    
  `
  const LeftDivForIMG=styled.img`
    width: 17px;
    height: 17px;
    margin-top: 5px;
  `
  const LeftDivPMain=styled.p`
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    color: white;
    width: 540px;
    @media (max-width:750px) {
      width: 290px;
      font-size: 12px;
    }
  `
  const LeftDivPAuthor=styled.p`
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-top: 20px;
    @media (max-width:750px) {
      font-size: 12px;
    }
  `
  const LeftDivBottom=styled.div`
    width: 575px;
    height: 288px;
    margin-top: 300px;
    @media (max-width:1200px) {
      width: 500px;
      margin-left: 120px;
    }
    @media (max-width:750px) {
      width: 278px;
      margin-left: 40px;
    }
  `
  const DivForRqagac=styled.div`
    display: flex;
    gap: 20px;
  `
  const LeftDivBottomSun=styled.img`
    width: 24px;
    height: 24px;
  `
  const LeftDivBottomGD=styled.p`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    font-family: inter;
    color: white;
    @media (max-width:1200px) {
      font-size: 18px;
    }
    @media (max-width:750px) {
      font-size: 15px;
    }
  `
  const DivForTime=styled.div`
    width: 575px;
    height: 200px;
    display: flex;
    align-items: end;
    gap: 20px;
    margin-top: 20px;
    @media (max-width:1200px) {
      width: 500px;
    }
    @media (max-width:750px) {
      width: 278px;
      height: 150px;
    }
  `
  const TimeP=styled.p`
    font-size: 200px;
    font-weight: 700;
    font-family: inter;
    color: white;
    align-self: center;
    letter-spacing: 8px;
    @media (max-width:1200px) {
      font-size: 175px;
    }
    @media (max-width:750px) {
      font-size: 100px;
    }
  `
  const BST=styled.p`
    font-size: 40px;
    font-family: inter;
    font-weight: 300;
    color: white;
    padding-bottom: 15px;
    @media (max-width:1200px) {
      font-size: 32px;
    }
    @media (max-width:750px) {
      font-size: 15px;
      padding-bottom: 30px;
    }
  `
  const City=styled.p`
    font-family: inter;
    font-size: 24px;
    font-weight: 700;
    color: white;
    letter-spacing: 6px;
    margin-top: 20px;
    @media (max-width:1200px) {
      font-size: 18px;
    }
    @media (max-width:750px) {
      font-size: 15px;
    }
  `
    const RightDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    @media (max-width:1200px) {
      justify-content: start;
      align-items: start;
      margin-top: 60px !important;
    }
    
  `
  const RightBTN=styled.button`
    width: 146px;
    height: 56px;
    border-radius: 28px;
    color: white;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-right: 200px;
    margin-bottom: 150px;
    @media (max-width:1200px) {
      margin: 0;
      margin-left: 120px;
    }
    @media (max-width:750px) {
      width: 115px;
      height: 39px;
      margin-left: 40px;
    }
  `
  const RightBtnP=styled.p`
    font-family: inter;
    font-size: 16px;
    font-weight: 700;
    color: black;
    opacity: 50%;
    letter-spacing: 1px;
    @media (max-width:750px) {
      font-size: 12px;
    }
  `


  const RightBtnIMG=styled.img`
    width: 40px;
    height: 40px;
    @media (max-width:750px) {
      width: 32px;
      height: 32px;
    }
  `
  const BottomDiv=styled.div`
    width: 100%;
    height: 400px;
    background: #FFFFFFBF;
    backdrop-filter: blur(40.774227142333984px);
    position: absolute;
    display: flex;
    align-items: center;
    @media (max-width:750px) {
      /* height: 256px; */
      flex-direction: column;
    }
  `
  const BottomLeftDiv=styled.div`
    width: 100%;
    height: 252px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:750px) {
      height: 56px;
      margin-top: 40px;
      gap: 10px;
    }
  `

  const BottomLinetDiv=styled.div`
    width: 1px;
    height: 252px;
    background-color: #303030;
    opacity: 25%;
    margin-right: 100px;
    @media (max-width:750px) {
      display: none;
    }
  `


  const BottomRightDiv=styled.div`
    width: 90%;
    height: 252px;
    @media (max-width:750px) {
      height: 56px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      gap: 10px;
    }
  `
  const TimeZoneLeftDiv=styled.div`
    width: 423px;
    height: 105px;
    @media (max-width:1200px) {
      width: 303px;
    }
    @media (max-width:750px) {
      width: 323px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `
  const DayOfYear=styled.div`
    width: 423px;
    height: 105px;
    @media (max-width:1200px) {
      width: 303px;
    }
    @media (max-width:750px) {
      width: 323px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `

  const DayOfWeek=styled.div`
    width: 179px;
    height: 105px;
    @media (max-width:1200px) {
      width: 160px;
    }
    @media (max-width:750px) {
      width: 323px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `

  const WeekNumber=styled.div`
    width: 179px;
    height: 105px;
    @media (max-width:1200px) {
      width: 155px;
    }
    @media (max-width:750px) {
      width: 323px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `
  const TimeZoneTopP=styled.p`
    font-family: inter;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 4px;
    color: #303030;
    margin-bottom: 15px;
    @media (max-width:1200px) {
      font-size: 13px;
    }
    @media (max-width:750px) {
      font-size: 10px;
      margin: 0;
    }
  `
  const TimeZoneBottomP=styled.p`
    font-family: inter;
    font-size: 56px;
    font-weight: 700;
    color: #303030;
    @media (max-width:1200px) {
      font-size: 40px;
    }
    @media (max-width:750px) {
      font-size: 20px;
    }
  `
  const DayOfYearTopP=styled.p`
    font-family: inter;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 4px;
    color: #303030;
    margin-top: 50px;
    margin-bottom: 15px;
    @media (max-width:1200px) {
      font-size: 13px;
    }
    @media (max-width:750px) {
      font-size: 10px;
      margin: 0;
    }
  `
  const DayOfYearBottomP=styled.p`
    font-family: inter;
    font-size: 56px;
    font-weight: 700;
    color: #303030;
    @media (max-width:1200px) {
      font-size: 40px;
      
    }
    @media (max-width:750px) {
      font-size: 20px;
    }
  `
  const DayOfWeekTopP=styled.p`
    font-family: inter;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 4px;
    color: #303030;
    margin-bottom: 15px;
    @media (max-width:1200px) {
      font-size: 13px;
    }
    @media (max-width:750px) {
      font-size: 10px;
      margin: 0;
    }
  `
  const DayOfWeekBottomP=styled.p`
    font-family: inter;
    font-size: 56px;
    font-weight: 700;
    color: #303030;
    @media (max-width:1200px) {
      font-size: 40px;
    }
    @media (max-width:750px) {
      font-size: 20px;
    }
  `
  const WeekNumberTopP=styled.p`
    font-family: inter;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 4px;
    color: #303030;
    margin-top: 50px;
    margin-bottom: 15px;
    @media (max-width:1200px) {
      font-size: 13px;
    }
    @media (max-width:750px) {
      font-size: 10px;
      margin: 0;
    }
  `
  const WeekNumberBottomP=styled.p`
    font-family: inter;
    font-size: 56px;
    font-weight: 700;
    color: #303030;
    @media (max-width:1200px) {
      font-size: 40px;
    }
    @media (max-width:750px) {
      font-size: 20px;
    }
  `

function App() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay)

  let onejan = new Date(now.getFullYear(), 0, 1);
  let week = Math.ceil((day + onejan.getDay() - 1) / 7);
  
  let dayOfWeek = (now.getDay() + 6) % 7 + 1;

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");


  const [show,setSow]=useState(false)

  const handleButton = () =>{
    setSow(!show)
  }
 
  

  return (
    <>
      <Main style={{  backgroundImage:  hours > 18 || hours < 6 ? `url('${game}')` : `url('${dge}')`,}}>
        <LeftDiv>
          <LeftDivForP style={{display:show?'none':"flex"}}>
            <SecondDivForP>
            <LeftDivPMain>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</LeftDivPMain>
            <LeftDivPAuthor>Ada Lovelace</LeftDivPAuthor>
            </SecondDivForP>
            <LeftDivForIMG src={recycle}/>

          </LeftDivForP>

          <LeftDivBottom style={{marginTop:show?"100px":"300px"}}>
            <DivForRqagac>

            <LeftDivBottomSun src={sun}/>
            <LeftDivBottomGD>{hours > 18 || hours < 6 ? "GOOD EVENING, IT’S CURRENTLY" : "GOOD MORNING, IT’S CURRENTLY"}</LeftDivBottomGD>

            </DivForRqagac>

            <DivForTime>

              <TimeP>{hours}:{minutes}</TimeP>

              <BST>BST</BST>

            </DivForTime>

            <City>IN TBILISI, GEO</City>



          </LeftDivBottom>


        </LeftDiv>
        <RightDiv style={{alignItems:show?"start":"end", marginTop:show?"340px":""}}>

          <RightBTN onClick={handleButton} >
            <RightBtnP>{show?"LESS":"MORE"}</RightBtnP>
            <RightBtnIMG src={show?BTNUP:BTNDown}/>
          </RightBTN>

        </RightDiv>
      </Main>

      <BottomDiv style={{display:show?"flex":"none", bottom:show && "0px"}}>

        <BottomLeftDiv>
          <TimeZoneLeftDiv>
            <TimeZoneTopP>CURRENT TIMEZONE</TimeZoneTopP>
            <TimeZoneBottomP>Europe/Tbilisi</TimeZoneBottomP>
          </TimeZoneLeftDiv>

          <DayOfYear>
            <DayOfYearTopP>Day of the year</DayOfYearTopP>
            <DayOfYearBottomP>{day}</DayOfYearBottomP>
          </DayOfYear>

        </BottomLeftDiv>

        <BottomLinetDiv></BottomLinetDiv>

        <BottomRightDiv>

          <DayOfWeek>
            <DayOfWeekTopP>Day of the week</DayOfWeekTopP>
            <DayOfWeekBottomP>{dayOfWeek}</DayOfWeekBottomP>
          </DayOfWeek>

          <WeekNumber>
            <WeekNumberTopP>Week number</WeekNumberTopP>
            <WeekNumberBottomP>{week}</WeekNumberBottomP>
          </WeekNumber>

        </BottomRightDiv>

      </BottomDiv>
      
    </>
  )
}

export default App
