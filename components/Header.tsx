import { ICONS } from "@/constants"
import Link from "next/link"
import DropdownList from "./DropdownList"
import RecordScreen from "./RecordScreen"

const Header = ({ subHeader, title, userImg}:SharedHeaderProps) => {
  return (
    <header className="header">
        <section className="header-container">
            <div className="details">
              {userImg && (
                <img src={userImg}
                alt="user"
                height={66}
                width={66}
                className="rounded-full"/>
              )}
              <article>
                <p>{subHeader}</p>
                <h1>{title}</h1>
              </article>
            </div>
            <aside>
                <Link href="/upload">
                <img
                src="/assets/icons/upload.svg"
                alt="upload"
                width={16}
                height={16}/>
                <span>Upload a video</span>
                </Link>
                <RecordScreen/>
            </aside>
        </section>
        <section className="search-filter">
            <div className="search">
                <input type="text"
                placeholder="Search for videos,tags,folders ...."
                 />
                 <img
                 src="/assets/icons/search.svg"
                 alt="Search"
                 width={16}
                 height={16}/>
         </div>
         <DropdownList/>
        </section>
        </header>
  )
}

export default Header