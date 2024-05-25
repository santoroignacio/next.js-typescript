import Link from "next/link"


const MenuBar = () => {
    return (
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href={'/'}>Inicio</Link>
          <Link href={'/registro'}>Registro</Link>
        </nav>
      </header>
    )
  }
  
  export default MenuBar
  