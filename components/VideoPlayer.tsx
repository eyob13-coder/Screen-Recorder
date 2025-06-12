import { createIframeLink } from "@/lib/utils"

const VideoPlayer = ({videoId}: VideoPlayerProps) => {
  return (
    <div className="video-player">
        <iframe
        src={createIframeLink((videoId))}
        loading="lazy"
        title="Video Player"
        style={{border: 0, zIndex: 50}}
        allowFullScreen
        allow="accelerometer; gyroscope; autoplay; encryted-media; picture-in-picture"
        />
    </div>
  )
}

export default VideoPlayer