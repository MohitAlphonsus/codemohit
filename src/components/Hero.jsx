import { Button, ScrollDown, TextPrimary } from '../components/UI';
import heroStyles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={heroStyles.section}>
			<div className={heroStyles.textBox}>
				<span className="subheading">
					Aspiring Front-End Developer <em>|</em> Crafting User-Friendly Web
					Interfaces
				</span>
				<h1 className="heading-primary"> Hello, I&apos;m Mohit Jadhav</h1>
				<TextPrimary forHero>
					&quot;Welcome to my portfolio! I&apos;m a passionate front-end
					developer with a knack for creating beautiful and functional web
					experiences.&quot;
				</TextPrimary>
				<Button className="mg-tp-sm">View My Work</Button>
				<ScrollDown className="mg-tp-md" />
			</div>
		</section>
	);
}
