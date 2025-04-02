import Style from './contact.module.css'
import cC from '../../assets/Cc.png'
import { useEffect } from 'react'

import location from '../../assets/map-pin-line.svg'
import phone from '../../assets/phone-line.svg'
import mail from '../../assets/mail-line.svg'

import Footer from '../../components/footer/footer'

function Contact(props){
   useEffect(()=>{
      document.querySelector("body").setAttribute("data-theme", "none");
   }, []);

   const infosPics = [
      {
         text: 'Virginia Summerville, Rizal',
         image: location
      },
      {
         text: '+09 125 240 151',
         image: phone
      },
      {
         text: 'cruzdawn58@gmail.com',
         image: mail
      }
   ];

   return(
      <> 
         <div className={Style.main}>
            <section className={Style.texts_con}>
               <h1>Contact Information</h1>

               <p>
                  We're here to help and answer any questions you might have. 
                  Whether you have feedback, need assistance, or just want to 
                  say hello, we'd love to hear from you!
               </p>

               {infosPics.map((infos, i)=>(
                  <div className={Style.infobox} key={i}>
                     <img className={Style.info_image} src={infos.image} alt="" />
                     <p>{infos.text}</p>
                  </div>
               ))}
               
            </section>
            <section className={Style.image_con}>
               <img className={Style.cC} id='s_gbstl_' src={cC} alt="" />
            </section>

         </div>

         <Footer />
      </>
   );
}

export default Contact