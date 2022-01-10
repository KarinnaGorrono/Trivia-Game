// @ts-ignore
export const hpApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10',
    timeout: 3000
})