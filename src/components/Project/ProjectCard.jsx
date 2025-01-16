import { Button, TextPrimary } from '../UI';
import styles from './Project.module.css';
import { SiGithub } from '../../constant/skills';

export default function ProjectCard({ ...project }) {
	const { title, desc, stacks, projectLink, githubLink, snapshot } = project;
	const snapshotStyle = {
		backgroundImage: `url(${snapshot})`,
	};

	return (
		<div className={styles.projectCard}>
			<div
				role="image"
				className={styles.projectSnapshot}
				style={snapshotStyle}
			>
				&nbsp;
			</div>
			<div className={styles.projectContent}>
				<p className={styles.projectTitle}>{title}</p>
				<div className={styles.stack}>
					{stacks.map(stack => (
						<span key={stack}>{stack}</span>
					))}
				</div>
				<TextPrimary>{desc}</TextPrimary>
				<div className={styles.actions}>
					<Button linkHref={githubLink} target="_blank" asLink>
						<SiGithub style={{ fontSize: '2rem' }} />
						<span>Github</span>
					</Button>
					<Button
						varient="primary"
						linkHref={projectLink}
						target="_blank"
						asLink
					>
						Visit Website &rarr;
					</Button>
				</div>
			</div>
		</div>
	);
}
