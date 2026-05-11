import logoMarjosports from "@/assets/logo-marjosports.png";
import logoWaTechnology from "@/assets/logo-wa-technology.png";
import logoProntopaga from "@/assets/logo-prontopaga.png";
import logoAware from "@/assets/logo-aware.png";
import logoWolffSports from "@/assets/logo-wolff-sports.png";
import logoCactus from "@/assets/logo-cactus.png";
import logoBet7k from "@/assets/logo-bet7k.png";
import logoCometa from "@/assets/logo-cometa.png";

const LogoSlider = () => {
  const logos = [
    logoMarjosports,
    logoWaTechnology,
    logoProntopaga,
    logoAware,
    logoWolffSports,
    logoCactus,
    logoBet7k,
    logoCometa,
  ];

  return (
    <section className="bg-white py-5 md:py-8 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 mx-5 md:mx-8 flex items-center justify-center w-[150px] h-[72px] md:w-[200px] md:h-[100px]"
            >
              <img
                src={logo}
                alt={`Logo ${index % logos.length + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
