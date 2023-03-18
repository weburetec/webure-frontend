import Image from "next/image";
import React from "react";
import Container from "../container";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function CoreValues(props) {  
  return (
    <section className="bg-purple-900 bg-opacity-20 p-15 aboutus-section clearfix" style={{backgroundImage:'url("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', filter:"grayscale(.5)" , backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundColor:'purple', opacity:'70%'}}>
      <Container>
        <div>
        <div className="corefluid grid grid-flow-col gap-4 align-middle py-5">
            <div>
                <div className="bg-green-700 font-Lexend text-lg bg-opacity-80 row-start-1 p-10 pb-10">
                    <h3 className="font-semibold text-xl">Passionate</h3>
                    <p className='text-justify text-white'>We love what we do and often get lost in it. At times, it could be a bit messy but it&apos;s okay as long as we come up with something beautiful and we pretty much always do.</p>
                </div>
            </div>
            <div className="row-start-1 gap-5">
                <div className="bg-yellow-500 font-Lexend text-lg bg-opacity-80 row-start-1 p-10">
                    <h3 className="font-semibold text-xl">Innovative</h3>
                    <p className='text-justify text-white'>‘What next?’ The notion constantly nags us to come up with new ideas, build new things & make the web a better place to do business</p>                
                </div>
                <div className="bg-white font-Lexend text-lg bg-opacity-80 row-start-2 p-10 pb-15">
                    <h3 className="font-semibold text-xl">Curious</h3>
                    <p className='text-justify'>Constant learning is in the DNA of our company. We are always asking new questions (even if silly), always learning new things, & always hungry for more</p>                
                </div>
            </div>
            <div>
                <div className="bg-gray-700 font-Lexend text-lg bg-opacity-80 row-start-1 p-10 pb-10">
                    <h3 className="font-semibold text-xl">Team Players</h3>
                    <p className='text-justify text-white'>We believe Together Everyone Achieves More so working together to make jobs fun and individuals more productive keeps us alive on the work floor.</p>                
                </div>
            </div>
            <div>
                <div className="bg-pink-700 font-Lexend text-lg bg-opacity-80 row-start-1 p-10 pb-10">
                    <h3 className="font-semibold text-xl">Simplistic</h3>
                    <p className='text-justify text-white'>We experiment, we brainstorm (and often google too) to build simple solutions for complex problems. It’s an art, and over the years, we have mastered it</p>                
                </div>
            </div>
        </div>
        </div>
      </Container>
    </section>
  );
}