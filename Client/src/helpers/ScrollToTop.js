import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


//Scrolls React Route items to top when swapping routes
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}