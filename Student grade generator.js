function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

function studentGradeGenerator() {
    let marks = parseFloat(prompt("Enter student's marks (0-100):"));
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade = calculateGrade(marks);
        console.log(`The grade for marks ${marks} is ${grade}.`);
    } else {
        console.log("Invalid input. Marks should be between 0 and 100.");
    }
}

// Example usage:
studentGradeGenerator();
