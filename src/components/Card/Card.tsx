import styles from "./Card.module.css";

export interface CardProps {
  /** Card title */
  title: string;
  /** Card content */
  content: string;
  backgroundColor?: string;
}

const Card = ({ title, content, backgroundColor }: CardProps) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <h2 className={styles.cardHeader}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

Card.defaultProps = {
  title: "Card Title",
  content: "Card Content",
  backgroundColor: "#f0f0f0",
};

export default Card;
