import { SectionHeading, TextPrimary } from '../UI';
import Education from './Education';
import styles from './About.module.css';

export default function About() {
	return (
		<section className={styles.about}>
			<div className={`container ${styles.aboutContainerBg}`}>
				<SectionHeading className="mg-bt-xl">About Me</SectionHeading>
				<div className={styles.aboutContainer}>
					<div className={styles.aboutContent}>
						<h2 className="heading-secondary mg-bt-sm">
							Eager to Build and Learn
						</h2>
						<TextPrimary>
							Hi there! 👋 I&apos;m Mohit Jadhav a{' '}
							<strong>passionate and motivated frontend developer</strong> eager
							to kickstart my career in web development. Although I&apos;m just
							starting out, I&apos;ve dedicated countless hours to learning and
							mastering essential frontend technologies.
						</TextPrimary>
						<TextPrimary>
							I&apos;ve worked on several <strong>personal projects</strong> to
							hone my skills, such as creating responsive landing pages,
							interactive forms, and simple web applications using React. These
							experiences have helped me develop a solid foundation in
							<strong> problem-solving, attention to detail</strong>, and a
							strong understanding of modern development practices.
						</TextPrimary>
					</div>
					<Education />
				</div>
			</div>
		</section>
	);
}
