import { useEffect, useState } from "react"
function Catalog(){
    const productsStart = [{'img':'glasses_1.png','name':'Name','price':100},{'img':'glasses_2.png','name':'Name','price':100},{'img':'glasses_3.png','name':'Name','price':100}]
    let [products,setProducts] = useState(productsStart)
    const [visibleContent,setVisibleContent] = useState(3)
    const updateVisibleContent = ()=>{
        const width = window.innerWidth;
        let newVisibleContent = width < 978 ? 1 : width < 1350 ? 2 : 3;
        setVisibleContent(newVisibleContent)
        setProducts((prevProducts)=>{
            return productsStart.slice(0,newVisibleContent)
        })
        console.log(newVisibleContent)
    }
    function changeProductList(direction:number){
        setProducts((prevProducts)=>{
            if(prevProducts){
                const newProducst = [...prevProducts]
                let element = null
                if(direction === 1){
                    element = newProducst.pop()
                }else{
                    element = newProducst.shift()
                }
                if(element && direction === 1){
                    newProducst.unshift(element)
                }else if(element && direction === -1){
                    newProducst.push(element)
                }
                return newProducst
            }
            return prevProducts
        })
    }
    useEffect(()=>{
        window.addEventListener('resize',updateVisibleContent)
        const options = {
            rootMargin:'0px',
            threshold:0.9
            }
        const cardsWrapper = document.querySelectorAll('.card-wrapper')
        const section = document.querySelector('.catalog') as HTMLElement
        const callback:IntersectionObserverCallback = (entries,observe)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    const pathLine = document.querySelector('#line-bg') as SVGPathElement
                    const startOffset = pathLine.style.strokeDashoffset
                    if(startOffset != '0'){
                    const pathLength = pathLine?.getTotalLength()
                    pathLine.style.setProperty('--length',`${pathLength}`)
                    pathLine.style.strokeDasharray = `${pathLength}`
                    pathLine.style.strokeDashoffset = `${pathLength}`
                    pathLine.style.opacity = '1'
                    pathLine.classList.add('animate-stroke')
                    setTimeout(()=>{
                        pathLine.style.strokeDashoffset = '0'
                    },2000)
                    }
                    
                    cardsWrapper.forEach(card=>{
                        card.classList.add('fade-in-card')
                    })
                }
            })
        }
        
        const observer = new IntersectionObserver(callback,options)
        observer.observe(section)
    },[])
    return(
        <>
        <div id="Art of YOGLASSES" className="section catalog">
        <div className="section-bg">
            <svg preserveAspectRatio="none" height='100vh' viewBox="0 0 1442 719" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='line-bg' d="M-32 35.1953C177.071 2.05266 82.2971 668.925 401.147 693.314C719.412 717.658 622.707 85.9422 940.83 111.897C1201.38 133.154 1442 628.449 1442 628.449" stroke="#C4C4C4" stroke-width="68" stroke-linecap="round"/>
            </svg>
        </div>
            <h2 className="section-name"></h2>
            <div className="card-wrapper">
                <span onClick={() => changeProductList(-1)} className="arrow-left">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z" fill="black"/>
                    </svg>
                </span>
                    {products.map((product,index)=>{return(
            <div className="card" key={index}>
                <img src={product.img} alt="" />
                <div className="card-bottom">
                    <h3>{product.name}</h3>
                    <h3>{product.price}$</h3>
                </div>
            </div>
        )
    })}
                <span onClick={() => changeProductList(1)} className="arrow-right">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.775 20L0 18.225L8.225 10L0 1.775L1.775 0L11.775 10L1.775 20Z" fill="black"/>
                    </svg>
                </span>
            </div>
        </div>
        </>
    )
}

export default Catalog