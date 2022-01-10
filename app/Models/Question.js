export class Question {
    constructor(data) {
        // this.category = data.category;
        // this.type = data.type;
        // this.difficulty = data.difficulty;
        this.question = data.question;
        this.correct_answer = data.correct_answer;
        this.incorrect_answer = data.incorrect_answer;

    }

    get Template() {
        return `
       
                
                `
    }

}





