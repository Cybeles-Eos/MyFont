import Style from './fontbox.module.css'
import downloadImage from '../../assets/download-cloud-line.svg'

function Fontbox(props){
   const downloadThis = (source, name)=>{
      const a = document.createElement("a");
      a.href = source;
      a.setAttribute("download", name || "font.zip");
      a.style.display = "none"; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // const a = document.createElement('a')
      // a.href = source
      // a.download = name
      // document.body.appendChild(a)
      // a.click()
      // document.body.removeChild(a)
   }

   return(
      <div className={Style.font_box}>
         <div className={Style.font_vis}>
            <input className={Style[props.fontstyle]} type="text" placeholder={props.fontName}/>
         </div>
         <div className={Style.info}>
            <div className={Style.info_txts}>
               <div>
                  <p className={Style.font_name}>{props.fontName}</p>
                  <p className={Style.num_style}>{props.numStyle}style</p>
               </div>
               <p className={Style.font_creator}>{props.fontCreator == "" ? "Unknown" : props.fontCreator}</p>
            </div>
            <div className={Style.dl_con}>
               <button onClick={() => {downloadThis(props.file, props.fontName)}} className={Style.btn_dl}>
                  <img src={downloadImage} id='s_gbstl_' alt="" />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Fontbox
