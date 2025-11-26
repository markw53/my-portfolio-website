const SOURCE = {
	creation_year: 2025,
	src: 'https://github.com/markw53/my-portfolio-website'
};

const PERSONAL = {
	name: 'Mark Workman',
	first_name: 'Mark',
	surname: 'Workman',
	role: 'Software Developer',
	introduction:
		'Junior software developer focused on creating dynamic full-stack applications that combine user-friendly design with robust backend functionality.',
	location: 'Devon, England',
	cv_url: '/MarkWorkman-CV.pdf'
};

const SKILLS = {
	specializations: ['Software Engineering', 'Full-Stack Development'],
	programmingLanguages: [
		{ name: 'JavaScript', icon: '/photos/JavaScript.svg', category: 'frontend' },
		{ name: 'TypeScript', icon: '/photos/TypeScript.svg', category: 'frontend' },
		{ name: 'Python', icon: '/photos/Python.svg', category: 'backend' },
		{ name: 'Java', icon: '/photos/Java.svg', category: 'backend' },
		{ name: 'SQL', icon: '/photos/sql-database-generic-svgrepo-com.svg', category: 'backend' },
		{ name: 'HTML', icon: '/photos/HTML5.svg', category: 'frontend' },
		{ name: 'CSS', icon: '/photos/CSS3.svg', category: 'frontend' }
	],
	technologies: [
		{ name: 'React', icon: '/photos/React.svg', category: 'frameworks' },
		{ name: 'React Native', icon: '/photos/React.svg', category: 'frameworks' },
		{ name: 'Node.js', icon: '/photos/Node.js.svg', category: 'frameworks' },
		{ name: 'Express', icon: '/photos/Express.svg', category: 'frameworks' },
		{ name: 'Svelte', icon: '/photos/Svelte.svg', category: 'frameworks' },
		{ name: 'Sveltekit', icon: '/photos/Svelte.svg', category: 'frameworks' },
		{ name: 'PostgreSQL', icon: '/photos/PostgresSQL.svg', category: 'databases' },
		{ name: 'Git', icon: '/photos/Git.svg', category: 'version_control' },
		{ name: 'GitHub', icon: '/photos/GitHub.svg', category: 'version_control' },
		{ name: 'Jest', icon: '/photos/Jest.svg', category: 'testing' },
		{ name: 'Bootstrap', icon: '/photos/Bootstrap.svg', category: 'ui_ux' },
		{ name: 'Material UI', icon: '/photos/Material-UI.svg', category: 'ui_ux' },
		{ name: 'WordPress', icon: '/photos/WordPress.svg', category: 'ui_ux' },
		{ name: 'Tailwind CSS', icon: '/photos/Tailwind-CSS.svg', category: 'ui_ux' },
		{ name: 'Chakra UI', icon: '/photos/icons8-chakra-ui.svg', category: 'ui_ux' }
	]
};

const CONTACTS = [
	{
		actionType: 'Go to my GitHub profile',
		viewBox: '0 0 496 512',
		path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
		url: 'https://github.com/markw53'
	},
	{
		actionType: 'Go to my LinkedIn profile',
		viewBox: '0 0 448 512',
		path: 'M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z',
		url: 'https://www.linkedin.com/in/mark-workman-02a944120/'
	}
];

