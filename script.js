const challenges = [
    {
        title: "Hello World",
        task: "Create an <h1> tag that says 'Hello World'",
        solution: "<h1>Hello World</h1>"
    },
    {
        title: "The Blue Button",
        task: "Create a <button> with the text 'Click Me' and set its style to blue.",
        solution: "blue" // We'll check if the string exists in the code
    },
    {
        title: "Image Add",
        task: "Add an <img> tag with any source URL.",
        solution: "<img"
    }
];

let currentChallengeIndex = null;
const editor = document.getElementById('code-editor');
const preview = document.getElementById('preview-window');
const runBtn = document.getElementById('run-btn');
const challengeList = document.getElementById('challenge-list');
const taskTitle = document.getElementById('current-task');

// 1. Initialize Challenges
challenges.forEach((ch, index) => {
    const div = document.createElement('div');
    div.classList.add('challenge-item');
    div.innerText = `${index + 1}. ${ch.title}`;
    div.onclick = () => loadChallenge(index);
    challengeList.appendChild(div);
});

// 2. Load a Challenge
function loadChallenge(index) {
    currentChallengeIndex = index;
    taskTitle.innerText = challenges[index].task;
    editor.value = ""; // Clear editor
    updatePreview(); // Clear preview
    
    // UI Visual update
    document.querySelectorAll('.challenge-item').forEach(el => el.classList.remove('active'));
    challengeList.children[index].classList.add('active');
}

// 3. The Magic: Update Preview
function updatePreview() {
    const code = editor.value;
    const previewDoc = preview.contentDocument || preview.contentWindow.document;
    
    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
}

// 4. Run and Check Answer
runBtn.addEventListener('click', () => {
    updatePreview();
    
    if (currentChallengeIndex !== null) {
        const userCode = editor.value.toLowerCase();
        const solution = challenges[currentChallengeIndex].solution.toLowerCase();
        
        if (userCode.includes(solution)) {
            alert("✅ Correct! Nice job.");
            document.getElementById('score').innerText = parseInt(document.getElementById('score').innerText) + 10;
        } else {
            alert("❌ Not quite. Check your tags!");
        }
    }
});

// Optional: Live update as you type
editor.addEventListener('input', updatePreview);