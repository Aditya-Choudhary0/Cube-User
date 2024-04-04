import { useEffect, useState } from "react";

interface ImagesDetails {
  id: string;
  height: number;
  width: number;
  url: string;
}
const Images = ({ userId }: { userId: number | null }) => {
  const [images, setImages] = useState<ImagesDetails[] | null>(null);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const fetchImages = async () => {
    setShouldUpdate(false);
    const data = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20"
    );
    const res: ImagesDetails[] = await data.json();
    setImages(res.splice(0, 9));
  };

  useEffect(() => {
  
    if (shouldUpdate) {
      fetchImages();

      setShouldUpdate(false);
    }
  }, [shouldUpdate]);


  useEffect(() => {
    const timer = setInterval(() => {
      setShouldUpdate(true);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShouldUpdate(true);
  }, [userId]);

  return (
    <>
      {images &&
        images.map((image) => (
          <img key={image.id} src={image.url} alt={`Images`} />
        ))}
    </>
  );
};

export default Images;
