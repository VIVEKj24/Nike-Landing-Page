import { footerLogo } from "../../assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
    <div className="flex flex-col items-start">
      <a href="/">
        <img src={footerLogo} width={150} height={46} alt="" /></a>
    </div>
      </div>
    </footer>
  )
}

export default Footer