import styles from './UIstyles.module.css';

export default function SectionHeading({ children }) {
	return (
		<p className={styles.sectionHeading}>
			<span>{children}</span>
		</p>
	);
}
