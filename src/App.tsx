import './App.css'
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import Catalog from './components/Catalog'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect, useState } from 'react'


function App() {
  const[name,setName] = useState('YOGLASSES')
  useEffect(()=>{
    
    const options = {
        rootMargin:'0px',
        threshold:0.1
        } 
    
    const callback:IntersectionObserverCallback = function(entries, observer){
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
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
                console.log(entry.target.id)
                setTimeout(()=>{
                  navBar.classList.remove('fade-in')
                },1000)
              }
            }
          })
      };
    var observer = new IntersectionObserver(callback,options)
    var targets = document.querySelectorAll('.section')
    targets.forEach(target => observer.observe(target))
  },[])
  return (
   <>
      <NavBar name={name}></NavBar>
      <div className='app'>
        <WelcomePage></WelcomePage>
        <Catalog></Catalog>
        <About></About>
        <Contact></Contact>
      </div>
   </>
  )
}

export default App
