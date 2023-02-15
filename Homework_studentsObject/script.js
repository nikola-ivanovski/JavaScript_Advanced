console.log('Connected');

function Academy(name, students = [], subjects = [], start, end) {
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

function Subject(title, isElective = true, academy, students) {
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

function Student(firstName, lastName, age) {
    this.firstName = firstName === undefined ? "unnamed" : firstName;
    this.lastName = lastName === undefined ? "unnamed" : lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy) {
        this.academy = academy;
        let arr = Array.from(academy.students); // tuka pretvoram vo array za da raboti .push()
        arr.push(this);
        console.log(academy)
    }
    this.startSubject = function(subject) {
        if (this.academy !== null && String(this.academy.subjects).indexOf(subject) === -1) { // tuka go smeniv namesto includes go staviv indexOf i mu staviv da bide String
            this.currentSubject = subject;
            
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }
            console.log(subject);
            let arr = Array.from(subject.students); // isto taka i tuka pretvoram vo niza za da raboti push()
            arr.push(this); 
        } else {
            console.error('Current subject not found')
        }
    };
};

let academyOne = Object.create(new Academy('SEDC', 30, 10, '17.10.2022', '12.10.2023'));
let student = Object.create(new Student('Nikola', 'Ivanovski', 26));
let subject = Object.create(new Subject('JavaScript', true, academyOne, 30));

student.startAcademy(academyOne);
student.startSubject(subject);
subject.overrideClasses(4)