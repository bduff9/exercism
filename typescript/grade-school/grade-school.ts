export default class GradeSchool {
	private roster = new Map<string, Array<string>>();
	private students = new Map<string, number>();

	constructor() {}

	addStudent(name: string, grade: number): void {
		const studentGrade = this.students.get(name);

		if (studentGrade !== undefined) {
			if (studentGrade !== grade) {
				this.removeStudent(name, studentGrade);
			} else if (studentGrade === grade) {
				// Nothing to do here, don't duplicate this already added student
				return;
			}
		}

		const gradeRoster = this.roster.get(`${grade}`) || [];
		const newGradeRoster = [...gradeRoster, name].sort();

		this.roster.set(`${grade}`, newGradeRoster);
		this.students.set(name, grade);
	}

	removeStudent(name: string, grade: number): void {
		const gradeRoster = this.roster.get(`${grade}`) || [];
		const newGradeRoster = gradeRoster.filter(student => student !== name);

		this.roster.set(`${grade}`, newGradeRoster);
	}

	studentRoster(): Map<string, Array<string>> {
		const roster = new Map<string, Array<string>>();

		this.roster.forEach((students, grade) => {
			roster.set(grade, [...students]);
		});

		return roster;
	}

	studentsInGrade(grade: number): Array<string> {
		return [...(this.roster.get(`${grade}`) || [])];
	}
}
