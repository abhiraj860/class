type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const team: TeamLead = {
    name: "Abhiraj",
    startDate: new Date(),
    department: "Software dev"
};