import './App.css'
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import Catalog from './components/Catalog'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect, useState,createContext, useContext } from 'react'

export const ScrollContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | null>(null);

function App() {
  const [isScrollEnable, setScrollEnable] = useState(true)
  const[name,setName] = useState('YOGLASSES')
    const options = {
        rootMargin:'0px',
        threshold:0.3
        } 
    const callback:IntersectionObserverCallback = function(entries, observer){
        
          entries.forEach((entry)=>{
            setScrollEnable((prev)=>{
            if(entry.isIntersecting && prev){
              if(entry.target.id != 'contact'){
                setName(entry.target.id)
              }else{
                setName('')
              }
              const navBar = document.querySelector('.section-name')
              const section = document.getElementById(entry.target.id)
              if(navBar && section){
                navBar.classList.add('fade-in')
                section.scrollIntoView({ block: "center", behavior: "smooth" })
                setTimeout(()=>{
                  navBar.classList.remove('fade-in')
                },1000)
              }
            }
            return prev
            })
          })
      };
    var observer = new IntersectionObserver(callback,options)
    useEffect(()=>{
      var targets = document.querySelectorAll('.section')
    targets.forEach(target => observer.observe(target))
    },[])
  return (
      <>
        <ScrollContext.Provider value={[isScrollEnable,setScrollEnable]}>
          <NavBar name={name}></NavBar>
          <div className='app'>
            <WelcomePage></WelcomePage>
            <Catalog></Catalog>
            <About></About>
            <Contact></Contact>
          </div>
        </ScrollContext.Provider>
        </>
  )
}

export default App
