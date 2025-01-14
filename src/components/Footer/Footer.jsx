import styles from './Footer.module.css';
import { Logo, SocialsProfile } from '../UI';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerContainer}>
					<div className={styles.column}>
						<Logo />
						<p className={styles.footerText}>
							Crafting simple lines of code, weaving dreams for the web to
							behold.
						</p>
						<p className={styles.footerText}>
							&copy; Copyright <span>{currentYear}</span>. Made by Mohit Jadhav
						</p>
					</div>
					<div className={styles.column}>
						<SocialsProfile />
					</div>
				</div>
			</div>
		</footer>
	);
}
