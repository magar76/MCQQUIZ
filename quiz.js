const questions = {
    python: [
        { question: "Which of the following is a Python web framework?", options: ["Django", "Flask", "Ruby on Rails", "Both A and B"], answer: 3 },
        
            {
                question: "What is the correct way to declare a variable in Python?",
                options: ["x = 10", "int x = 10", "var x : int = 10", "10 = x"],
                answer: "x = 10"
            },
            {
                question: "Which of the following is a valid keyword in Python?",
                options: ["def", "function", "var", "float32"],
                answer: "def"
            },
            {
                question: "What is the output of the following code: print(5 + 5)?",
                options: ["55", "10", "Error", "5 + 5"],
                answer: "10"
            },
            {
                question: "Which of the following data types is not a built-in type in Python?",
                options: ["int", "float", "String", "list"],
                answer: "String"
            },
            {
                question: "How do you create a single-line comment in Python?",
                options: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
                answer: "# This is a comment"
            },
            {
                question: "What is the default value of a boolean variable in Python?",
                options: ["true", "false", "None", "0"],
                answer: "false"
            },
            {
                question: "Which method is used to read a file in Python?",
                options: ["read()", "open()", "input()", "get()"],
                answer: "open()"
            },
            {
                question: "Which of these access modifiers is not present in Python?",
                options: ["public", "protected", "private", "default"],
                answer: "default"
            },
            {
                question: "What will be the output of this code: print(10 == 10)?",
                options: ["true", "false", "10", "Error"],
                answer: "true"
            },
            {
                question: "Which statement is used to handle exceptions in Python?",
                options: ["try-except", "catch-throw", "throw-except", "try-finally"],
                answer: "try-except"
            },
            {
                question: "What is the size of an int in Python?",
                options: ["4 bytes", "8 bytes", "Variable size", "32 bits"],
            },   
        
    
    ],
    java: [
        { question: "What is Java?", options: ["A coffee", "A programming language", "An island", "A car"], answer: 1 },
        // Add more questions here
    ],
    cpp: [
        { question: "What is the extension of C++ files?", options: [".cpp", ".c", ".cxx", ".cc"], answer: 0 },
        { question: "What is a class?", options: ["Blueprint for objects", "Function", "Variable", "Library"], answer: "Blueprint for objects" },
        {
            question: "What is the correct way to declare a variable in C++?",
            options: ["int 1x;", "int x;", "int x; float y;", "All of the above"],
            answer: 1
        },
        {
            question: "Which of the following is a valid comment in C++?",
            options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "Both A and B"],
            answer: 3
        },
        {
            question: "What is the output of the following code: int x = 5; std::cout << x + 2;",
            options: ["5", "7", "52", "x + 2"],
            answer: 1
        },
        {
            question: "Which keyword is used to create a class in C++?",
            options: ["class", "struct", "object", "define"],
            answer: 0
        },
        {
            question: "What does the public keyword mean in a class?",
            options: ["Members are accessible only within the class.", "Members are accessible from outside the class.", "Members are private by default.", "None of the above."],
            answer: 1
        },
        {
            question: "What will happen if you attempt to compile the following code: int x = 10; x = 'Hello';?",
            options: ["It will compile successfully.", "It will result in a runtime error.", "It will result in a compilation error.", "None of the above."],
            answer: 2
        },
        {
            question: "Which operator is used for incrementing a variable in C++?",
            options: ["++", "--", "+=", "=="],
            answer: 0
        },
        {
            question: "What is the default access specifier for members of a class in C++?",
            options: ["public", "protected", "private", "friend"],
            answer: 2
        },
        {
            question: "Which of the following is not a basic data type in C++?",
            options: ["int", "float", "string", "char"],
            answer: 2
        },
        {
            question: "What is the purpose of the main() function in C++?",
            options: ["To define a class.", "To return a value.", "It is the entry point of the program.", "To declare variables."],
            answer: 2
        },
        // ... Add 40 more questions here in the same format
        {
            question: "Which keyword is used to define a function in C++?",
            options: ["func", "def", "function", "void"],
            answer: 3
        },
        {
            question: "What does the 'return' statement do?",
            options: ["Exits the function", "Returns a value to the caller", "Both A and B", "None of the above"],
            answer: 2
        },
        // Add 9 more questions
    ],
    JAVA: [
            { question: "Which is a popular Java IDE?", options: ["Eclipse", "NetBeans", "IntelliJ", "All of the above"], answer: 3 },
        
            {
                question: "What is the correct way to declare a variable in Java?",
                options: ["int x = 10;", "int 10 = x;", "int x := 10;", "var x = 10;"],
                answer: "int x = 10;"
            },
            {
                question: "Which of the following is a valid keyword in Java?",
                options: ["void", "function", "var", "float32"],
                answer: "void"
            },
            {
                question: "What is the output of the following code: System.out.println(5 + 5);?",
                options: ["55", "10", "Error", "5 + 5"],
                answer: "10"
            },
            {
                question: "Which of the following data types is not a primitive data type in Java?",
                options: ["int", "boolean", "String", "char"],
                answer: "String"
            },
            {
                question: "How do you create a single-line comment in Java?",
                options: ["// This is a comment", "# This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
                answer: "// This is a comment"
            },
            {
                question: "What is the default value of a boolean variable in Java?",
                options: ["true", "false", "null", "0"],
                answer: "false"
            },
            {
                question: "Which method is the entry point of a Java application?",
                options: ["start()", "run()", "main()", "init()"],
                answer: "main()"
            },
            {
                question: "Which of these access modifiers is the most restrictive?",
                options: ["public", "protected", "private", "default"],
                answer: "private"
            },
            {
                question: "What will be the output of this code: System.out.println(10 == 10);?",
                options: ["true", "false", "Error", "10"],
                answer: "true"
            },
            {
                question: "Which of the following is used to handle exceptions in Java?",
                options: ["try-catch", "throw-catch", "catch-finally", "finally-try"],
                answer: "try-catch"
            },
            {
                question: "What is the size of an int in Java?",
                options: ["8 bits", "16 bits", "32 bits", "64 bits"],
                answer: "32 bits"
            },
            {
                question: "Which of these is not a valid variable name in Java?",
                options: ["varName", "2ndVar", "$varName", "_varName"],
                answer: "2ndVar"
            },
            {
                question: "Which of the following statements is true about Java?",
                options: ["Java is platform-dependent.", "Java is a compiled language.", "Java supports multiple inheritance.", "Java is a low-level language."],
                answer: "Java is a compiled language."
            },
            {
                question: "Which collection is used to store key-value pairs in Java?",
                options: ["List", "Map", "Set", "Array"],
                answer: "Map"
            },
            {
                question: "What is the keyword used to inherit a class in Java?",
                options: ["extends", "implements", "inherits", "base"],
                answer: "extends"
            },
            {
                question: "What is the result of 3 * 2 + 1?",
                options: ["7", "6", "5", "8"],
                answer: "7"
            },
            {
                question: "What is a constructor in Java?",
                options: ["A method that creates a new object", "A method that initializes an object", "A special method to destroy an object", "A method to print object values"],
                answer: "A method that initializes an object"
            },
            {
                question: "Which of the following is a valid way to declare an array in Java?",
                options: ["int[] arr;", "arr int[];", "int arr[];", "Both a and c"],
                answer: "Both a and c"
            },
            {
                question: "Which interface does the Collection framework not implement?",
                options: ["List", "Set", "Map", "Array"],
                answer: "Array"
            },
            {
                question: "What does JVM stand for?",
                options: ["Java Variable Machine", "Java Visual Machine", "Java Virtual Machine", "Java Version Machine"],
                answer: "Java Virtual Machine"
            },
            {
                question: "Which of the following is a wrapper class for int in Java?",
                options: ["Integer", "Int", "Number", "Float"],
                answer: "Integer"
            },
            {
                question: "What is the output of 'System.out.println(10 + 20 + \"Hello\");'?",
                options: ["30Hello", "Hello30", "Hello10", "Error"],
                answer: "30Hello"
            },
            {
                question: "Which loop is guaranteed to execute at least once?",
                options: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
                answer: "do-while loop"
            },
            {
                question: "What keyword is used to define an interface in Java?",
                options: ["interface", "implements", "abstract", "class"],
                answer: "interface"
            },
            {
                question: "What will be the result of the expression 5 % 2?",
                options: ["2", "1", "0", "5"],
                answer: "1"
            },
            {
                question: "Which keyword is used to prevent method overriding in Java?",
                options: ["final", "static", "private", "protected"],
                answer: "final"
            },
            {
                question: "What is the purpose of the 'static' keyword in Java?",
                options: ["To define a constant", "To allocate memory", "To define a class method", "To prevent inheritance"],
                answer: "To define a class method"
            },
            {
                question: "Which of these classes is part of Java's exception handling?",
                options: ["String", "System", "Throwable", "ExceptionHandler"],
                answer: "Throwable"
            },
            {
                question: "What will happen if you divide an integer by zero in Java?",
                options: ["Return zero", "Return infinity", "Throw ArithmeticException", "Return null"],
                answer: "Throw ArithmeticException"
            },
            {
                question: "How do you declare a constant in Java?",
                options: ["const int x = 10;", "final int x = 10;", "int x = final 10;", "constant int x = 10;"],
                answer: "final int x = 10;"
            },
            {
                question: "What is the primary purpose of the 'this' keyword?",
                options: ["To refer to the current object", "To refer to the parent class", "To create a new instance", "To call static methods"],
                answer: "To refer to the current object"
            },
            {
                question: "What type of loop will not execute if the condition is false?",
                options: ["for loop", "while loop", "do-while loop", "Both a and b"],
                answer: "Both a and b"
            },
            {
                question: "What is the default access modifier for a class in Java?",
                options: ["public", "private", "protected", "default"],
                answer: "default"
            },
            {
                question: "What is method overloading?",
                options: ["Defining multiple methods with the same name but different parameters", "Redefining a method in a subclass", "Using methods of one class in another", "Creating multiple classes in a package"],
                answer: "Defining multiple methods with the same name but different parameters"
            },
            {
                question: "What is a package in Java?",
                options: ["A group of classes", "A method of data hiding", "A collection of variables", "A collection of interfaces"],
                answer: "A group of classes"
            },
            {
                question: "What does 'public static void main(String[] args)' signify?",
                options: ["Main method for starting the program", "Method to run in the background", "Main method to connect classes", "None of the above"],
                answer: "Main method for starting the program"
            },
            {
                question: "Which of the following statements is used to exit from a loop in Java?",
                options: ["exit", "break", "stop", "return"],
                answer: "break"
            },
            {
                question: "What is the result of the expression 'true && false'?",
                options: ["true", "false", "Error", "null"],
                answer: "false"
            },
            {
                question: "Which of the following is not a valid Java identifier?",
                options: ["$myVar", "_myVar", "2myVar", "myVar"],
                answer: "2myVar"
            },
            {
                question: "What is the output of the following code: System.out.println(10 == 10 && 5 < 3);?",
                options: ["true", "false", "10", "Error"],
                answer: "false"
            },
    ],
    c: [
        { question: "What is the correct way to declare a variable in Python?",
            options: ["x = 10", "int x = 10", "var x : int = 10", "10 = x"],
            answer: "x = 10"
        },
        {
            question: "Which of the following is a valid keyword in Python?",
            options: ["def", "function", "var", "float32"],
            answer: "def"
        },
        {
            question: "What is the output of the following code: print(5 + 5)?",
            options: ["55", "10", "Error", "5 + 5"],
            answer: "10"
        },
        {
            question: "Which of the following data types is not a built-in type in Python?",
            options: ["int", "float", "String", "list"],
            answer: "String"
        },
        {
            question: "How do you create a single-line comment in Python?",
            options: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
            answer: "# This is a comment"
        },
        {
            question: "What is the default value of a boolean variable in Python?",
            options: ["true", "false", "None", "0"],
            answer: "false"
        },
        {
            question: "Which method is used to read a file in Python?",
            options: ["read()", "open()", "input()", "get()"],
            answer: "open()"
        },
        {
            question: "Which of these access modifiers is not present in Python?",
            options: ["public", "protected", "private", "default"],
            answer: "default"
        },
        {
            question: "What will be the output of this code: print(10 == 10)?",
            options: ["true", "false", "10", "Error"],
            answer: "true"
        },
        {
            question: "Which statement is used to handle exceptions in Python?",
            options: ["try-except", "catch-throw", "throw-except", "try-finally"],
            answer: "try-except"
        },
        {
            question: "What is the size of an int in Python?",
            options: ["4 bytes", "8 bytes", "Variable size", "32 bits"],
        },
         
    
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedSubject = new URLSearchParams(window.location.search).get('subject');
let quizQuestions = shuffleArray(questions[selectedSubject]); // Shuffle questions
let timer;

document.addEventListener('DOMContentLoaded', () => {
    startTimer(15 * 60); // 15 minutes in seconds
    loadQuestion();
    document.getElementById('nextButton').addEventListener('click', nextQuestion);
});

function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        let q = quizQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = q.question;
        let optionsHtml = '';
        q.options.forEach((option, index) => {
            optionsHtml += `<div><input type="radio" name="option" value="${index}"> ${option}</div>`;
        });
        document.getElementById('options').innerHTML = optionsHtml;
    } else {
        showScore();
    }
}

function nextQuestion() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (parseInt(selectedOption.value) === quizQuestions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert('Please select an option!');
    }
}

function showScore() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('scoreContainer').style.display = 'block';
    document.getElementById('score').innerText = score;
    clearInterval(timer);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer(duration) {
    let timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        timerDisplay.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (--duration < 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}
