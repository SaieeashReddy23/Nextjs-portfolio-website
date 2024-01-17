import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import {
  LinkedInIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from './Icons'
import Logo from './Logo'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark  dark:bg-light underline-offset-4
                    absolute -bottom-0.5 left-0 
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', setIsOpen }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <button onClick={handleClick} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-light  dark:bg-dark underline-offset-4
                    absolute -bottom-0.5 left-0 
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </button>
  )
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 py-8  font-medium flex items-center justify-between dark:bg-dark dark:text-light md:px-8 -mb-1 ">
      <button
        className=" flex-col items-center justify-center  cursor-pointer hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`w-6 h-0.5 bg-dark  dark:bg-light  rounded-sm  transition-all duration-300 ease-out ${
            isOpen ? ' rotate-45 translate-y-1' : '-translate-y-0.5'
          } `}
        ></span>
        <span
          className={`w-6 h-0.5 bg-dark  dark:bg-light  my-0.5 rounded-sm  transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-1'
          } `}
        ></span>
        <span
          className={`w-6 h-0.5 bg-dark  dark:bg-light  rounded-sm  transition-all duration-300 ease-out ${
            isOpen ? ' -rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-3" />
          <CustomLink href="/about" title="About" className="mx-3" />
          <CustomLink href="/projects" title="Projects" className="mx-3" />
          <CustomLink href="/articles" title="Articles" className="ml-3" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-3 w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3 w-6 "
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3 w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3 w-6"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            className={`ml-3 flex items-center justify-center p-1 rounded-full ${
              mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'
            }  `}
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          >
            {mode === 'light' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw]  hidden flex-col items-center justify-between z-30  lg:flex  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
      rounded-lg p-32 bg-dark/90 dark:bg-light/75 backdrop-blur-md "
        >
          <nav className="flex flex-col items-center justify-between my-8 ">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mb-2 text-light dark:text-dark"
              setIsOpen={setIsOpen}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="my-2 text-light dark:text-dark"
              setIsOpen={setIsOpen}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="my-2 text-light dark:text-dark"
              setIsOpen={setIsOpen}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className="mt-2 text-light dark:text-dark"
              setIsOpen={setIsOpen}
            />
          </nav>
          <nav className="flex items-center justify-center gap-3">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 bg-light rounded-full dark:bg-dark "
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6  bg-light rounded-full dark:bg-dark "
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className=" w-6"
            >
              <DribbbleIcon />
            </motion.a>

            <button
              className={` flex items-center justify-center p-1 rounded-full ${
                mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'
              }  `}
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
              {mode === 'light' ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 z-2 -translate-x-1/2 ">
        <Logo />
      </div>
    </header>
  )
}
export default Navbar
