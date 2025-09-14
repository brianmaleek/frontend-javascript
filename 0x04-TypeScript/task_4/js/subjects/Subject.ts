// Subject.ts
// Define the Subject interface within the Subjects namespace
namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(teacher:Teacher) {
            this.teacher = teacher;
        }
    }
}
