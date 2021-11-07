import React, { FC } from "react"

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} <a href="https://mattcook.dev">Matt Cook</a></p>
    </footer>
  )
}

export default Footer
