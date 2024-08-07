import { Link } from "react-router-dom";

const GalleryListLaunching = ({ data }) => {
  return (
    <div className="gallery-list mt-10 px-10">
      {data?.map((gallery) => (
        <Link
          to={`/galerie/launching/${gallery.id}`}
          className="gallery-link ripple"
          key={gallery.id}
        >
          <div key={gallery.id} className="gallery-item">
            <img src={gallery.mainImage} alt={gallery.title} />
            <h3 className="benchnine">{gallery.GaleryTitle}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryListLaunching;
