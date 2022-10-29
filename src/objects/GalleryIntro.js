import "./GalleryIntro.css";

const GalleryIntro = ({ position = 0, isSmall, onClick }) => (
  <div
    className="galleryIntro"
    style={{
      left: `${50 + position}%`,
      transform: isSmall
        ? "translateX(-50%) scale(0.3) translateY(25%)"
        : "translateX(-50%)",
    }}
    onClick={onClick}
  >
    <h4>
      The Time Traveler’s
      <br />
      Gallery of Memories
    </h4>
    <p>
      The artwork of an unknown artist on display in this gallery depicts a
      series of moments in a remarkable and beautiful relationship of two
      individuals.
    </p>
    <p>
      On each painting, a medium of drying oil was used as the binder. This has
      been the most common technique for artistic painting on canvas for several
      centuries, spreading from Europe to the rest of the world.
    </p>
    <p>
      The method of radiocarbon dating was used to determine the age of the
      paintings. Even though based on the artistic style it was established that
      all the artwork is from the same artist, the age of the individual pieces
      spans across multiple centuries.
    </p>
    <p>
      Even more interestingly, some pieces show radiocarbon levels which
      indicate that the painting is from the future, which, according to the
      scientific consensus on the topic of time travel, is considered
      impossible.
    </p>
    <p>Yet, here they are.</p>
  </div>
);

export default GalleryIntro;