const ABOUT = {
	paragraphs: [
		`I began my career in retail before retraining as a teacher and from there my interest in software development grew. From teaching maths and then moving into Computer Science this ignited my passion for creating software. I taught myself HTML and CSS, and started building websites as a hobby. I volunteered for various projects, which allowed me to explore my interest in programming further.`,
		`As I transitioned into Computer Science, I taught myself Python and its potential for getting students into coding using Raspberry pi's and MicroBit's. Since then, I’ve been focused on expanding my knowledge through courses from Future Learn, along with self-directed learning and personal projects. More recently, completing a JavaScript bootcamp with Northcoders has deepened my expertise and broadened my understanding.`,
		`Working on projects—whether solo or collaboratively—lets me merge creativity with problem-solving, which I find especially rewarding. I enjoy creating solutions that have a meaningful impact and help improve people's lives.`
	],
	experience: [
		{
			id: 1,
			company: 'Tech Returners',
			jobTitle: 'Freelance Project Consultant',
			startDate: 'April 2025',
			endDate: 'May 2025',
			location: 'Remote/Online',
			description: [
				'I worked as a freelance consultant on the Launchpad project, delivering a bespoke community-focused events platform that enables local organisations to manage and share events.',
				'Over the course of 4 weeks, I planned, architected, built, and deployed a full-stack MVP using React, Node.js, and PostgreSQL.',
				'The platform features a modular and scalable architecture with full WCAG compliance and a perfect Lighthouse accessibility score.',
				'After launch, I resolved multiple GitHub issues and ensured stable deployments across Netlify, Render, and Supabase to deliver a seamless user experience.'
			],
			photo: { src: '', alt: '' }
		},
		{
			id: 2,
			company: 'Northcoders',
			jobTitle: 'Software Development Student/JavaScript Student',
			startDate: 'September 2024',
			endDate: 'November 2024',
			location: 'Remote/Online',
			description: [
				'Northcoders Software Development Bootcamp in JavaScript:',
				'A 13-week industry-focused training course covering all the most relevant skills and technologies required for job readiness in a full-stack web development role.',
				'During this course, I gained valuable skills in collaboration and teamwork, whilst building my Javascript and React knowledge through daily sprints including pair programming and individual tasks.',
				'I have become proficient in test-driven development, now a standard practice in my workflow which guided my backend work. I learnt to debug issues in React apps by using browser developer tools to analyse and inspect issues in real time, which greatly enhanced my understanding of frontend development.'
			],
			photo: { src: '/photos/northcoders-icon.jpg', alt: 'Northcoders company logo' }
		},
		{
			id: 3,
			company: 'Digital Skills HQ / Code First',
			jobTitle: 'Data Analyst',
			startDate: 'December 2023',
			endDate: 'February 2024',
			location: 'Remote/Online',
			description: [
				'Completed a comprehensive Data Analyst course covering data analysis, visualisation, and reporting using Excel and Power BI.',
				'Extensive hands-on experience with data cleaning, transformation, and analysis techniques to derive actionable insights from complex datasets.',
				'Explored and built queries in SQL to extract and manipulate data from relational databases, enhancing my ability to work with large datasets effectively.'
			],
			photo: { src: '/photos/mhs-logo.png', alt: 'Digital Skills HQ logo' }
		},
		{
			id: 4,
			company: 'Outlier.ai',
			jobTitle: 'AI Data Scientist',
			startDate: 'January 2024',
			endDate: 'Present',
			location: 'Remote/Online',
			description: [
				'Trained AI model responses by using grading rubrics to select the best response path.',
				'Using Pandas and NumPy to clean and organise datasets for model training and evaluation.',
				'As a reviewer, provided feedback on model outputs to improve accuracy and relevance.'
			],
			photo: { src: '/photos/icons8-account-64.png', alt: '' }
		},
		{
			id: 5,
			company: 'Brixham College',
			jobTitle: 'Teacher of Computer Science',
			startDate: 'August 2023',
			endDate: 'December 2023',
			location: 'Brixham, Devon',
			description: [
				'Educating and inspiring students in Computer Science, delivering engaging lessons that foster a deep understanding of programming concepts and computational thinking.',
				'Developing and implementing curriculum plans that align with educational standards, ensuring students are well-prepared for examinations and future studies in the field.',
				'Utilising a variety of teaching methods and technologies to accommodate different learning styles, creating an inclusive classroom environment that encourages student participation and enthusiasm for the subject.'
			],
			photo: { src: '/photos/mhs-logo.png', alt: 'Brixham College logo' }
		},
		{
			id: 6,
			company: 'Okehampton College',
			jobTitle: 'Teacher of Maths and IT',
			startDate: 'September 2022',
			endDate: 'August 2023',
			location: 'Okehampton, Devon',
			description: [
				'Educated and inspired students in Mathematics and IT, delivering engaging lessons that foster a deep understanding of mathematical concepts and information technology principles.',
				'Prepared and delivered informative and relevant presentations to parents during open evenings and consultation sessions, effectively communicating student progress and curriculum details.',
			],
			photo: { src: '/photos/sewing-icon.jpeg', alt: '' }
		},
		{
			id: 7,
			company: 'Teaching Personnel',
			jobTitle: 'Supply Teacher',
			startDate: 'September 2021',
			endDate: 'September 2022',
			location: 'Various Locations',
			description: [
				'Flexible and adaptable supply teaching across multiple schools, effectively managing diverse classroom environments and delivering curriculum-aligned lessons in the absence of regular teachers.',
				'Demonstrated strong classroom management skills, ensuring a positive and productive learning atmosphere while maintaining continuity in students\' education.',
				'Collaborated with school staff to understand specific classroom needs and tailored teaching approaches accordingly, contributing to the overall educational goals of each institution.'
			],
			photo: { src: '/photos/scs-icon.png', alt: '' }
		},
		{
			id: 8,
			company: 'Brixham College',
			jobTitle: 'Teacher of Maths',
			startDate: 'September 2019',
			endDate: 'August 2021',
			location: 'Brixham, Devon',
			description: [
				'Delivered high-quality mathematics education to students, fostering a deep understanding of mathematical concepts and problem-solving skills.',
				'Developed and implemented engaging lesson plans that catered to diverse learning styles, ensuring all students had the opportunity to succeed.',
				'Utilised various assessment methods to monitor student progress, providing constructive feedback and support to help students achieve their academic goals.'
			],
			photo: { src: '/photos/scs-icon.png', alt: '' }
		}
	],
	education: [
		{
			id: 1,
			school: 'University of Plymouth',
			degree: 'BSc in Mathematics and Statistics (Hons)',
			graduationDate: '2007',
			photo: { src: '/photos/UoP-logo.png', alt: 'University of Plymouth logo' }
		}
	]
};

