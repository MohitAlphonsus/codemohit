import styles from './About.module.css';
const EDUCATION = [
	{
		id: 'edu1',
		title: 'Computer Science & Engineering',
		from: 'OMCOE, Wardha, Nagpur ( 2018 )',
	},
	{ id: 'edu2', title: 'HSC', from: 'Dnyanmata Vidyalaya, Sangamner ( 2013 )' },
	{ id: 'edu3', title: 'SSC', from: 'St.Teresa Highschool, Harigaon ( 2011 )' },
];

export default function Education() {
	return (
		<div className={styles.education}>
			{EDUCATION.map(edu => (
				<div className={styles.educationCard} key={edu.id}>
					<p>{edu.title}</p>
					<span>{edu.from}</span>
				</div>
			))}
		</div>
	);
}
