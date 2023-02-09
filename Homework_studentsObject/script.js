console.log('Connected');

function Academy(name, students, subjects, start, end) {
    this.name = name === undefined ? "unnamed" : name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function() {
        this.students.forEach(student => console.log(student))
    };
    this.printSubjects = function() {
        this.subjects.forEach(subject => console.log(subject))
    };
};

let newAcademy = Object.create(new Academy('SEDC', ['Nikola', 'Dragisha', 'Mice', 'Dimitar'], ['React.js', 'Node.js', 'Angular.js', 'JavaScript'], '14.05', '22.2'));
console.log('Academy object',newAcademy);
newAcademy.printStudents(); // Nikola, Dragisha, Mice, Dimitar
newAcademy.printSubjects(); // React.js, Node.js, Angular.js, Javascript
console.log(newAcademy.numberOfClasses)


function Subject(name, students, subjects, start, end, title, isElective = true) {
    Object.setPrototypeOf(this, new Academy(name, students, subjects, start, end));
    this.title = title === undefined ? "unnamed" : title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy =  Academy;
    this.students = students;
    this.overrideClasses = function(num) {
        if (num >= 3) {
            this.numberOfClasses = num;
        } else {
            console.error('Number of classes can not be smaller than 3.')
        }
    };
};

let newSubject = Object.create(new Subject('React.js', false, ['Nikola', 'Dragisha', 'Denis', 'Hristijan']));
console.log('Subject object',newSubject);
newSubject.overrideClasses(4);
newSubject.academy[newAcademy];
console.log(newSubject.academy); // go vrakja samiot template, kako da go vrakja newAcademy objektot??


function Student(name, students, subjects, start, end, title, isElective = true, firstName, lastName, age, completedSubjects = []) {
    Object.setPrototypeOf(this, new Subject(name, students, subjects, start, end, title, isElective = true))
    this.firstName = firstName === undefined ? "unnamed" : firstName;
    this.lastName = lastName === undefined ? "unnamed" : lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy) {
        this.Academy = academy; // kreira nov key: value pair namesto da go apdejtira academy
        academy.students.push(this); // vrakja error - undefined
        console.log(academy.students)
    }
    this.startSubject = function(subject) {
        // console.log(this.Academy) // vrakja undefined
        Academy.subjects = subject;
        if (this.Academy && this.Academy.subjects.includes(subject)) { // isto vrakja error - undefined
            
            this.currentSubject = subject;
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
            console.log(subject); // mi vrakja JavaScript od 79 linija
            subject.students.push(this); // undefined - ne go naogja od Academy students
        } else {
            console.log('Error: currentSubject')
        }
    };
};

let newStudent = Object.create(new Student('Nikola', 'Ivanovski', 26, ['React','Node', 'Angular']));

// newStudent.startAcademy('SEDC');
newStudent.startSubject('JavaScript')
console.log(newStudent)
