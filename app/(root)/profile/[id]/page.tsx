import EmptyState from "@/components/EmptyState";
import SharedHeader from "@/components/SharedHeader";
import VideoCard from "@/components/VideoCard";
import Pagination from "@/components/Pagination";
import { getAllVideosByUser } from "@/lib/actions/video";
import { redirect } from "next/navigation";

const page = async({params, searchParams}: ParamsWithSearch) => {
  const {id} =await params;

  const {query, filter, page} = await searchParams;

  const { user, videos, pagination} = await getAllVideosByUser(id, query, filter, Number(page) || 1);

  if(!user) redirect('/404');
  return (
    <div className="wrapper page">
    <SharedHeader subHeader = {user?.email}
     title= {user?.name}
    userImg={user?.image ?? ''}/>

{videos?.length > 0 ?
        (
          <>
            <section className="video-grid">
                {videos.map(({video, user}) => (
                   <VideoCard 
                   key={video.id}
                    { ... video}
                    thumbnail={video.thumbnailUrl}
                    userImg={user?.image || ''}
                    username={user?.name ||'Guest'}
                    />
                ))}
              </section>
              
              <Pagination 
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPage}
                queryString={query}
                filterString={filter}
                pathname={`/profile/${id}`}
              />
          </>
        ):(
          <EmptyState icon= "/assets/icons/video.svg" title ="No Videos Available Yet" description="Videos will show up once you upload them"/>
        )}
      
    </div>
  )
}

export default page