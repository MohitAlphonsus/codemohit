import projectFlavorscapeImg from '../assets/project-snapshots/project-flavorscape.png';
import projcetOmnifoodImg from '../assets/project-snapshots/project-omnifood.png';
import projectQuizzyImg from '../assets/project-snapshots/project-quizzy.png';

export const PROJECTS = [
	{
		id: 'project1',
		title: 'Flavorscape',
		desc: "Flavorscape is a landing page that showcases restaurant's standout features, dishes, along with a glowing customer reviews to explore and connect with top dining experience.",
		stacks: ['React', 'Styled-Components', 'Swiper'],
		projectLink: 'https://flavorscape-restaurant.netlify.app/',
		githubLink: 'https://github.com/MohitAlphonsus/Flavorscape',
		snapshot: projectFlavorscapeImg,
	},
	{
		id: 'project2',
		title: 'Omnifood',
		desc: 'Omnifood is landing page for food dilivery app that provides meal with affordable price. This project is created in learning phase in course.',
		stacks: ['HTML', 'CSS', 'JS'],
		projectLink: 'https://mohitalphonsus.github.io/Omnifood/',
		githubLink: 'https://github.com/MohitAlphonsus/Omnifood',
		snapshot: projcetOmnifoodImg,
	},
	{
		id: 'project3',
		title: 'QuizzyQ',
		desc: 'Quizz app with four different quizz section. Fun to play and learn to increase knowledge.',
		stacks: ['React', 'React-Icons', 'React-Router', 'Styled-Component'],
		projectLink: 'https://quizzyq.netlify.app/quizzapp',
		githubLink: 'https://github.com/MohitAlphonsus/QuizzyQ',
		snapshot: projectQuizzyImg,
	},
];
