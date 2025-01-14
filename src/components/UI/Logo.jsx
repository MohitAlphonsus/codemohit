import styles from './UIstyles.module.css';

export default function Logo({ forSection }) {
	const stylesLogo = forSection === 'HERO' ? `${styles.logoHero}` : '';

	return (
		<p className={`${styles.logo} ${stylesLogo}`}>
			<span>{'<'}</span>
			<span>codemohit</span>
			<span className={`${styles.divide}`}>/</span>
			<span>{'>'}</span>
		</p>
	);
}
