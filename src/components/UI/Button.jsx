import styles from './UIstyles.module.css';

export default function Button({ children, varient, asLink, linkHref }) {
	const varientClass =
		varient === 'primary' ? styles.btnPrimary : styles.btnSecondary;
	if (asLink) {
		return (
			<a
				href={linkHref}
				className={`${styles.btn} ${varientClass}`}
				target="_blank"
			>
				{children}
			</a>
		);
	}
	return (
		<button className={`${styles.btn} ${varientClass}`}>{children}</button>
	);
}
