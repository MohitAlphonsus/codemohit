import { Button, TextPrimary } from '../UI';
import styles from './Project.module.css';
import { SiGithub } from '../../constant/skills';

export default function ProjectCard({ ...project }) {
	const { title, desc, stacks, projectLink, snapshot } = project;

	return (
		<div className={styles.projectCard}>
			<div role="image" className={styles.projectSnapshot}>
				&nbsp;
			</div>
			<div className={styles.projectContent}>
				<p>{title}</p>
				<div className={styles.stack}>
					{stacks.map(stack => (
						<span key={stack}>{stack}</span>
					))}
				</div>
				<TextPrimary>{desc}</TextPrimary>
				<div className={styles.actions}>
					<Button>
						<SiGithub style={{ fontSize: '2rem' }} />
						<span>Github</span>
					</Button>
					<Button varient="primary">Visit Website &rarr;</Button>
				</div>
			</div>
		</div>
	);
}
