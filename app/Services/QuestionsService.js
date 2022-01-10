import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { hpApi } from "./AxiosService.js"

class QuestionsService {
    async getRandomQuestion() {



        let res = await hpApi.get('')

        console.log(res.data)

        // res.data = res.data.results.filter(q => q.difficulty)

        let questions = res.data.results.map(q => new Question(q))

        let randomQuestion = res.data.results[Math.floor(Math.random() * questions.length)]



        console.log('questions in ProxyState', questions)

        ProxyState.questions = questions
    }



}


export const questionsService = new QuestionsService()