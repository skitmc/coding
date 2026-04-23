// Navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.id.replace('nav-', '') + '-section';
        showSection(sectionId);
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

document.getElementById('start-learning').addEventListener('click', () => showSection('study-section'));

// Study Guides Content
const studyContent = {
    'html-basics': `
        <h2>HTML Basics</h2>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.</p>
        <h3>Basic Structure</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        <h3>Common Tags</h3>
        <ul>
            <li>&lt;h1&gt; to &lt;h6&gt;: Headings (h1 is largest)</li>
            <li>&lt;p&gt;: Paragraph</li>
            <li>&lt;a href="url"&gt;: Links</li>
            <li>&lt;img src="url" alt="text"&gt;: Images</li>
            <li>&lt;div&gt;: Container for other elements</li>
            <li>&lt;span&gt;: Inline container</li>
            <li>&lt;ul&gt; and &lt;li&gt;: Unordered lists</li>
            <li>&lt;ol&gt; and &lt;li&gt;: Ordered lists</li>
        </ul>
        <h3>Attributes</h3>
        <p>Tags can have attributes that provide additional information:</p>
        <ul>
            <li>id: Unique identifier</li>
            <li>class: CSS class name</li>
            <li>style: Inline CSS</li>
            <li>src: Source URL for images/media</li>
            <li>href: Link destination</li>
        </ul>
    `,
    'html-elements': `
        <h2>HTML Elements</h2>
        <p>HTML elements are the building blocks of HTML pages. They consist of a start tag, content, and an end tag.</p>
        <h3>Block vs Inline Elements</h3>
        <p><strong>Block elements</strong> take up the full width available and start on a new line:</p>
        <ul>
            <li>&lt;div&gt;</li>
            <li>&lt;p&gt;</li>
            <li>&lt;h1&gt;-&lt;h6&gt;</li>
            <li>&lt;ul&gt;, &lt;ol&gt;</li>
            <li>&lt;li&gt;</li>
        </ul>
        <p><strong>Inline elements</strong> only take up as much width as necessary:</p>
        <ul>
            <li>&lt;span&gt;</li>
            <li>&lt;a&gt;</li>
            <li>&lt;img&gt;</li>
            <li>&lt;strong&gt;, &lt;em&gt;</li>
        </ul>
        <h3>Semantic Elements</h3>
        <p>Semantic elements clearly describe their meaning to both browser and developer:</p>
        <ul>
            <li>&lt;header&gt;: Header content</li>
            <li>&lt;nav&gt;: Navigation links</li>
            <li>&lt;main&gt;: Main content</li>
            <li>&lt;section&gt;: Section of content</li>
            <li>&lt;article&gt;: Independent content</li>
            <li>&lt;aside&gt;: Sidebar content</li>
            <li>&lt;footer&gt;: Footer content</li>
        </ul>
    `,
    'css-intro': `
        <h2>CSS Introduction</h2>
        <p>CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML. It controls layout, colors, fonts, and more.</p>
        <h3>Basic Syntax</h3>
        <pre><code>selector {
    property: value;
}</code></pre>
        <p>Example:</p>
        <pre><code>h1 {
    color: blue;
    font-size: 24px;
}</code></pre>
        <h3>Selectors</h3>
        <ul>
            <li>Element selector: <code>p</code> (selects all &lt;p&gt; elements)</li>
            <li>Class selector: <code>.classname</code> (selects elements with class="classname")</li>
            <li>ID selector: <code>#idname</code> (selects element with id="idname")</li>
        </ul>
        <h3>Common Properties</h3>
        <ul>
            <li><code>color</code>: Text color</li>
            <li><code>background-color</code>: Background color</li>
            <li><code>font-size</code>: Font size</li>
            <li><code>margin</code>: Outer spacing</li>
            <li><code>padding</code>: Inner spacing</li>
            <li><code>border</code>: Border around element</li>
        </ul>
    `,
    'js-basics': `
        <h2>JavaScript Basics</h2>
        <p>JavaScript is a programming language that allows you to implement complex features on web pages. It's the third layer of the web standards cake (HTML, CSS, JS).</p>
        <h3>Variables</h3>
        <p>Variables store data values. Use <code>let</code> or <code>const</code>:</p>
        <pre><code>let name = "John";
const age = 25;
let isStudent = true;</code></pre>
        <h3>Data Types</h3>
        <ul>
            <li><strong>String</strong>: Text, e.g., "Hello" or 'Hello'</li>
            <li><strong>Number</strong>: Numbers, e.g., 42 or 3.14</li>
            <li><strong>Boolean</strong>: true or false</li>
            <li><strong>Array</strong>: Ordered list, e.g., [1, 2, 3]</li>
            <li><strong>Object</strong>: Key-value pairs, e.g., {name: "John", age: 25}</li>
            <li><strong>undefined</strong>: Variable declared but not assigned</li>
            <li><strong>null</strong>: Intentional absence of value</li>
        </ul>
        <h3>Operators</h3>
        <ul>
            <li>Arithmetic: +, -, *, /, %</li>
            <li>Comparison: ==, ===, !=, !==, <, >, <=, >=</li>
            <li>Logical: && (and), || (or), ! (not)</li>
            <li>Assignment: =, +=, -=, etc.</li>
        </ul>
    `,
    'js-functions': `
        <h2>JavaScript Functions</h2>
        <p>Functions are reusable blocks of code that perform a specific task. They help organize and reuse code.</p>
        <h3>Function Declaration</h3>
        <pre><code>function greet(name) {
    return "Hello " + name;
}

let message = greet("John"); // "Hello John"</code></pre>
        <h3>Function Expression</h3>
        <pre><code>const greet = function(name) {
    return "Hello " + name;
};</code></pre>
        <h3>Arrow Functions (ES6)</h3>
        <pre><code>const greet = (name) => "Hello " + name;

const add = (a, b) => a + b;</code></pre>
        <h3>Parameters and Arguments</h3>
        <p>Parameters are variables in the function definition. Arguments are the values passed when calling the function.</p>
        <pre><code>function multiply(a, b) { // a and b are parameters
    return a * b;
}

multiply(5, 3); // 5 and 3 are arguments</code></pre>
    `,
    'js-dom': `
        <h2>DOM Manipulation</h2>
        <p>The DOM (Document Object Model) is a programming interface for HTML documents. It represents the page as a tree of objects that can be manipulated with JavaScript.</p>
        <h3>Selecting Elements</h3>
        <pre><code>// By ID
let element = document.getElementById('myId');

// By class name
let elements = document.getElementsByClassName('myClass');

// By tag name
let paragraphs = document.getElementsByTagName('p');

// By CSS selector
let element = document.querySelector('#myId');
let elements = document.querySelectorAll('.myClass');</code></pre>
        <h3>Changing Content</h3>
        <pre><code>// Change text content
element.textContent = "New text";

// Change HTML content
element.innerHTML = "&lt;p&gt;New &lt;strong&gt;HTML&lt;/strong&gt;&lt;/p&gt;";</code></pre>
        <h3>Changing Styles</h3>
        <pre><code>element.style.color = "blue";
element.style.fontSize = "20px";

// Add/remove classes
element.classList.add('highlight');
element.classList.remove('highlight');
element.classList.toggle('active');</code></pre>
        <h3>Event Listeners</h3>
        <pre><code>element.addEventListener('click', function() {
    alert('Clicked!');
});

// Or with arrow function
element.addEventListener('click', () => {
    alert('Clicked!');
});</code></pre>
    `
};

