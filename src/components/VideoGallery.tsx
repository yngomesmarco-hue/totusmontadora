import { useLanguage } from "@/contexts/LanguageContext";

const VideoGallery = () => {
  const { t } = useLanguage();
  
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                {t('videoGallery.subtitle')}
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
