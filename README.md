# 🌟 FortiChat - Social Media Platform 🌟
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/171681203794083840/1173721887784833024/fd88084a-5132-4973-b552-962298ea2fb5.png" width="20%" height="20%">
</p>
<p align="center">Welcome to <strong><em>FortiChat</em></strong>, where Conversations Forge Lasting Connections! 🚀 </p>

<br>

<p align="center"> Developed with the MERN Stack:</p>
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" width="30%" height="30%">
</p>
<br><br>

## Table of Contents
- [🌟 FortiChat - Social Media Platform 🌟](#-fortichat---social-media-platform-)
- [Key Features 🌟](#key-features-)
- [☢️ Systems Threat Model ☢️](#️-systems-threat-model-️)
- [🌟 Mission Statement for FortiChat 🌟](#-mission-statement-for-fortichat-)
- [🌍 Project Website Specifications for FortiChat 🌍](#-project-website-specifications-for-fortichat-)
- [🛡️ Assets to Protect in FortiChat 🛡️](#️-assets-to-protect-in-fortichat-️)
- [📊 Data Flow Chart 📊](#-data-flow-chart-)
- [🦠 Threats to FortiChat 🦠](#-threats-to-fortichat-)
- [🌍 Risk Assessment and Prioritization 🌍](#-risk-assessment-and-prioritization-)
- [🚨 Plan for Incident Response 🚨](#-plan-for-incident-response-)
- [⚔️ Cyber Security Measures ⚔️](#️-cyber-security-measures-️)
- [🗃️ Database 🗃️](#️-database-️)
- [🌟 FortiChat Use Cases 🌟](#-fortichat-use-cases-)
- [✨ FortiChat Contribution List ✨](#-fortichat-contribution-list-)
- [🚀 Installation & Setup Guide 🚀](#-installation--setup-guide-)



## Key Features 🌟

| Feature | Description |
| ------- | ----------- |
| **Cyber Security Focus** 🔐 | OWASP Top10 taken intro consideration during development. |
| **Friend System** 👥 | Add or remove friends to build a personalized network. |
| **Posts and Interactions** 💬 | Share thoughts, images, and like other users' posts. |
| **Responsive Design** 📱 | Seamlessly adaptable to various devices, enhancing user accessibility. |
<br>

# ☢️ Systems Threat Model ☢️
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/171681203794083840/1174680099472293888/360_F_455885719_m9RqZZvjC0s15boyn8op2l7HiPisK9QH.png?ex=65687918&is=65560418&hm=8790fd5829609854ffef3a06f348743f46c703780d1387f6c6fab13e6e2b209c&" width="60%" height="60%">
</p>

## 🌟 Mission Statement for FortiChat 🌟

### Vision 🌐
To create an engaging, secure, and user-friendly social media platform that fosters meaningful connections and community building.

### Mission 🚀
- To develop a comprehensive social media experience that prioritizes user engagement, data security, and a seamless interface. 
- To offer a platform where individuals from diverse backgrounds can connect, share ideas, and foster a sense of community in a safe and welcoming digital environment.

### Core Values 💎
- User-Centric Design 👥
- Privacy and Security 🔒
- Community and Connection 🤝

### Goals 🎯
- To build a robust, scalable social media platform that supports real-time communication, content sharing, and community engagement. 📈
- To implement state-of-the-art security measures, ensuring the integrity and confidentiality of user data. 🛡️
- To continually adapt and grow, responding to user feedback and emerging digital trends to improve the platform. 🌱
<br>

## 🌍 Project Website Specifications for FortiChat 🌍

| Feature Category | Description |
| ---------------- | ----------- |
| **User Authentication and Registration** 🔑 | - Secure login and registration system.<br> - Password encryption using bcrypt.<br> - JWT-based session management. |
| **User Profile Management** 👤 | - Personalized user profiles with editable details like location and occupation.<br> - Profile picture upload.<br> - View and manage friends list. |
| **Post Creation and Management** 📝 | - Create posts with text and image content.<br> - Like and comment on posts.<br> - Image uploads for posts using multer. |
| **Real-time Feed** 🔄 | - Dynamic feed displaying posts from friends.<br> - Real-time updates for new content. |
| **Friends System** 👥 | - Add/remove friends to build a personalized network.<br> - Access control for managing friends list. |
| **Security Features** 🔐 | - Rate limiting to prevent abuse and DoS attacks.<br> - Input validation and sanitation against XSS and injection attacks.<br> - Helmet for enhanced HTTP security.<br> - Generic error responses for security.<br> - CORS configuration for cross-origin request management. |
| **Database Management** 💾 | - MongoDB with mongoose for database operations.<br> - Secure database connection handling. |
| **Responsive Design** 📱 | - Adaptable design for accessibility on various devices. |


### Development Approach 🚀

| Aspect | Strategy |
| ------ | -------- |
| **MERN Stack** | Utilization of MongoDB, Express.js, React.js, and Node.js for full-stack development. |
| **Modular Design** | Each feature (authentication, profile management, etc.) is designed as a modular, scalable unit. |
| **API-First Approach** | Backend development with a focus on RESTful API principles for scalability and flexibility. |
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/171681203794083840/1174660126955798528/Screenshot_2023-11-16_at_11.29.19.png?ex=6568667e&is=6555f17e&hm=d261bd8d5193e3eeca352696593021bcb4b05c2aa300d485ec8d7f5da7ac514e&" width="80%" height="80%">
</p>

### Security Considerations 🔒

| Focus | Practices |
| ----- | --------- |
| **OWASP Top 10 Adherence** | Following guidelines for web application security. |
| **Dependency Management** | Regular updates and reviews of dependencies and libraries for security. |
| **Sensitive Data Management** | Use of environment variables to securely manage sensitive data and credentials. |

<br>

## 🛡️ Assets to Protect in FortiChat 🛡️

Below is a breakdown of these primary assets and the measures in place to protect them.

### User Credentials 🔐
- **Content**: Usernames, email addresses, and passwords.
- **Protection**: Bcrypt for password hashing and secure JWT token management.

### User-Generated Content 📝
- **Content**: Text posts and images shared by users.
- **Protection**: Server-side validation for content integrity.

### Personal User Information 🧑‍💼
- **Content**: User profile data like names, locations, occupations, and profile pictures.
- **Protection**: Secure MongoDB storage, input validation, and sanitation to prevent data leakage and injection attacks.

### Friendship Data 👥
- **Content**: Information about user connections and friendships.
- **Protection**: Access control checks ensuring interactions are confined within the user's network.

### Interactions and Activity Logs 📊
- **Content**: Data on user interactions (likes, comments) and activity logs.
- **Protection**: Access control and rate limiting to prevent unauthorized actions and abuse.

### System Functionality 🖥️
- **Content**: Operational integrity of backend services, APIs, and frontend interactions.
- **Protection**: Helmet for HTTP security, CORS configurations, and consistent error handling.
<br>

## 📊 Data Flow Chart 📊

```mermaid
flowchart LR
    A[User Interface] -->|Authentication| B[Auth Module]
    B -->|JWT Token| A
    A -->|Create/View Posts| C[Posts Module]
    C -->|Store/Retrieve Images| D[Local Storage]
    C -->|Store/Retrieve Data| E[MongoDB]
    A -->|Manage Profile| F[User Profile Module]
    F --> E
    A -->|Add/Remove Friends| G[Friends Module]
    G --> E
    E -->|Fetch Data| A
    D -->|Fetch Images| A
```
- **User Interface 🖥️**: The point of interaction for users, including login, post creation, profile management, and friend system.
- **Auth Module 🔑**: Handles user authentication, generating and validating JWT tokens.
- **Posts Module ✍️**: Manages the creation and retrieval of posts, interfacing with both AWS S3 for image storage and MongoDB for text content.
- **User Profile Module  👤**: Manages user profile information, storing and retrieving data from MongoDB.
- **Friends Module 👥**: Handles the addition and removal of friends, updating the friend list in MongoDB.
- **Local Storage 💾**: Responsible for the storage and retrieval of image files uploaded by users as part of their posts or profile pictures.
- **MongoDB 🗄️**: The primary database for storing user data, posts, and other relevant information.
<br>

## 🦠 Threats to FortiChat 🦠

### 🔓 Unauthorized Access
- **How/Why:** Could occur through stolen credentials or token leakage, granting attackers access to user accounts or administrative interfaces.

### 🔄 Cross-Site Request Forgery (CSRF)
- **How/Why:** Possible if attackers trick users into submitting requests to the web application where they are authenticated.

### 🚨 Data Breach or Leakage
- **How/Why:** Might result from inadequate database security, leading to unauthorized access to sensitive user data.

### 💉 Injection Attacks
- **How/Why:** Occurs when untrusted data is sent to an interpreter within a command or query, potentially leading to SQL, NoSQL, or JavaScript injection.

### ⏱️ Denial of Service (DoS) Attacks
- **How/Why:** Can happen when services are overwhelmed, making the application unresponsive.

### ⚠️ Cross-Site Scripting (XSS)
- **How/Why:** If the application includes untrusted data without proper validation, attackers could execute scripts in users' browsers.

### 🎣 Man-in-the-Middle (MitM) Attacks
- **How/Why:** Potential risk during data transmission, where attackers intercept and alter communications.

### 🔓 Broken Access Control
- **How/Why:** Occurs when user access limitations are not properly enforced.

### 📤 File Upload Vulnerabilities
- **How/Why:** A risk if users are allowed to upload files without stringent size, type, or content checks.

### 🔧 Misconfiguration and Outdated Software
- **How/Why:** Arises due to improper configuration or failure to update software, exposing vulnerabilities.

### 🕵️ Insider Threats
- **How/Why:** Happens when someone with legitimate access misuses it, impacting the application's security.

### 🗨️ Social Engineering and Phishing
- **How/Why:** Occurs when attackers deceive users into revealing sensitive information or compromising security.
<br>

## 🌍 Risk Assessment and Prioritization 🌍
- **High Risk:** 
    - Social Engineering and Phishing - reliant on user awareness.
- **Medium Risk:** 
    - Insider Threats - potential access to critical functionalities.
    - XSS - if not specifically mitigated.
- **Low Risk:** 
    - Unauthorized Access, Data Breach, Injection Attacks, DoS, Broken Access Control, File Upload Vulnerabilities, Misconfiguration and Outdated Software - covered by existing security measures.
<br>

## 🚨 Plan for Incident Response 🚨

### 1. 🕵️ Detection and Identification
- **Monitoring:** Utilize tools like morgan & winston for continuous monitoring of activities.
- **Alerts:** Set up automated alerts for suspicious activities signaling potential incidents. *(WIP)*
- **User Reporting:** Encourage users to report any unusual activities or security concerns.

### 2. 🛡️ Containment
- **Immediate Response:** Quickly isolate affected systems to halt further spread.
- **Backup:** Regular backups to maintain data integrity and assist in recovery.

### 3. 🧹 Eradication
- **Root Cause Analysis:** Investigate to find the cause, examining logs, user activities, and system changes.
- **Remediation:** Address the root cause to remove the issue, potentially involving software patches or security updates.

### 4. 💻 Recovery
- **Restoration:** Carefully restore services, monitoring for signs of recurrence.
- **Testing:** Conduct extensive testing to ensure the issue is fully resolved and systems are functioning normally. *(WIP)*

### 5. 📊 Post-Incident Activities
- **Review and Analysis:** Conduct a thorough review of the incident and the response effectiveness.
- **Documentation:** Document the incident, response actions, and insights for future reference.
- **Communication:** Keep all relevant parties informed about the incident and the measures taken.
- **Training and Improvements:** Update training and security measures based on the incident's learnings.
<br>

# ⚔️ Cyber Security Measures ⚔️
<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6916/6916680.png" width="30%" height="30%">
</p>

FortiChat is built by taking the [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) into careful consideration.

## API1: Broken Object Level Authorization 🛡️
- **VerifyToken Middleware:** Ensures authentication across routes.
- **Validation Checks:** Users can only access or modify their own data.
- **ObjectId Validation:** Maintains data integrity and prevents unauthorized access.

## API2: Broken Authentication 🔒
- **JWT and Bcrypt:** Manages user sessions and password hashing securely.
- **JWT Token Management:** Securely managed with appropriate expiration.
- **Brute Force Protection:** Implemented loginLimiter to guard against brute force attacks.
- **Extra Validation Layers:** Added validateLoginData & validateRegistrationData middleware.

## API3: Broken Object Property Level Authorization 🚫
- **Data Validation:** Implemented using Joi and other validation middleware.
- **Data Sanitation:** Prevents excessive data exposure.

## API4: Unrestricted Resource Consumption ⚠️
- **Rate Limiting:** Mitigates DDoS and prevents API resource abuse.

## API8: Security Misconfiguration ⚙️
- **Helmet:** Sets various HTTP security headers.
- **CORS Settings:** Configured to manage cross-origin requests.
- **Generic Error Messages:** Avoids disclosing sensitive information.
- **Validation Checks:** Rate limiting and parameter validations for security.

## API9: Improper Inventory Management 📚
- **Documented Endpoints:** API endpoints are well-documented and monitored.
- **Clean Routing:** Unused or debug routes removed for production.

## File Upload Handling 📤
- **Multer Integration:** Manages file uploads securely.
- **Configuration Limits:** Limits file size and type for secure storage.

## Logging and Monitoring 📊
- **Morgan & Winston:** Used for logging HTTP requests and errors.
- **Security Monitoring:** Aids in detecting and responding to threats.

## Error Handling 💥
- **Generic Error Handlers:** Avoids revealing sensitive application or server details.

## Database Connection 🔗
- **Secure MongoDB Connection:** With proper authentication and encryption.
- **Public Access Restriction:** Ensures database security.

## Environment Variables 🌍
- **Dotenv Management:** Keeps sensitive data like JWT secrets secure.

## Overall Security Practices 🛠️
- **Regular Updates:** Addresses vulnerabilities in dependencies and libraries.
<br>

# 🗃️ Database 🗃️
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/171681203794083840/1174693183184195654/preview.png?ex=65688547&is=65561047&hm=4b09cf4fbe8f97a49a2f7d588c2e79fd5cca9451b11bb26341b53465a95ee10b&" >
</p>
The backbone of this system is MongoDB, a popular NoSQL database known for its flexibility, scalability, and performance.

## 🧐 Why MongoDB for a Social Media Platform? 🧐
*"When you could also just use SQL?  (｡·  v  ·｡)? ..."*

### 🛠 Dynamic & Adaptable Schema
- **Why It Rocks:** In the ever-changing world of social media, nothing stays the same. With this idea in mind I chose MongoDB's because of its flexible schema which means FortiChat can easily evolve. *New features? Different post types? No problem!* 
- **In Simple Words:** It's like having a backpack that magically expands to fit everything, no matter how much stuff you add. ᕙ(  •̀ ᗜ •́  )ᕗ

### 🌌 Handling Diverse Data with Ease
- **Why It's Awesome:** Posts, comments, images, likes - social media is a wild mix of data. MongoDB handles this variety effortlessly, letting FortiChat store and manage all sorts of content.
- **Put Simply:** It’s like a wizard's hat that can hold anything from a rabbit to a bouquet of flowers - all at once! ₍ᐢ. .ᐢ₎ ₊˚⊹♡

### 🚀 Scalability That Grows
- **The Cool Factor:** As more users join FortiChat, MongoDB grows as well! It's built to handle tons of data and users without breaking a sweat.
- **In Human Terms:** Imagine a party where everyone's invited, and the room magically gets bigger as more friends pile in. *ੈ✩‧₊˚

### ⚡ Fast Development & Iteration
- **Why We Love It:** I want to continue tinkering and improving FortiChat. MongoDB’s developer-friendly setup lets me roll out updates quickly.
- **Plain Speak:** It's like cooking in a well-organized kitchen - everything you need is right there, making it a breeze to whip up something new. ‧₊˚ ⋅  𓐐𓎩 ‧₊˚ ⋅

### 📡 Real-Time Data for Instant Connections
- **The Wow Factor:** What’s social media without the 'social' part? MongoDB helps me deliver real-time updates and notifications, keeping the FortiChat community buzzing.
- **In Everyday Words:** It's like having a conversation where replies come instantly - no awkward pauses or delays. ৻( •̀ ᗜ •́ ৻)

### 🤔 So, Why Not SQL?
- **Here's the Deal:** SQL is great, but it's like a well-oiled machine with fixed parts - not ideal for the spontaneity and fluidity of what I had an idea in mind for this project. I also wanted to further develop my NoSQL (specifically MongoDB) skills, but that was besides the point.
- **Bottom Line:** I chose MongoDB because it's like a living, breathing organism that adapts and grows with the community. (๑ᵕ◡ᵕ)(ˆ◡ˆc)

<br>

## 🗺️ Diagram of the Data Model 🗺️

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/171681203794083840/1174689801228779520/Blank_diagram_-_Page_1.png?ex=65688221&is=65560d21&hm=7cc36449382a51054523b3c890242175a1bb486f4cfdce02f2413bc5d5307d02&" width="60%" height="60%">
</p>

Modelled with [Lucidchart](https://lucid.app/)

## 🌟 FortiChat Use Cases 🌟

### 📝 User Registration
- 🆕 Users can **create a new account** by providing their email, name, and password.
- 🔒 The system **securely stores user credentials**, including hashed passwords.

### 🔑 User Login
- 👤 Users can **log in to the platform** using their email and password.
- 🛡️ The system **authenticates users** and issues a JWT for session management.

### 🖼️ Profile Management
- 👀 Users can **view their profile information**, including names, location, occupation, and profile picture.
- 📸 Users have the option to **upload a profile picture**, which is stored securely.

### 👥 Friend System
- 🤝 Users can **send friend requests** to other users.
- 📈 The system **updates the friends list** upon accepting friend requests.

### ✍️ Post Creation
- 📝 Users can **create posts with text** and optionally include images.
- 🤳 All posts are **associated with user details** and can have likes and comments.
- ❗️ Users do not have an option to edit or delete posts, as it’s supposed to be a **diary-style social media**.

### 📰 Feed Interaction
- 📖 Users can **view a feed of posts** made by their friends and other connections.
- 👍 Users can **like posts** in their feed.
- 💬 Users can **comment on posts** in their feed → *To be implemented*

### 🔍 Search Functionality → *WIP*
- 🔎 Users can **search for other users** by name or email.
- 📜 The system **retrieves and displays user profiles** matching the search criteria.

<br>

## ✨ FortiChat Contribution List ✨

### Data Modeling 📊
- Structured MongoDB collections for users, posts, and friendships.

### Datastore Setup 🛠️
- Configured MongoDB to store operational data with efficiency.

### NoSQL Advantages 📈
- Leveraged MongoDB for its schema flexibility and performance.

### Query Optimization ⚡
- Optimized queries and indexes for snappy data retrieval.

### Backup Strategy 💾
- Established backup procedures for disaster recovery with MongoDB.

### Security Integration 🔐
- Applied JWT and bcrypt for secure database interactions.

### Middleware & Validation 🛡️
- Created middleware for rate limiting and secure data validation.

### Error Logging 🚨
- Set up detailed logging for monitoring and operational insight.

<br>

# 🚀 Installation & Setup Guide 🚀
<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6348/6348248.png" width="20%" height="20%">
</p>

This guide will walk you through setting up and running the FortiChat project on your local machine. Before starting, ensure you have Node.js installed and a MongoDB instance ready for use.

## Step 1: Install Node.js ⬇️
Node.js is essential for running the JavaScript backend.
- Download Node.js [here](https://nodejs.org/en/download).
- For a quick start guide on Node.js, visit [Getting Started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/).

## Step 2: Clone the Repository 🧬
```
git clone https://github.com/AGiljanovic/FortiChat.git
cd FortiChat
```
## Step 3: Install Dependencies 🚸
- Install the required npm packages for both frontend and backend.
- Navigate to the frontend and backend directories in separate terminal windows.
- Run ```npm install``` in each directory to install the dependencies listed in package.json.
- Frontend [packages](https://github.com/AGiljanovic/FortiChat/blob/main/client/package.json)
- Backend [packages](https://github.com/AGiljanovic/FortiChat/blob/main/server/package.json)

## Step 4: MongoDB Setup 🗄️
To store and manage application data, set up a MongoDB instance. 
- If you don't have MongoDB, download and install it from [MongoDB Official Site](https://www.mongodb.com/try/download/community).
- For guidance on setting up MongoDB, refer to [MongoDB Installation Guide.](https://www.mongodb.com/docs/manual/installation/).

## Step 5: Configure .env File ⚙️
- Create a .env file in the root of the backend directory and fill in the details:
  
```
MONGO_URL = ""
PORT = 3001
JWT_SECRET = ""
MONGO_DB_NAME = ""
```
- `MONGO_URL`: Your MongoDB connection string.
- `PORT`: The port on which the backend server will run.
- `JWT_SECRET`: A secret key for signing JWT tokens.
- `MONGO_DB_NAME`: Name of your MongoDB database.

## Step 6: Run the Application 🚩
With the setup complete, you can now run the application:
- In the backend directory, run `node index.js` to start the backend server.
- In the frontend directory, run `npm start client` to launch the React application.

## Populate the Database with Initial Data ➕
- To have some initial data in the application, you can populate your database with predefined users and posts. This step is optional but recommended for a better initial experience with FortiChat.
- In the `index.js` file of the backend directory, uncomment the following lines:
```
// Import models and initial data
import User from "./models/user.js";
import Post from "./models/post.js";
import { users, posts } from "./data/index.js";

// Add data to the database (Run this only once to avoid duplicates)
User.insertMany(users);
Post.insertMany(posts);
```
- Save the changes and run your backend server. This will insert the initial users and posts into your MongoDB database.
- **Important:** Once the data is successfully added, comment out these lines again to prevent duplicate entries if you restart the server.
```
// Prevent duplicate data insertion
// User.insertMany(users);
// Post.insertMany(posts);
```
- Restart your backend server to continue with the normal operation of the application.
<br>
Now, your FortiChat application should have some preloaded data to interact with! ٩(ˊᗜˋ*)و ♡