document.querySelectorAll('#study-topics a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const topic = e.target.dataset.topic;
        document.getElementById('study-content').innerHTML = studyContent[topic];
    });
});

// Challenges
const challenges = [
    {
        title: "Hello World HTML",
        type: "html",
        task: "Create an <h1> tag that says 'Hello World'",
        hint: "Use &lt;h1&gt;Hello World&lt;/h1&gt;",
        solution: (code) => code.includes('<h1>') && code.includes('Hello World') && code.includes('</h1>')
    },
    {
        title: "The Blue Button",
        type: "html",
        task: "Create a <button> with the text 'Click Me' and set its style to blue.",
        hint: "Use &lt;button style=\"background-color: blue;\"&gt;Click Me&lt;/button&gt;",
        solution: (code) => code.includes('<button') && code.includes('Click Me') && code.includes('blue')
    },
    {
        title: "Image Add",
        type: "html",
        task: "Add an <img> tag with any source URL.",
        hint: "Use &lt;img src=\"https://example.com/image.jpg\" alt=\"Description\"&gt;",
        solution: (code) => code.includes('<img') && code.includes('src=')
    },
    {
        title: "Paragraph and Link",
        type: "html",
        task: "Create a paragraph with text and a link inside it.",
        hint: "Use &lt;p&gt;Text &lt;a href=\"url\"&gt;link&lt;/a&gt;&lt;/p&gt;",
        solution: (code) => code.includes('<p>') && code.includes('<a') && code.includes('href=')
    },
    {
        title: "Hello World JS",
        type: "js",
        task: "Write code to log 'Hello World' to the console.",
        hint: "Use console.log('Hello World');",
        solution: (code) => code.includes("console.log('Hello World')") || code.includes('console.log("Hello World")')
    },
    {
        title: "Variable Declaration",
        type: "js",
        task: "Declare a variable 'name' with value 'John'.",
        hint: "Use let name = 'John';",
        solution: (code) => code.includes("let name = 'John'") || code.includes('let name = "John"')
    },
    {
        title: "Simple Function",
        type: "js",
        task: "Create a function that returns 'Hello'.",
        hint: "function hello() { return 'Hello'; }",
        solution: (code) => code.includes('function') && code.includes('return') && (code.includes("'Hello'") || code.includes('"Hello"'))
    },
    {
        title: "Array Creation",
        type: "js",
        task: "Create an array with numbers 1, 2, 3.",
        hint: "let arr = [1, 2, 3];",
        solution: (code) => code.includes('[1, 2, 3]')
    },
    {
        title: "Object Creation",
        type: "js",
        task: "Create an object with name and age properties.",
        hint: "let person = {name: 'John', age: 25};",
        solution: (code) => code.includes('{') && code.includes('name:') && code.includes('age:')
    },
    {
        title: "DOM Selection",
        type: "js",
        task: "Select an element with id 'myDiv' and change its text.",
        hint: "document.getElementById('myDiv').textContent = 'New text';",
        solution: (code) => code.includes("getElementById('myDiv')") && code.includes('textContent')
    }
];

