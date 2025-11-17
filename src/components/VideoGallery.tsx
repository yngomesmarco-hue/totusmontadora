const VideoGallery = () => {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  return (
    <section className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden animate-fade-in hover-scale" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <video
                controls
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
