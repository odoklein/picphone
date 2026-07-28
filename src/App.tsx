import { useEffect, useState, type ComponentType } from 'react'
import Home from './Home'
import Ehpad from './Ehpad'
import Fonctionnalites from './Fonctionnalites'

/** Minimal hash router. A hash starting with `#/` selects a page; every other
 *  hash (section anchors like `#ecrans`, or empty) renders the home page.
 *  Sub-pages own their own scroll reset, so a second `#anchor` is never needed. */
const PAGES: Record<string, ComponentType> = {
  '#/ehpad': Ehpad,
  '#/fonctionnalites': Fonctionnalites,
}

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
  const match = Object.keys(PAGES).find((path) => route.startsWith(path))
  const Page = match ? PAGES[match] : null

  // On home, resolve the scroll target: a section anchor scrolls into view;
  // the root (`#/` or empty) returns to the top. Pages handle their own reset.
  useEffect(() => {
    if (Page) return
    const id = route.startsWith('#') && !route.startsWith('#/') ? route.slice(1) : ''
    if (!id) { window.scrollTo({ top: 0 }); return }
    const el = document.getElementById(id)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
  }, [route, Page])

  return Page ? <Page /> : <Home />
}
