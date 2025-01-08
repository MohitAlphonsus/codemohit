import { SectionHeading } from '../UI';
import styles from './Project.module.css';

export default function Project() {
	return (
		<section className={styles.project}>
			<SectionHeading className="mg-bt-xl">Projects</SectionHeading>
		</section>
	);
}
