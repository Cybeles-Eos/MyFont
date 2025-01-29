import Styles from './home.module.css'
import darkSwitch from '../../assets/moon-clear-fill.svg'
import lightSwitch from '../../assets/sun-fill.svg'
import closeDown from '../../assets/arrow-down-wide-fill.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home(props){
   

   let [mainStyle, setMainStyle] = useState(`${Styles.home_main}`);
   let [toggleSwitch, setToggleSwitch] = useState(true);
   let [switchPic, setSwitchPic] = useState(darkSwitch);


   //For Dark Mode and Light Mode
   const drlmode = () =>{
      setToggleSwitch(!toggleSwitch);
      setSwitchPic(toggleSwitch ? lightSwitch : darkSwitch)
      setMainStyle(toggleSwitch ? `${Styles.home_main} ${Styles.darkmode}` : `${Styles.home_main}`);
      document.querySelector("body").setAttribute("data-theme", toggleSwitch ? "dark" : "none");
   }

   //Close and Open Editor tool
   let [toggleEditor, setToggleEditor]= useState(true);
   const closeEditorMainFunc = () => {   
      setToggleEditor(!toggleEditor);
      let toggleValue =  toggleEditor ? "con-box-close" : "con-box-open";
      document.querySelector("#editCon").setAttribute("data-closeEditor", toggleValue);
   }

   //Change Font Color 
   let [color, setColor] = useState("#1C1C1A");
   function changeFontColor(event){
      setColor(event.target.value);
   }

   //Change Title Text
   let defaultText = 'My Font Style!'
   let [font_text, setFont_text] = useState(defaultText);
   function changeText(event){
      setFont_text(event.target.value != '' ? event.target.value : defaultText);
   }


   //For Font Style 
   let [myFont, setFont] = useState(null);
   let homeFonts = [
      { name: 'Inter', value: '--inter' },
      { name: 'Grandstand', value: '--grandstand' },
      { name: 'Haerins', value: '--haerins' },
      { name: 'Cheqa', value: '--cheqa' },
      { name: 'Folkin', value: '--folkin' },
      { name: 'Chilto', value: '--chilto' },
      { name: 'SourceSerif', value: '--sourceSerif' },
      { name: 'Musashi', value: '--Musashi' },
      { name: 'Luxenage', value: '--luxenage' },
      { name: 'Blize Queen', value: '--BlizeQueen' },
      { name: 'Balkor', value: '--balkor' },
      { name: 'Cosity', value: '--Cosity' }

   ];
   let [font_family, setFont_family] = useState('Inter');
   function changeFont(e){
      let cur =  e.target.textContent;
      setFont_family(cur);
      homeFonts.filter((font) => font.name == cur && setFont(font.value));
   }

   let [toggle_lists, setToggle_lists] = useState(true);
   function openFontLists(){
      setToggle_lists(!toggle_lists);
      let tug = toggle_lists ? "pick" : "none";
      document.querySelector('#fonts').setAttribute("data-fontList", tug);
      document.querySelector('#rot').setAttribute("data-sltImg", toggle_lists ? "upd" : "none");
   }

   return(
      <>
         <main className={mainStyle}>
            <section className={Styles.font_container}>
            
               <h1 style={{color:`${color}`, fontFamily: `var(${myFont})`}} className={Styles.font_title}>{font_text}</h1>
               <p className={Styles.font_text}>
                  Welcome to Myfont, your hub for creative typography. Pick your favorite font, customize your text, and explore colors like {color} to bring your style to life. Let your creativity shine!
               </p>
               <Link className={Styles.btnTo_fonts} to='/fontpage' reloadDocument>Go to Fonts</Link>
            </section>   





            {/* Editor tools Container */}
            <div className={Styles.font_edit_con} id='editCon'>
               {/* Close Button */}
               <button onClick={closeEditorMainFunc} className={Styles.close_editor_btn}>
                  <img className={Styles.close_editor_img} src={closeDown} alt="" />
               </button>
               
               {/* Main editor   |   Top Edit tools*/}
               <div className={Styles.con_selector_top}>
                  <div className={Styles.selector_box}>
                     <span className={Styles.pick_font_label}>Pick Font</span>
                     
                     <div onClick={() => openFontLists()} id='non' className={Styles.select_con}>
                        <div className={Styles.font_lists} id='fonts'>
                           {homeFonts.map((font, i) => { 
                              return <p onClick={(e)=> changeFont(e)} key={i} className={Styles.select_option_val}>{font.name}</p> 
                           })}
                        </div>
                        <output>{font_family}</output>
                     </div>
                     <img onClick={() => openFontLists()} id='rot' className={Styles.option_down} src={closeDown} alt="" />
                  </div>
                  <div onClick={() => drlmode()} className={Styles.switch_con}>
                     <img className={Styles.light_switch} id='#s_gbstl_' src={switchPic} alt="" />
                  </div>
               </div>
               {/* Bot Edit tools */}
               <div className={Styles.con_selector_bottom}>
                  <div className={Styles.text_input_con}>
                     <input onChange={changeText} type="text" className={Styles.text_input}/>
                  </div>
                  <input onChange={changeFontColor} value={color} type="color" className={Styles.color_picker}/>
               </div>
            </div>
         </main>
      </>
   )
}

export default Home