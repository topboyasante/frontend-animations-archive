import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function LandingPage1() {
    function HeroAnimations(){
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".title",{duration:3, opacity:'100%',stagger:0.05});
    }

    useEffect(()=>{
        HeroAnimations()
    },[])
  return (
    <main className='w-full h-full px-3 py-5'>
        <section className='max-w-[1600px] mx-auto h-full'>
            <section className='flex flex-col justify-center h-full lg:h-screen gap-5'>
                <section className='flex flex-col lg:flex-row gap-5'>
                    <p className='text-cc uppercase text-3xl lg:text-5xl tracking-wide'>
                        <span className="opacity-0 title">a</span>
                        <span className="opacity-0 title">r</span>
                        <span className="opacity-0 title">t</span>
                        <span className="opacity-0 title">.</span>
                    </p>
                    <p className='text-cc uppercase text-3xl lg:text-5xl tracking-wide'>
                        <span className="opacity-0 title">i</span>
                        <span className="opacity-0 title">t'</span>
                        <span className="opacity-0 title">s</span>
                    </p>
                    <p className='text-cc uppercase text-3xl lg:text-5xl tracking-wide'>
                        <span className="opacity-0 title">e</span>
                        <span className="opacity-0 title">v</span>
                        <span className="opacity-0 title">e</span>
                        <span className="opacity-0 title">r</span>
                        <span className="opacity-0 title">y</span>
                        <span className="opacity-0 title">t</span>
                        <span className="opacity-0 title">h</span>
                        <span className="opacity-0 title">i</span>
                        <span className="opacity-0 title">n</span>
                        <span className="opacity-0 title">g</span>
                        <span className="opacity-0 title">.</span>
                    </p>
                </section>
                <img src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2631&q=80" 
                alt="img" className='lg:h-[600px] w-full'/>
                <p className='lg:text-xl text-cc tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui quod facere beatae totam, 
                   possimus, eveniet temporibus architecto, optio adipisci sit! Adipisci modi eum voluptates. Non perspiciatis nobis labore temporibus!
                </p>
            </section>
            <section className='flex flex-col lg:flex-row items-center justify-between'>
                <img 
                src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" 
                alt="imgg" className='w-full lg:w-[50%]'
                />
                <p className='lg:w-[40%] text-cc text-xl tracking-wider'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas facere odio harum cum blanditiis molestias voluptate sint iste at id ullam deserunt non magni adipisci itaque doloribus. 
                    Ab minus cupiditate voluptatibus eaque iste. Deserunt, sapiente, id vel possimus inventore quas et nulla impedit, 
                    repudiandae autem totam hic. Atque, itaque.
                </p>
            </section>
        </section>
    </main>
  )
}

export default LandingPage1