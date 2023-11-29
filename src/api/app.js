import client from "@/apolloClient"

const getPredictions = (data) => {
    client.post('/predictions', data)
        .then(response => {
            return response.predictions
        })
        .catch(err => {
            throw err
        })
}

export {
    getPredictions
}