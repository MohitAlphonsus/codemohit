import styles from './UIstyles.module.css';

export default function Button({
	children,
	varient,
	asLink,
	linkHref,
	target,
}) {
	const varientClass =
		varient === 'primary' ? styles.btnPrimary : styles.btnSecondary;
	if (asLink) {
		return (
			<a
				href={linkHref}
				className={`${styles.btn} ${varientClass}`}
				target={target}
			>
				{children}
			</a>
		);
	}
	return (
		<button className={`${styles.btn} ${varientClass}`}>{children}</button>
	);
}
