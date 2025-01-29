import Style from './footer.module.css'
import lightLogo from '../../assets/myfont_logo.png'
import { Link } from 'react-router-dom'

function Footer(){

   return(
      <>
         <div className={Style.foo} id='main'>
            <section className={Style.info}>
               <div className={Style.imgcon}>
                  <img onClick={() => location.reload()} src={lightLogo} alt="" className={Style.logo}/>
               </div>
               <div>
                  <p className={Style.text}>
                     Have questions or ideas? We'd love to hear from you! Reach out at 
                     <span style={{color: "var(--sblue)"}}> My</span>Font@gmail.com. Let's work your project together!
                  </p>
               </div>
               <div className={Style.shrinksize}>
                  <ul className={Style.list}>
                  <li><Link to='/' reloadDocument>Home</Link></li>
                  <li><Link to='/fontpage' reloadDocument>Fonts</Link></li>
                  <li><Link to='/about' reloadDocument>About</Link></li>
                  <li><Link to='/contact' reloadDocument>Contact</Link></li>
                  </ul>
               </div>
            </section>
            <hr />
            <p>© 2024 <span style={{color: "var(--sblue)"}}>My</span>Font . All rights reserved.</p>
         </div>
      </>
   )
}

export default Footer