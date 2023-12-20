const success_200 = (response: Record<string, unknown>) => {
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

const error_400 = (response: Record<string, unknown>) => {
    return {
        statusCode: 400,
        body: JSON.stringify(response)
    }
}

export {
    success_200,
    error_400
}