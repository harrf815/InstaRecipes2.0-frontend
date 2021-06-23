
const URL = 'http://localhost:3000'

const token = () => localStorage.getItem('token')

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

const signup = data => {
    return fetch(`${URL}/signup`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const API = {
    auth: {
        signup, 
    }
}