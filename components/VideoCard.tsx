"use client";
import Link from "next/link"

const VideoCard = ({
    id,
    title,
    thumbnail,
    userImg,
    username,
    createdAt,
    views,
    visibility,
    duration 
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
        <img
        src={thumbnail}
        alt="thumbnail"
        height={160}
        width={290}
        className="thumbnail"
        />
        <article>
            <div>
                <figure>
                    <img
                    src={userImg}
                    alt="avatar"
                    width={34}
                    height={34}
                    className="rounded-full aspect-square"
                    />
                    <figcaption>
                        <h3>{username}</h3>
                        <p>{visibility}</p>
                    </figcaption>
                </figure>
                <aside>
                    <img src="/assets/icons/eye.svg"
                    alt="views"
                    width={16}
                    height={16}/>
                    <span>{views}</span>
                </aside>
            </div>
            <h2>{title} - {" "} {createdAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}</h2>
        </article>
        <button onClick={() => {}} className="copy-btn">
            <img src="/assets/icons/link.svg"
            alt="copy"
            width={18}
            height={18}/>

        </button>
        {duration && (
            <div className="duration">
                {Math.ceil(duration /60)}min

            </div>
        )}
    </Link>
  )
}

export default VideoCard