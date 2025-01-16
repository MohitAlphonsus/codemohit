import { Logo, SocialsProfile } from '../UI';
import styles from './Footer.module.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerColumns}>
					<div className={styles.column}>
						<Logo />
						<SocialsProfile />
						<p className={`${styles.footerText} ${styles.copyright}`}>
							&copy;Copyright {currentYear}. Made by Mohit Jadhav
						</p>
					</div>
					<div className={styles.column}>
						<span className={styles.title}>Contact</span>
						<address>
							<a href="mohitdalphonso@gmail.com" className={styles.footerText}>
								mohitdalphonso@gmail.com
							</a>
							<a href="tel:+919518359623" className={styles.footerText}>
								+919518359623
							</a>
						</address>
					</div>
					<div className={styles.column}>
						<span className={styles.title}>Address</span>
						<p className={styles.footerText}>Shrirampur, Ahilyanagar, India</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
