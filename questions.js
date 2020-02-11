const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'Input',
        message: 'What is your Current Occupation?',
        name: 'Occupation',
    },
    {
        type: 'Input',
        message: 'What Projects have you worked on?',
        name: 'Projects',
    },
    {
        type: 'checkbox',
        message: 'What languages do you mostly use?',
        name: 'languages',
        choices: ['HTML', 'CSS', 'JavaScript', 'SQL',]
    },
    {
        type: 'Input',
        message: 'What are you biggest strengths when it comes to coding?',
        name: 'Strength',
    },
    {
        type: 'checkbox',
        message: 'What are your favorite sports',
        name: 'Hobbies',
        choices: ['Basketball', 'Football', 'Baseball', 'Soccer',]
    },
    {
        type: 'checkbox',
        message: 'What Online Resources do you mostly rely on?',
        name: 'Resources',
        choices: ['W3Schools', 'Stackflow', 'Google', 'Github', 'Youtube']
    },
    {
        type: 'Input',
        message: 'How do you keep your technology skills current?',
        name: 'technology',
    },
    {
        type: 'checkbox',
        message: 'What IT certificates do you Own?',
        name: 'Certificates',
        choices: ['CDP', 'AWS', 'CEH', 'CSM', 'PMP']
    },







]
module.exports = questions
