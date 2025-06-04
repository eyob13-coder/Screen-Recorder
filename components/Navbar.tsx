import Link from "next/link"
const user = {};
const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
        <img 
        src="/assets/icons/logo.svg"
        height={32}
        width={32}/>
        <h1>SnapCast</h1>
        </Link>

        {user && (
          <figure>
            <button>
              <img
              src="/assets/images/dummy.jpg"
              alt="User"
              height={36}
              width={36}
              className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <img
              src="/assets/icons/logout.svg"
              height={24}
              width={24}
              className="rotate-180"
              />
              

            </button>
            </figure>
        )}
      </nav>
      
    </header>
  )
}

export default Navbar