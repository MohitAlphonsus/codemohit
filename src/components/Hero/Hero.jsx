import styles from './Hero.module.css';
import heroImg from '../../assets/hero.svg';
import { TextPrimary, Button } from '../UI';
const RESUMELINK =
	'https://drive.google.com/file/d/1Wl5N91MO_UQQGJJw7zxhq9ZujgLIr9gU/view?usp=drive_link';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className="container grid grid-2-col grid-gap-2">
				<div className={styles.content}>
					<p className={styles.tagline}>
						Crafting User-Friendly Web Interfaces
					</p>
					<h1 className={styles.heading}>Aspiring Front-End Developer</h1>
					<TextPrimary>
						&quot;Welcome to my portfolio! I&quot;m a passionate front-end
						developer with a knack for creating beautiful and functional web
						experiences.&quot;
					</TextPrimary>
					<div className={styles.actions}>
						<Button varient="primary" linkHref="#projects" asLink>
							My Projects
						</Button>
						<Button linkHref={RESUMELINK} asLink target="_blank">
							Download CV
						</Button>
					</div>
				</div>

				<img src={heroImg} className={styles.heroImg} />
			</div>
		</section>
	);
}
