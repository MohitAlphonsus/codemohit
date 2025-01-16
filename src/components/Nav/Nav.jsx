import { Logo } from '../UI';
import styles from './Nav.module.css';
import profile from '../../assets/profile.jpeg';
const profileStyle = {
	backgroundImage: `url(${profile})`,
};

export default function Nav() {
	return (
		<nav>
			<div className="container">
				<div className={styles.heroLogo}>
					<div role="image" style={profileStyle}>
						&nbsp;
					</div>
					<Logo forSection="HERO" />
				</div>
			</div>
		</nav>
	);
}
