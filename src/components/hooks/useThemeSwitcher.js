import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const userPref = window.localStorage.getItem('theme')
    const mediaQuery = window.matchMedia(preferDarkQuery)

    const handleChange = () => {
      console.log('handle change method called')
      console.log(userPref)
      console.log(mediaQuery)

      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light'

        console.log(check)

        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'

        console.log(check)

        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === '') {
      return
    }
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [mode])

  return [mode, setMode]
}
export default useThemeSwitcher
