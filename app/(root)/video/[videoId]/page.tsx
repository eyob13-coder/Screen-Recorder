import VideoDetailHeader from "@/components/VideoDetailHeader";
import VideoPlayer from "@/components/VideoPlayer";
import VideoInfo from "@/components/VideoInfo";
import { getVideoById, getTranscript } from "@/lib/actions/video";
import { redirect } from "next/navigation";

const page = async({params}: Params) => {
  const {videoId} = await params;

  const { user, video} = await getVideoById(videoId);

  if(!video) redirect('/404');


  let transcript = "";
  try {
    transcript = await getTranscript(video.videoId);
  } catch (error) {
    console.log("No transcript available for this video");
  }

  const videoInfo = {
    transcript: transcript,
    title: video.title,
    createdAt: video.createdAt,
    description: video.description,
    videoId: video.videoId,
    videoUrl: video.videoUrl
  };

  return (
    <main className="wrapper page">
      <VideoDetailHeader {...video} userImg={user?.image} username={user?.name} ownerId={video.userId} />

      <section className="video-details">
        <div className="content">
           <VideoPlayer videoId = {video.videoId}/>
        </div>
        <VideoInfo {...videoInfo} />
      </section>
       
    </main>
  )
}

export default page