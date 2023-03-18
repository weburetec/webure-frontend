import Image from "next/image";
import React from "react";
import Container from "../container";


export default function Askxpert(props) {  
  return (
    <section className="aboutus-section clearfix">
      <Container>
        <div className='text-center'>
            <h2 className='font-Lexend text-2xl'>Why choose WEBURE for your <br /><b className='text-purple-900 font-bold text-4xl'>DIGITAL TRANSFORMATION SERVICES</b></h2>
            <div>
                <image className='-mt-4' src="https://ik.imagekit.io/weburetech/websiteassets/Group_9164_kWHYn47DO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704374810" style={{display:'block', marginLeft:'auto', marginRight:'auto'}} alt="Choose Webure"/>
            </div>
            <p className="font-Lexend text-lg">Work With a Team of Industry Professionals</p>
            <p className="font-Lexend text-xl">Entrust your enterprise marketing management to our B2B marketing firm so you can focus on running your business. Our B2B marketing agency manages your B2C content marketing and online advertising campaigns from inception to completion to save time, money and resources. All you have to do is set your budget and expectations and our franchise marketing agency will handle the rest. Choose Thrive and reap the following benefits:</p>
        </div>
        <div className='flex flex-row gap-5'>
            <div className='basis-1/3'>
                <image className="https://ik.imagekit.io/weburetech/websiteassets/image_117_UuSZ5LW8Z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661704372390" sizes="(max-width: 87px) 100vw, 87px" alt="Choose Webure"/>
            </div>           
            <div className='basis-1/3 pt-10'>
                <p className="font-Lexend text-xl">We believe in demonstrating a strong commitment to sustainable, responsible, honest and transparent business practices. Our highly collaborative and innovative approach turns ideas into viable businesses, helping out clients achieve rich competitive edge and fluency</p>
                <div className='flex row-fluid'>
                    <div className='basis-1/3'>
                        <image src="https://ik.imagekit.io/weburetech/websiteassets/image_112_9tp03C-b2v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704815946" sizes="(max-width: 30px) 100vw, 30px" alt="Choose Webure" />                    
                    </div>
                    <div className='basis-1/3'>
                        <image src="https://ik.imagekit.io/weburetech/websiteassets/image_115_MsQlYFPoo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704815778" sizes="(max-width: 30px) 100vw, 30px" alt="Choose Webure" />                    
                    </div>
                    <div className='basis-1/3'>
                        <image src="https://ik.imagekit.io/weburetech/websiteassets/image_113_MegjUBytb3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704815726" sizes="(max-width: 30px) 100vw, 30px" alt="Choose Webure" />                    
                    </div>
                </div>
            </div>
            <div className='basis-1/3 pt-10'>
                <p className="font-Lexend text-xl">Our forward-thinking, practical approach turns decisions into actions whilst maintaining flexibility by actively responding to our clients’ variable needs. In addition, our cross-trained workforce embraces the change to deliver in a changing world.<br /><br /></p>
                <div className='flex row-fluid'>
                    <div className='basis-1/3'>
                        <image src="https://ik.imagekit.io/weburetech/websiteassets/image_114_SWEr6QWWmW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704815878" sizes="(max-width: 30px) 100vw, 30px" alt="Choose Webure" />                    
                    </div>
                    <div className='basis-1/3'>
                        <image src="https://ik.imagekit.io/weburetech/websiteassets/image_116_QMRzhqzx_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661704815785" sizes="(max-width: 30px) 100vw, 30px" alt="Choose Webure" />                    
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
    
  );
}