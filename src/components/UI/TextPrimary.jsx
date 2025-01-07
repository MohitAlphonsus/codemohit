import styles from './UIstyles.module.css';
export default function TextPrimary({ children }) {
	return <p className={styles.textPrimary}>{children}</p>;
}