let currentChallengeIndex = null;
const editor = document.getElementById('code-editor');
const outputWindow = document.getElementById('output-window');
const errorOutput = document.getElementById('error-output');
const runBtn = document.getElementById('run-btn');
const hintBtn = document.getElementById('hint-btn');
const challengeList = document.getElementById('challenge-list');
const taskTitle = document.getElementById('current-task');

// Initialize Challenges
challenges.forEach((ch, index) => {
    const div = document.createElement('div');
    div.classList.add('challenge-item');
    div.innerText = `${index + 1}. ${ch.title}`;
    div.onclick = () => loadChallenge(index);
    challengeList.appendChild(div);
});

// Load a Challenge
function loadChallenge(index) {
    currentChallengeIndex = index;
    const ch = challenges[index];
    taskTitle.innerText = ch.task;
    editor.value = ""; // Clear editor
    outputWindow.innerHTML = ""; // Clear output
    errorOutput.innerHTML = ""; // Clear errors
    
    // UI Visual update
    document.querySelectorAll('.challenge-item').forEach(el => el.classList.remove('active'));
    challengeList.children[index].classList.add('active');
}

// Run Code
runBtn.addEventListener('click', () => {
    const code = editor.value;
    const ch = challenges[currentChallengeIndex];
    
    if (ch.type === 'html') {
        // For HTML, display in output as HTML
        outputWindow.innerHTML = code;
    } else if (ch.type === 'js') {
        // For JS, execute and show output/errors
        try {
            // Clear previous
            outputWindow.innerHTML = "";
            errorOutput.innerHTML = "";
            
            // Capture console.log
            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args);
            };
            
            // Execute code
            eval(code);
            
            // Restore console.log
            console.log = originalLog;
            
            // Display logs
            outputWindow.innerHTML = logs.join('<br>');
        } catch (error) {
            errorOutput.innerHTML = `Error: ${error.message}`;
        }
    }
    
    // Check solution
    if (ch.solution(code)) {
        outputWindow.innerHTML += '<br><br>✅ Correct! Nice job.';
        document.getElementById('score').innerText = parseInt(document.getElementById('score').innerText) + 10;
    } else {
        errorOutput.innerHTML += '<br>❌ Not quite. Check your code!';
    }
});

