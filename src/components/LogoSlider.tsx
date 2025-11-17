import logoMarjosports from "@/assets/logo-marjosports.png";
import logoWaTechnology from "@/assets/logo-wa-technology.png";
import logoProntopaga from "@/assets/logo-prontopaga.png";
import logoAware from "@/assets/logo-aware.png";
import logoWolffSports from "@/assets/logo-wolff-sports.png";
import logoLola from "@/assets/logo-lola.png";
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
    logoLola,
    logoCactus,
    logoBet7k,
    logoCometa,
  ];

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "200px", height: "100px" }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "200px", height: "100px" }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
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
