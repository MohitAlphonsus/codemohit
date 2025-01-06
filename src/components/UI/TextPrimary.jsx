export default function TextPrimary({ children, forHero }) {
	return (
		<p
			className="text-primary"
			style={{
				opacity: `${forHero ? '0.85' : ''}`,
				width: '70%',
				lineHeight: 1.7,
			}}
		>
			{children}
		</p>
	);
}
