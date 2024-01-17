import Link from 'next/link'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden md:absolute md:top-0 md:right-8 xs:right-0 md:bottom-auto md:left-auto">
      <div className="w-48 h-auto flex items-center justify-center relative dark:text-light md:w-24">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light " />
        <Link
          href="/"
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center capitalize bg-dark text-light border
           border-solid shadow-md border-dark rounded-full w-20 h-20  font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light dark:border-light hover:dark:bg-dark hover:dark:text-light md:w-12 md:h-12 md:text-[10px] "
        >
          Hire me
        </Link>
      </div>
    </div>
  )
}
export default HireMe
