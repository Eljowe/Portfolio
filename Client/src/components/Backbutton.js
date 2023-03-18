import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'


const Backbutton = () => {
    return(
        <div className='backbuttondiv'>
            <Link onClick={() => {setTimeout(() => {scroller.scrollTo('projects2', { smooth: false })}, 100)}} to="/" className='backbutton'>Back</Link>
        </div>
    )
}

export default Backbutton