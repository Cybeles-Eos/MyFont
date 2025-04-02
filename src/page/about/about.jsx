import Style from './about.module.css'
import aA from '../../assets/Aa.png'
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
function About(props){
   useEffect(()=>{
      document.querySelector("body").setAttribute("data-theme", "none");
   }, []);
   let about_texts = [
      {
         title: "With MyFont, you can:",
         texts: [
            "Switch between light and dark modes for a comfortable user experience.",
            "Pick from a variety of fonts to suit your creative needs.",
            "Customize colors for text to match your personal style.",
            "Write and preview your text in real-time with ease."
         ]
      },
      {
         title: "Please Note:",
         texts: [
            "Some fonts may display inconsistencies or appear in poor condition on certain devices.",
            "If you type excessively long text, the site might experience display issues. We're working to improve this in future versions.",
            "Fonts on MyFont are provided for personal use only and are free to download."
         ]
      }
   ];

   function Texts(props){
      return(
         <>
            <p className={Style.mTextStyl}>{props.title}</p>
            <ul className={Style.listcon}>
               {props.texts.map((text, i )=> {return <li key={i} className={Style.listtexts}>{text}</li>})}
            </ul>
         </>
      )
   }

   return(
      <>
         <div className={Style.main}>
            
            <div className={Style.tbtextcon}>
               <p className={Style.mTextStyl}>About MyFont.</p>
               <p className={Style.sTextStyl}>
                  Welcome to MyFont, your creative hub for exploring and 
                  customizing fonts in real time! This demonstration or 
                  also known as a beta version site showcases the potential 
                  of our platform, empowering designers, writers, and font 
                  enthusiasts to experiment with typography and bring ideas to life.
               </p>

               {about_texts.map((abt_txt, i) =>{
                  return <Texts key={i} title={abt_txt.title} texts={abt_txt.texts}/>
               })}

               <p className={Style.sTextStyl}> 
                  Our mission is to make font exploration and customization accessible to everyone. Dive into the possibilities, discover new fonts, and enjoy a seamless creative experience.
                  {Array.from({length: 2}, (_,i)=>(<br key={i}/>))}
                  Let your words speak louder with MyFont. Your creativity, your font, 
                  your style!
               </p>
            </div>
            <div className={Style.tbimgcon}>
               <img className={Style.Aa} id='s_gbstl_' src={aA} alt="" />
            </div>
           
         </div>

         <Footer />
      </>
   )
}

export default About