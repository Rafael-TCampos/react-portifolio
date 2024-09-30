import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";

const ProjectCard = ({ project: { title, imageSrc, description, demo } }) => {
  return (
    <div className={styles.container} >
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.links}>
          <a className={styles.links} href={demo}>
            Behance <img src={getImageUrl("vetor/Vector.png")} alt="imagem icone" />
          </a>
          
        </div>
      </div>

      <img
        src={getImageUrl(imageSrc)}
        alt={`Image ${title}`}
        className={styles.image}
      />
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};
