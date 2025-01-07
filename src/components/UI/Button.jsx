import styles from './UIstyles.module.css';

export default function Button({ children, varient }) {
	const varientClass =
		varient === 'primary' ? styles.btnPrimary : styles.btnSecondary;

	return (
		<button className={`${styles.btn} ${varientClass}`}>{children}</button>
	);
}
