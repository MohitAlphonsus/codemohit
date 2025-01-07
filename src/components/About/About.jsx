import { SectionHeading } from '../UI';
import styles from './About.module.css';

export default function About() {
	return (
		<section className={styles.about}>
			<div className="container">
				<SectionHeading>About Me</SectionHeading>
			</div>
		</section>
	);
}
