import { SectionHeading } from '../UI';
import { PROJECTS } from '../../constant/projects';
import styles from './Project.module.css';
import ProjectCard from './ProjectCard';

export default function Project() {
	return (
		<section className={styles.project} id="projects">
			<div className="container">
				<SectionHeading className="mg-bt-xl">Projects</SectionHeading>
				<div className={styles.projectsContainer}>
					{PROJECTS.map(project => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
