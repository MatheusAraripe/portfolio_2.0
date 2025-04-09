import { styled } from "@mui/material"
import Avatar from "../assets/foteca_portfolio_redi.jpg"
import { useEffect, useRef } from "react"

const Home = () => {

    const StyledMain = styled("div")(() => ({
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        position: 'relative',
    }))

    const StyledAvatarBox = styled("div")(() => ({
        backgroundColor: 'blue',
        backgroundImage: `url(${Avatar})`,
        borderRadius: '8px',
        width: '350px',
        height: '394px',
        cursor: 'pointer',
        position: 'absolute',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }))

    const mainRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    // const avatarRef = useRef<HTMLImageElement>(null);

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
      startX: number,
      startY: number,
      lastX: number,
      lastY: number
    }>({
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0
    })


    useEffect(() => {

        if (!avatarRef.current || !mainRef.current) return;

        const avatar = avatarRef.current;
        const mainArea = mainRef.current;
    
    
        const onMouseDown = (e: MouseEvent) => {         

            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }
    
        const onMouseUp = (e: MouseEvent) => {
          isClicked.current = false;
          coords.current.lastX = avatar.offsetLeft;
          coords.current.lastY = avatar.offsetTop;
        }
    
        const onMouseMove = (e: MouseEvent) => {
          if (isClicked.current === false) return;
    
          const nextX = e.clientX - coords.current.startX + coords.current.lastX;
          const nextY = e.clientY - coords.current.startY + coords.current.lastY;
    
          avatar.style.top = `${nextY}px`;
          avatar.style.left = `${nextX}px`;
        }
    
        avatar.addEventListener('mousedown', onMouseDown);
        avatar.addEventListener('mouseup', onMouseUp);
        mainArea.addEventListener('mousemove', onMouseMove);
        mainArea.addEventListener('mouseleave', onMouseUp);
    
        const cleanup = () => {
          avatar.removeEventListener('mousedown', onMouseDown);
          avatar.removeEventListener('mouseup', onMouseUp);
          mainArea.removeEventListener('mousemove', onMouseMove);
          mainArea.removeEventListener('mouseleave', onMouseUp);
        }
    
        return cleanup;


        
    }, []);

    return (
        <>
            <StyledMain ref={mainRef}>
                <StyledAvatarBox ref={avatarRef}/>
            </StyledMain>
        </>
    )
}

export default Home
