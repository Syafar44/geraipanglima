/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const data = [
    {
      imageLink:
        "gallery/photo_2024-09-19_16-20-46.jpg",
    },
    {
      imageLink:
        "gallery/photo_2024-09-19_16-20-29.jpg",
    },
    {
      imageLink:
        "gallery/photo_2024-09-19_16-20-15.jpg",
    },
    {
      imageLink:
        "gallery/photo_2024-09-19_16-20-26.jpg",
    },
    {
      imageLink:
        "gallery/_DSC6935_1_1.jpg",
    },
    {
      imageLink:
        "gallery/_DSC6938_1_1.jpg",
    },
    {
      imageLink:
        "gallery/_DSC7186.jpg",
    },
    {
      imageLink:
        "gallery/_DSC9707.jpg",
    },
    {
      imageLink:
        "gallery/_DSC9898.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="h-[20rem] w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
