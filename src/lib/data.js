const META = {
	creation_year: 2024,
	src: 'https://github.com/kwildeDev/portfolio-app'
};

const PERSONAL = {
	name: 'Katherine Wilde',
	first_name: 'Katherine',
	surname: 'Wilde',
	role: 'Software Developer', 
	introduction:
		'Junior software developer with a background in JavaScript, React, SQL, and Python.',
	location: 'Manningtree, England'
};

const SKILLS = {
	specializations: [
		'Software Engineering',
		'Full-Stack Development',
	],
	programmingLanguages: ['Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
	technologies: [
		'Svelte',
		'Sveltekit',
		'React',
		'Node.js',
		'MongoDB',
		'PostgreSQL',
		'Git'
	]
};

const CONTACT = {
	email: 'katherinewilde@btinternet.com',
	github: 'https://github.com/kwildeDev',
	linkedin: 'https://www.linkedin.com/in/katherine-wilde'
};

const NAVLIST = [
	{ id: 1, url: '/about', label: 'About' },
	{ id: 2, url: '/interests', label: 'Interests' },
	{ id: 3, url: '/contact', label: 'Contact' },
	
];

const ABOUT = {
	paragraphs: [
		"Hi, I'm Katherine Wilde.",
	],
		experience: [
			{
				id: 1,
				company: "Northcoders",
				jobTitle: "Software Development Student/JavaScript Student",
				startDate: "September 2024",
				endDate: "November 2024",
				location: "Remote/Online",
				description: "Northcoders Software Development Bootcamp in JavaScript: A 13-week industry-focused training course covering all the most relevant skills and technologies required for job readiness in a full-stack web development role. During this course, I gained valuable skills in collaboration and teamwork, whilst building my Javascript and React knowledge through daily sprints including pair programming and individual tasks. I have become proficient in test-driven development, now a standard practice in my workflow which guided my backend work. I learnt to debug issues in React apps by using browser developer tools to analyse and inspect issues in real time, which greatly enhanced my understanding of frontend development.",
				photo: { src: "/photos/northcoders-icon.jpg", alt: "" }
			},			
			{
				id: 2,
				company: "Manningtree High School",
				jobTitle: "Data Administrator",
				startDate: "July 2022",
				endDate: "January 2024",
				location: "Manningtree",
				description: "Managed school management information systems (ESS SIMS, Go 4 Schools, ALPS Education), overseeing data collection, processing, analysis, and reporting to stakeholders. Developed expertise in educational MIS, including key performance measures, methodologies, and data challenges. Utilised Excel for data manipulation and formatting, demonstrating a strong understanding of data types and complex formulae. Explored automation opportunities and digitised a paper-based process for improved efficiency. Improved operational efficiency by supporting the finance team through managing payment items and procurement processes and ensuring accurate financial records.",
				photo: { src: "/photos/mhs-logo.png", alt: "" }
			},
			{
				id: 3,
				company: "Altorian Chartered Accountants",
				jobTitle: "Trainee Accountant",
				startDate: "June 2021",
				endDate: "November 2021",
				location: "Manningtree",
				description: "Work experience in October 2020 resulted in a permanent role. Demonstrated proficiency in various accounting software (Excel, VT Transaction+, Sage, Xero, QuickBooks, FreeAgent, BTC Transaction) for accurate and detailed bookkeeping tasks, including journal postings and ledger reconciliations. Executed accurate personal and business tax returns for micro entity companies and sole traders, ensuring compliance with financial regulations through meticulous analysis and effective client communication.",
				photo: { src: "/photos/icons8-account-64.png", alt: "" }
			},
			{
				id: 4,
				company: "Manningtree High School",
				jobTitle: "Exam Invigilator (Lead)",
				startDate: "February 2015",
				endDate: "June 2022",
				location: "Manningtree",
				description: "Coordinated detailed exam procedures, ensuring adherence to standards and student data confidentiality. Managed all aspects of exams, from setup to post-exam processes, while effectively leading a team of invigilators.",
				photo: { src: "/photos/mhs-logo.png", alt: "" }
			},
			{
				id: 5,
				company: "Self-employed",
				jobTitle: "Alterations Specialist",
				startDate: "January 2015",
				endDate: "July 2017",
				location: "Manningtree",
				description: "Delivered precise and high-quality alterations tailored to client needs, demonstrating meticulous attention to detail and the ability to customise solutions.",
				photo: { src: "/photos/sewing-icon.jpeg", alt: "" }
			},
			{
				id: 6,
				company: "Stour Choral Society",
				jobTitle: "Volunteer Website Editor",
				startDate: "September 2013",
				endDate: "October 2020",
				location: "Manningtree",
				description: "Developed and launched a new website while self-learning HTML and CSS, and exploring JavaScript and PHP. Collaborated effectively with the committee and members to ensure the website met their needs. Maintained ongoing comprehensive updates, ensuring continuous user-friendly experience. Updated the website to WordPress for streamlined maintenance by team members and to enhance its useability.",
				photo: { src: "/photos/scs-icon.png", alt: "" }
			},
			{
				id: 7,
				company: "Stour Choral Society",
				jobTitle: "Honorary Treasurer",
				startDate: "September 2008",
				endDate: "October 2019",
				location: "Manningtree",
				description: "Managed financial operations, ensuring compliance with accounting standards, while overseeing budgeting, reporting, and reconciliations. Led strategic planning, including financial statements, Gift Aid management, and submissions to the Charities Commission.",
				photo: { src: "/photos/scs-icon.png", alt: "" }
			}
		],
	education: [
		{
			id: 1,
			school: 'University of Sheffield',
			degree: 'Bachelor of Music (Hons)',
			graduationDate: '1996',
			photo: { src: '/photos/uos-crest.svg', alt: 'University of Sheffield' }
		},
	],
	skills :[
		'Python', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Svelte', 'React', 'Node.js', 'PostgreSQL', 'Git'
	]
};

const PROJECTS = [
	{
        id: 1,
        title: 'Treasurer Trail',
        organisation: '',
        year: '2024',
        type: 'React Native App',
        description: '',
        photo: { src: '', alt: 'Treasurer Trail' },
		link: 'https://northcoders.com/project-phase/time-treasures'
    },	
	{
        id: 2,
        title: 'Portfolio App',
        organisation: '',
        year: 'December 2024',
        type: 'Svelte Web App',
        description: '',
        photo: { src: '', alt: 'Portfolio App' }
    },	
	{
        id: 3,
        title: 'Time Treasures',
        organisation: 'Northcoders',
        year: 'November 2024',
        type: 'React Native Mobile App',
        description: 'A mobile application built with React Native and Expo, aimed at helping users improve time management through gamification. Users can complete tasks within time limits, earn gems, and track progress with routines and graphs. The app was designed for cross-platform functionality, with a backend powered by Express and PostgreSQL.',
        photo: { src: '/photos/timetreasures.png', alt: 'Time Treasures' }
    },
    {
        id: 4,
        title: 'NC News',
        organisation: 'Northcoders',
        year: 'October 2024 to present',
		type: 'Full Stack Web App',
        description: 'This full-stack web application, developed during the Northcoders Bootcamp, offers a mobile-first platform for browsing and interacting with news articles. It features a responsive design, a RESTful API with Express and PostgreSQL, and a React frontend. Key functionalities include article filtering, sorting, voting, and commenting, all backed by comprehensive testing for reliability.',
        photo: { src: '/photos/nc-news.png', alt: 'NC News' }
    },
	{
        id: 4,
        title: 'Recipe Search using Edamam API',
        organisation: 'Code First Girls',
        year: 'February 2024',
		type: 'Python App',
        description: 'This project used the Edamam API to create a Python-based recipe search tool, allowing users to find recipes by ingredients. It highlighted my skills in Python, API integration, data handling, and secure key management. Completed collaboratively, it received positive feedback for its organisation, error handling, and focus on data security. Proposed improvements include saving search results and refining recipe selection to enhance the user experience.',
        photo: { src: '/photos/cfg-logo.png', alt: 'Code First Girls logo' }
    },
];

const INTERESTS = {
	medium_posts : [
	],
	hobbies: [
		'Piano', 'Gardening', 'Sewing',
	]
};


const DATA = {
	META,
	PERSONAL,
	SKILLS,
	CONTACT,
	NAVLIST,
	ABOUT,
	PROJECTS,
	INTERESTS
};

export default DATA;