const PROJECTS = [
	{
	    id: 1,
	    title: 'Waggle',
	    organisation: 'Devons Digital Soluitons - self employed',
	    year: 'December 2025',
	    type: 'Full Stack Web App',
	    description: [
	 			'A full-stack dog mating platform designed to help dog owners find suitable mates for their pets based on breed, location, and compatibility.',
				'Built as a freelance project for Devons Digital Solutions, focusing on user experience, accessibility, and secure data handling.',
				'  「 ✦ Key Features: ✦ 」  ',
  				'• Full-stack app built with React, TypeScript, Tailwind CSS, Node.js, Firebase, and Firestore',
  				'• General users can create profiles, search for mates, and send messages; Admin users can manage listings and users',
  				'• Able to filter searches by breed, location, age, and compatibility factors',
  				'• Breed directory with detailed information and images for over 200 dog breeds',
  				'• Map integration using Leaflet.js to display nearby matches based on user location',
  				'• Implemented dark mode toggle with full compatibility across Tailwind CSS, React Select, and custom components',
  				'• Deployed across Firebase Hosting and Firestore for seamless scalability and performance',
			],		
	    photo: { src: '/photos/waggle.png', alt: 'waggle dog search page' },
		link: 'https://github.com/markw53/waggle-website',
		skills: ['TypeScript', 'Vite', 'React', 'Node.js', 'Firebase', 'Firestore', 'Tailwind CSS'],
	},
	{
	    id: 2,
	    title: 'Community Events Platform',
	    organisation: 'Tech Returners Launchpad',
	    year: 'May 2025',
	    type: 'Full Stack Web App',
	    description: [
	 			'A full-stack community events platform designed to help local organisations create, manage, and promote events while allowing community members to browse and register for events.',
				'Built as part of the Tech Returners Launchpad programme with a focus on scalability, accessibility, and user experience.',
				'  「 ✦ Key Features: ✦ 」  ',
  				'• Full-stack app built with React, TypeScript, Chakra UI, Node.js, Express, and PostgreSQL',
  				'• Multi-role user system (Attendee, Organiser, Admin) with secure JWT authentication',
  				'• Integrated \'Add to Google Calendar\' feature using prefilled event links',
  				'• Implemented dark mode toggle with full compatibility across Chakra UI, React Select, and custom components',
  				'• Used Zod and React Hook Form for robust form validation and custom warning/success/error toasts',
  				'• Centralised user state management with context providers to eliminate prop-drilling',
  				'• Deployed across Netlify (frontend), Render (backend), and Supabase (database)',
  				'• Closed 13 GitHub issues post-delivery and received strong client feedback for accessibility, architecture, and UX'
			],		
	    photo: { src: '/photos/community_events.png', alt: 'community events homepage' },
		link: 'https://github.com/markw53/community-events',
		skills: ['TypeScript', 'React', 'Node.js', 'Express', 'Firebase', 'JWT'],
	},
	{
		id: 3,
		title: 'Portfolio App',
		organisation: '',
		year: 'December 2024',
		type: 'Svelte Web App',
		description: [
			'A personal portfolio website built with Svelte and Tailwind CSS to showcase my skills, projects and experience.',
			'Features include smooth scrolling navigation, expandable sections for work experience, smooth fade-in animations on scroll, and a fully responsive design.',
			'It also includes links to social media and a contact form managed through Netlify, making it easier for users to engage. This creates an engaging platform for potential employers and collaborators.',
		],
		photo: { src: '', alt: '' },

		link: 'https://github.com/markw53/my-portfolio-website',
		skills: ['JavaScript', 'Sveltekit', 'Tailwind CSS']
	},
	{
		id: 4,
		title: 'Trippy',
		organisation: 'Northcoders',
		year: 'November 2024',
		type: 'React Native Mobile App',
		description: [
			'A mobile application built with React Native and Expo, aimed at helping users improve time management through gamification.',
			'Users can complete tasks within time limits, earn gems, and track progress with routines and graphs.',
			'The app was designed for cross-platform functionality, with a backend powered by Express and PostgreSQL.'
		],
		photo: { src: '/photos/tt-timer.png', alt: 'Time Treasures timer page' },

		link: 'https://github.com/markw53/trippy',
		skills: ['JavaScript', 'React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Axios', 'Expo']
	},
	{
		id: 5,
		title: 'NC News',
		organisation: 'Northcoders',
		year: 'October 2024 to present',
		type: 'Full Stack Web App',
		description: [
			'This full-stack web application, developed during the Northcoders Bootcamp, offers a mobile-first platform for browsing and interacting with news articles.',
			'It features a responsive design, a RESTful API with Express and PostgreSQL, and a React frontend.',
			'Key functionalities include article filtering, sorting, voting, and commenting, all backed by comprehensive testing for reliability.'
		],
		photo: { src: '/photos/ncnews-home-light.png', alt: 'NC News homepage' },

		link: 'https://github.com/markw53/nc-news',
		skills: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Material UI']
	}
];

const DATA = {
	SOURCE,
	PERSONAL,
	SKILLS,
	CONTACTS,
	ABOUT,
	PROJECTS
};

export default DATA;
