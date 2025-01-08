import { SectionHeading } from '../UI';
import styles from './Skills.module.css';
import { SKILLS } from '../../constant/skills';
import Skill from './Skill';

export default function Skills() {
	return (
		<div className="container">
			<section className={styles.skills}>
				<SectionHeading className="mg-bt-xl">Skills</SectionHeading>
				<div className={styles.skillContainer}>
					<div className={styles.skillGroup}>
						{SKILLS.map(skill => (
							<Skill key={skill.id} {...skill} />
						))}
					</div>
					<div className={styles.skillGroup}>
						{SKILLS.map(skill => (
							<Skill key={skill.id} {...skill} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
