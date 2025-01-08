import styles from './Skills.module.css';

export default function Skill({ ...skill }) {
	const { icon: Icon, name } = skill;

	return (
		<div className={styles.skill}>
			<Icon className={styles.skillIcon} />
			<span>{name}</span>
		</div>
	);
}
