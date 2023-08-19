import '../css/InnerPages.css';
import ReactCommonTopic from './ReactCommonTopic';
import ReactSidebar from './Sidebar';

const InstallReact = () => {
    return (
        <>
            <section id="common_inner" className="common_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h1 className="heading_title">Creating and Installing a React.js Application</h1>
                            <p>
                                React.js is a popular JavaScript library for building user interfaces. To get started with
                                creating and
                                installing a React.js application, follow these steps:
                            </p>
                            <h2 className="common_title">Step 1: Set Up Node.js and npm</h2>
                            <p>
                                Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your
                                computer.
                                You can download them from the official Node.js website: <a href="https://nodejs.org/" target="_blank" className="effect_link">https://nodejs.org/</a>
                            </p>
                            <h2 className="common_title"> Step 2: Create a New React Application</h2>
                            <ol>
                                <li>Open your terminal or command prompt.</li>
                                <li>
                                    Navigate to the directory where you want to create your React application using the
                                    <code>"cd"</code> command,
                                    e.g., <code>cd Documents/projects</code>.
                                </li>
                                <li>
                                    Run the following command to create a new React application named "my-first-react-app":
                                </li>
                            </ol>
                            <div className="bg_code mb-2">
                                npx create-react-app my-first-react-app
                            </div>
                            <p>
                                This command will set up a new React application with the necessary files and folder structure.
                            </p>
                            <h2 className="common_title">Step 3: Navigate to Your React Application</h2>
                            <ol>
                                <li>Use the cd command to navigate into your newly created React application directory:</li>
                            </ol>
                            <div className="bg_code mb-2">
                                cd my-first-react-app
                            </div>
                            <h2 className="common_title">Step 4: Start the Development Server</h2>
                            <ol>
                                <li>Once you're inside the React application directory, run the following command to start the development server:</li>
                            </ol>
                            <div className="bg_code mb-2">
                                npm start
                            </div>
                            <p>
                                This command will start the development server and open your application in a web browser. Any changes you make to the code will be automatically reflected in the browser.
                            </p>
                            <h2 className="common_title">Step 5: Explore and Modify</h2>
                            <ol>
                                <li>Open your preferred code editor (e.g., Visual Studio Code).</li>
                                <li>Inside the "src" folder of your React application, you'll find the main component file named "App.js." This is where you can start building your application's user interface using React components.</li>
                                <li>Explore the "src" folder to find other components, styles, and configuration files that you can modify based on your project's requirements.</li>
                            </ol>
                        </div>
                        <div className="col-sm-3">
                            <div className='sidebar_widget sidebar_around'>
                                <ReactSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ReactCommonTopic />
        </>
    )
}

export default InstallReact;