import styles from './UIstyles.module.css';

export default function Logo() {
	return (
		<p className={styles.logo}>
			<span>{'<'}</span>
			<span>codemohit</span>
			<span className={`${styles.divide}`}>/</span>
			<span>{'>'}</span>
		</p>
	);
}
