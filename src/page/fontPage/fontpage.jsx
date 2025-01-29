import Styles from './font.module.css'
import fImage from '../../assets/F.png'
import Fontbox from '../../components/fontbox/fontbox.jsx'
import { useState } from 'react';


import Footer from '../../components/footer/footer.jsx';

function Fontpage(props){
   let [toggle, setToggle] = useState(true);
   const popularFont = [
      {
         fontname: 'Grandstand',
         fontstyle: 'grandstandfont',
         numStyle: 1,
         fontCreator: 'UICreative',
         fontFile: '/FontFiles/PopularFontFiles/grandstand-1.zip'
      },
      {
         fontname: 'Haerins',
         fontstyle: 'Haerinsfont',
         numStyle: 1,
         fontCreator: 'Inksun™',
         fontFile: '/FontFiles/PopularFontFiles/Haerins-1.zip'
      },
      {
         fontname: 'Cheqa',
         fontstyle: 'cheqafont',
         numStyle: 1,
         fontCreator: '',
         fontFile: '/FontFiles/PopularFontFiles/cheqa-font-1.zip'
      },
      {
         fontname: 'Folkin',
         fontstyle: 'folkinfont',
         numStyle: 1,
         fontCreator: 'Inksun™',
         fontFile: '/FontFiles/PopularFontFiles/folkin-font.zip'
      },
      {
         fontname: 'Blize Queen',
         fontstyle: 'blizeQueen_font',
         numStyle: 1,
         fontCreator: '',
         fontFile: '/FontFiles/PopularFontFiles/BlizeQueen.zip'
      },
      {
         fontname: 'Cosity',
         fontstyle: 'cosity_font',
         numStyle: 1,
         fontCreator: '',
         fontFile: '/FontFiles/PopularFontFiles/cosity.zip'
      }
   ]
   const collectionFonts = [
      {
         fontname: 'Chilto',
         fontstyle: 'chiltofont',
         numStyle: 1,
         fontCreator: 'Novel',
         fontFile: '../../../public/FontFiles/Collections/chiltofont-1.zip'
      },
      {
         fontname: 'SourceSerif',
         fontstyle: 'sourceSerif_font',
         numStyle: 2,
         fontCreator: 'Frank Grießhammer',
         fontFile: '/FontFiles/Collections/SourceSerif.zip'
      },
      { 
         fontname: 'Musashi',
         fontstyle: 'Musashi_font',
         numStyle: 1,
         fontCreator: '',
         fontFile: '/FontFiles/Collections/Musashi.zip'
      },
      { 
         fontname: 'Luxenage',
         fontstyle: 'luxenage_font',
         numStyle: 1,
         fontCreator: 'Skillays STD',
         fontFile: '/FontFiles/Collections/luxenage.zip'
      },
      { 
         fontname: 'Balkor',
         fontstyle: 'balkor_font',
         numStyle: 1,
         fontCreator: '',
         fontFile: '/FontFiles/Collections/balkor.zip'
      }
   ]
   const popularFontsCon = () => {
      return popularFont.map(popFont => (
         <Fontbox 
            fontName={popFont.fontname}
            fontstyle={popFont.fontstyle}
            numStyle={popFont.numStyle}
            fontCreator={popFont.fontCreator}
            file={popFont.fontFile}
            key={popFont.fontname}
         />
      ));
   }
   const collectionFontsCon = () => {
      return collectionFonts.map(colFont => (
         <Fontbox 
            fontName={colFont.fontname}
            fontstyle={colFont.fontstyle}
            numStyle={colFont.numStyle}
            fontCreator={colFont.fontCreator}
            file={colFont.fontFile}
            key={colFont.fontname}
         />
      ));
   }

   let activeClass = `${Styles.pop_btn} ${Styles.btn_sty} ${Styles.active}`;
   let inactiveClass = `${Styles.col_btn} ${Styles.btn_sty}`;

   let [popClassName, setPopclassName] = useState(inactiveClass);
   let [colClassName, setColclassName] = useState(activeClass);
 
   let activeBtnPop = () =>{
      setToggle(false); 
      setPopclassName(activeClass);
      setColclassName(inactiveClass);
   }

   let activeBtnCol = () =>{
      setToggle(true);
      setColclassName(activeClass);
      setPopclassName(inactiveClass);
   }

   return(
      <>
         <div className={Styles.main}>
            <section className={Styles.upper_page}>
               <div className={Styles.up_pg_fdiv}> 
                  <h1>Welcome to Myfont</h1>
                  <p>
                     Discover a world of creativity with our cool and 
                     rare font collection. Explore styles that fit every 
                     mood, project, and personality. Crafted with precision 
                     and passion for designers like you.
                  </p>

                  <div className={Styles.button_con}>
                     <button onClick={() =>(activeBtnCol())} className={colClassName}>Collections</button>
                     <button onClick={() =>(activeBtnPop())} className={popClassName}>Popular Fonts</button>
                  </div>
               </div>
               <div className={Styles.bt_pg_fdiv}>
                  <img className={Styles.image_f} id='s_gbstl_' src={fImage} alt="" />
               </div>
            </section>
            <section className={Styles.popl_font_con}>

            {toggle ? collectionFontsCon() : popularFontsCon()}
            
            </section>
         </div>
            
         <Footer />
      </>
   )
}
export default Fontpage