import styles from './UIstyles.module.css';

export default function SectionHeading({ children, className }) {
	const classes = `${styles.sectionHeading} ${className}`;

	return (
		<p className={classes}>
			<span>{children}</span>
		</p>
	);
}
