import styles from './UIstyles.module.css';
import {
	SiGithub,
	SiCodepen,
	SiFacebook,
	SiInstagram,
	SiLinkedin,
} from '../../constant/skills';

const SOCIALS = [
	{
		id: 1,
		icon: SiFacebook,
		linkTo: 'https://www.facebook.com/mohit.alphonsus/',
	},
	{
		id: 2,
		icon: SiInstagram,
		linkTo: 'https://www.instagram.com/mohit_alphonsus/?next=%2F',
	},
	{
		id: 3,
		icon: SiLinkedin,
		linkTo: 'https://www.linkedin.com/in/mohit-jadhav-575050238/',
	},
	{ id: 4, icon: SiGithub, linkTo: 'https://github.com/MohitAlphonsus' },
	{ id: 5, icon: SiCodepen, linkTo: 'https://codepen.io/mohitvijay' },
];

export default function SocialsProfile() {
	return (
		<div className={styles.socials}>
			{SOCIALS.map(({ id, icon: Icon, linkTo }) => (
				<a key={id} className={styles.socialIcon} href={linkTo} target="_blank">
					<Icon />
				</a>
			))}
		</div>
	);
}
