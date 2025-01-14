import styles from './UIstyles.module.css';
import {
	SiGithub,
	SiCodepen,
	SiFacebook,
	SiInstagram,
	SiLinkedin,
} from '../../constant/skills';

const SOCIALS = [
	{ id: 1, icon: SiFacebook },
	{ id: 2, icon: SiInstagram },
	{ id: 3, icon: SiLinkedin },
	{ id: 4, icon: SiGithub },
	{ id: 5, icon: SiCodepen },
];

export default function SocialsProfile() {
	return (
		<div className={styles.socials}>
			{SOCIALS.map(({ id, icon: Icon }) => (
				<span key={id} className={styles.socialIcon}>
					<Icon />
				</span>
			))}
		</div>
	);
}
