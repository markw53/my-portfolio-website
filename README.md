# Personal Portfolio App

A modern, responsive personal portfolio app built with Svelte and styled using Tailwind CSS. The app dynamically displays content from a `data.js` file, making it easy for users to update their portfolio sections. It highlights personal projects, work experience, and skills, offering smooth navigation, easy content updates, and interactive features.

## Table of Contents

-   Technologies Used
    
-   Key Features
    
-   Getting Started
    
-   Installation
    
-   Deployment
    
-   License
    

## Technologies Used

### Svelte

The entire app is built using Svelte, a modern front-end framework. Svelte shifts much of the work to compile time, resulting in smaller bundle sizes and faster runtime performance compared to traditional JavaScript frameworks like React and Vue. (**Svelte Documentation:** [https://svelte.dev/docs](https://svelte.dev/docs))

-   Modular and Declarative Components: Svelte components are self-contained and declarative, simplifying UI development and maintenance.
    
-   Optimised Performance: Svelte compiles code to minimal vanilla JavaScript, reducing overhead.

### Tailwind CSS

Tailwind CSS is used for styling the app, allowing for utility-first CSS design. (**Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs))

-   Customisable Design: Tailwind's utility classes allow for rapid styling with minimal custom CSS.
    
-   Responsive Layout: The app is mobile-first, with responsive utilities making the layout adapt smoothly to different screen sizes.

### Intersection Observer API

Used for scroll-based animations in the FadeInSection component, this API makes elements fade in as they enter the viewport, enhancing the user experience.

### Netlify Forms

The contact form is integrated with Netlify Forms, which automates form submissions without the need for custom back-end code. It includes basic spam protection using a honeypot field.

### Dynamic Data Rendering

Content like experiences, projects, and skills is dynamically rendered from a `data.js` file, which contains objects for different sections of the portfolio (e.g., experiences, projects). Users can easily update content by editing the `data.js` file, and the app will automatically reflect those changes.

### Dynamic Components

Reusable dynamic components, such as ExperienceCard, ProjectCard, and SocialButton, render personalised content like projects, work experiences, and social media links.

### Tw-Elements

Tw-Elements are used for enhanced UI components, like collapsible sections for work experience. These components bring smooth transitions and animations to improve interactivity.

### SVG Icons

SVG icons from libraries like Font Awesome are used throughout the app. These icons are scalable and lightweight, enhancing the UI.

### Netlify Hosting

The app is hosted on Netlify, offering easy deployment, continuous integration, and built-in form handling.

### JavaScript (ES6+)

The app uses modern JavaScript (ES6+) features like arrow functions, template literals, destructuring, and modules for concise and readable code.

## Key Features

### Smooth Scrolling Navigation

The app includes smooth scroll navigation between sections using a scrollToSection function enabling fluid transitions between content.

### Dynamic Content Rendering

Content like experiences, projects, and skills are rendered dynamically from the `data.js` file using Svelte's `#each` blocks. This makes it easy to update sections with content by simply modifying the data objects in the `data.js` file. The app will reflect these changes without the need for hardcoding content into the components.

### Expandable Work Experience

The ExperienceCard component features collapsible sections where users can expand or collapse detailed work experience, providing an interactive way to explore content.

### Customisable Project Cards

The ProjectCard component dynamically displays information like project title, description, technologies, and an image, along with a link to the live project.

### Fade-In Animations

Elements fade into view as they enter the viewport using the Intersection Observer API. This adds dynamic animations as users scroll, enhancing the app's presentation.

### Social Media Integration

The SocialButton component integrates social media buttons for platforms like LinkedIn, GitHub, and Twitter, giving users easy access to your online presence.

### Form Handling

The Contact Form is integrated with Netlify Forms, allowing for easy form submissions and basic spam protection.

### Tailored User Experience

The app features a tailored experience with sections for About, Skills, Experience, and Projects, allowing users to showcase achievements, work, and professional skills. These sections are dynamically populated from the `data.js` file.

## Getting Started

To get started with the project locally, clone this repository and install dependencies.

### Prerequisites

-   Node.js (v16 or higher)
    
-   npm for package management
    

### Installation

1. Clone the repository:  

    ```
    git clone https://github.com/your-username/portfolio-app.git        
    cd portfolio-app
    ```

2. Install dependencies:  
  
    ```
    npm install    
    ```
    
3. Run the app locally:  

    ```
    npm run dev
    ```
    
4.  Navigate to http://localhost:5173 in your browser to view the app.  
      
    

## Deployment

This project is designed to be easily deployed to Netlify:

1. Push your code to a GitHub repository.

2. Install the Netlify CLI by following the instructions in the official [Netlify CLI get-started documentation](https://docs.netlify.com/cli/get-started/).

3. Follow the documentation to link your project to Netlify and deploy it to production.

4. Alternatively, you can go to [Netlify](https://www.netlify.com/) and manually link your GitHub repository. Netlify will automatically build and deploy the app for you.



## License

This project is licensed under the MIT License - see the LICENSE file for details.


