import { Link } from 'react-router-dom'
import Styles from './nopage.module.css'
function NoPage(){
   return(
      <>
         <div className={Styles.nopage_con}>
            <h1>
               404
            </h1>
            <Link className={Styles.btn} to='/' reloadDocument>Home</Link>
         </div>
      </>
   )
}

export default NoPage