export default function PhotoGallery() {
  return (
    <div className="gallery-grid">
      <div className="gallery-item">
        <img
          src="/assets/generated/9940ebbe-a562-48aa-a17e-0660ed480cb4.jpeg"
          alt="Our beautiful moment together"
          className="gallery-image"
        />
      </div>
      <div className="gallery-item">
        <img
          src="/assets/generated/IMG_8731.jpeg"
          alt="Another cherished memory"
          className="gallery-image"
        />
      </div>
      <div className="gallery-item gallery-placeholder">
        <div className="placeholder-content">
          <span className="text-6xl mb-4">📷</span>
          <p className="text-rose-600 font-serif text-lg">
            Add a third photo
          </p>
        </div>
      </div>
    </div>
  );
}