// Hint
hintBtn.addEventListener('click', () => {
    if (currentChallengeIndex !== null) {
        alert(challenges[currentChallengeIndex].hint);
    }
});

// Quizzes
const quizzes = {
    html: [
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            question: "Which tag is used for the largest heading?",
            options: ["&lt;head&gt;", "&lt;h1&gt;", "&lt;header&gt;"],
            correct: 1
        },
        {
            question: "What attribute is used to provide alternative text for images?",
            options: ["title", "alt", "src"],
            correct: 1
        },
        {
            question: "Which element is used for creating an unordered list?",
            options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;"],
            correct: 1
        },
        {
            question: "What is the correct way to create a hyperlink?",
            options: ["&lt;link href=\"url\"&gt;", "&lt;a url=\"link\"&gt;", "&lt;a href=\"url\"&gt;"],
            correct: 2
        }
    ],
    js: [
        {
            question: "What is the correct way to declare a variable in JavaScript?",
            options: ["var x = 5;", "variable x = 5;", "v x = 5;"],
            correct: 0
        },
        {
            question: "How do you write a single-line comment in JavaScript?",
            options: ["// comment", "&lt;!-- comment --&gt;", "# comment"],
            correct: 0
        },
        {
            question: "Which operator is used for strict equality in JavaScript?",
            options: ["==", "===", "=", "!=="],
            correct: 1
        },
        {
            question: "What will 'typeof null' return?",
            options: ["null", "undefined", "object"],
            correct: 2
        },
        {
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correct: 0
        }
    ]
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;

document.getElementById('html-quiz-btn').addEventListener('click', () => startQuiz('html'));
document.getElementById('js-quiz-btn').addEventListener('click', () => startQuiz('js'));

function startQuiz(type) {
    currentQuiz = quizzes[type];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz[currentQuestionIndex];
    document.getElementById('question-display').innerText = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('quiz-result').innerText = '';
}

function checkAnswer(selected) {
    const q = currentQuiz[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach((btn, index) => {
        if (index === q.correct) {
            btn.classList.add('correct');
        } else if (index === selected) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });
    if (selected === q.correct) {
        score++;
        document.getElementById('quiz-result').innerText = 'Correct!';
    } else {
        document.getElementById('quiz-result').innerText = 'Incorrect.';
    }
    document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        document.getElementById('quiz-questions').style.display = 'none';
        document.getElementById('quiz-content').style.display = 'block';
        document.getElementById('quiz-content').innerHTML = `<p>Quiz completed! Score: ${score}/${currentQuiz.length}</p><button onclick="location.reload()">Restart</button>`;
    }
});