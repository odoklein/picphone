import { useEffect, useState } from 'react'
import Home from './Home'
import Ehpad from './Ehpad'

/** Minimal hash router. `#/ehpad` renders the establishments page; every other
 *  hash (section anchors like `#experiences`, or empty) renders the home page. */
function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export default function App() {
  const route = useRoute()
  const isEhpad = route.startsWith('#/ehpad')

  // On home, resolve the scroll target: a section anchor scrolls into view;
  // the root (`#/` or empty) returns to the top. Ehpad handles its own reset.
  useEffect(() => {
    if (isEhpad) return
    const id = route.startsWith('#') && !route.startsWith('#/') ? route.slice(1) : ''
    if (!id) { window.scrollTo({ top: 0 }); return }
    const el = document.getElementById(id)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
  }, [route, isEhpad])

  return isEhpad ? <Ehpad /> : <Home />
}
