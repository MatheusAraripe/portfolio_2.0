import { styled } from "@mui/material"
import Avatar from "../assets/foteca_portfolio_redi.jpg"

const Home = () => {

    const StyledHome = styled("div")(() => ({
        backgroundColor: 'black',
        height: '100vh'
    }))
    const StyledAvatar = styled("img")(() => ({
        borderRadius: '20px',
        width: '350px',
        height: '400px'

    }))
  return (
    <>
        <StyledHome>
            <StyledAvatar src={Avatar} />
        </StyledHome>
    </>
  )
}

export default Home
