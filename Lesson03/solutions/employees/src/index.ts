type TDeparment = 'HR' | 'Finance' | 'IT' | 'Sales' | 'General Services';
type TEducationalLevel = { level: 0, name: 'none' } | { level: 1, name: 'primary' } | { level: 2, name: 'secondary' } | { level: 3, name: 'tertiary' };

class Employee {
	#CPR: string;
	#firstName: string;
	#lastName: string;
	#department: TDeparment;
	#baseSalary: number;
	#educationalLevel: TEducationalLevel;
	#dateOfBirth: Date;
	#dateOfEmployment: Date;
	#country: string;

	getSalary() {
		return this.#baseSalary + (this.#educationalLevel.level * 1220);
	}

	getDiscount() {
		const yearsOfEmployment = new Date().getFullYear() - this.#dateOfEmployment.getFullYear();

		return yearsOfEmployment * 0.5
	}

	getShippingCost() {
		let percentage: number;
		switch (this.#country) {
			case 'Denmark':
			case 'Norway':
			case 'Sweeden':
				percentage = 0;
				break;
			case 'Iceland':
			case 'Finland':
				percentage = 50;
				break;
			default:
				percentage = 100;
				break;
		}

		return percentage;
	}

	// getters

	getCPR() {
		return this.#CPR;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getDepartment() {
		return this.#department;
	}

	getBaseSalary() {
		return this.#baseSalary;
	}

	getEducationalLevel() {
		return this.#educationalLevel.name;
	}

	getDateOfBirth() {
		return this.#dateOfBirth;
	}

	getDateOfEmployment() {
		return this.#dateOfEmployment;
	}

	getCountry() {
		return this.#country;
	}
}

export default Employee;
