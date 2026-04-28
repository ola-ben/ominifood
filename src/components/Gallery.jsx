import { galleryImages } from "../data/site.js";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {galleryImages.map((img) => (
        <figure
          key={img.src}
          className="group aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </figure>
      ))}
    </div>
  );
}
