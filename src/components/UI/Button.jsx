import btnStyles from './Button.module.css';

export default function Button({ children, className }) {
	const classes = `${btnStyles.btn} ${className}`;

	return <button className={classes}>{children}</button>;
}
