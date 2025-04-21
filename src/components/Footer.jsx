import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white h-[40px] flex items-center justify-center  mt-auto">
      <span>
        ⭐ If you like it, please star the project on{' '}
        <a
          href="https://github.com/prateek168/getSol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          GitHub
        </a>
      </span>
    </footer>
  )
}

export default Footer
