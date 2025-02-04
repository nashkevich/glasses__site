import { useEffect } from "react"
interface NavBarProps{
    name: string;
}
function NavBar({name}:NavBarProps){
    useEffect(()=>{
        // const navBar = document.querySelector('.nav-wrapper') as HTMLElement
        // window.addEventListener('wheel',(event)=>{
        //     if(event.deltaY > 0 && navBar){
        //         navBar.style.opacity  = '0'
        //     }else{
        //         navBar.style.opacity = '1'
        //     }
        // })
    })
    return (
        <div className="nav-wrapper">
            <span className="logo opacity-translate-anim"> 
                <svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.54166 59.0417V49.9583H31.7917V59.0417H4.54166ZM35.1979 41.5562L25.6604 32.0187L32.0187 25.6604L41.5562 35.1979L35.1979 41.5562ZM49.9583 31.7917V4.54166H59.0417V31.7917H49.9583ZM73.8021 41.5562L67.4437 35.1979L76.9812 25.6604L83.3396 32.0187L73.8021 41.5562ZM77.2083 59.0417V49.9583H104.458V59.0417H77.2083ZM54.5 68.125C50.7153 68.125 47.4983 66.8003 44.849 64.151C42.1996 61.5017 40.875 58.2847 40.875 54.5C40.875 50.7153 42.1996 47.4983 44.849 44.849C47.4983 42.1996 50.7153 40.875 54.5 40.875C58.2847 40.875 61.5017 42.1996 64.151 44.849C66.8003 47.4983 68.125 50.7153 68.125 54.5C68.125 58.2847 66.8003 61.5017 64.151 64.151C61.5017 66.8003 58.2847 68.125 54.5 68.125ZM76.9812 83.3396L67.4437 73.8021L73.8021 67.4437L83.3396 76.9812L76.9812 83.3396ZM32.0187 83.3396L25.6604 76.9812L35.1979 67.4437L41.5562 73.8021L32.0187 83.3396ZM49.9583 104.458V77.2083H59.0417V104.458H49.9583Z" fill="#E8EAED"/>
                </svg>
            </span>
            <h1 className="section-name">{name}</h1>
            <div className="icon-nav-container">
                <span className="icon-nav opacity-translate-anim">
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="4" fill="#D9D9D9"/>
                <rect y="10" width="36" height="4" fill="#D9D9D9"/>
                <rect y="20" width="36" height="4" fill="#D9D9D9"/>
                </svg>
                </span>
            </div>
        </div>
    )
}

export default NavBar