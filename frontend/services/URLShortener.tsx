type ShortenURLRequest = {
    full_url: string
}

type ShortenURLResponse = {
    id?: string
    expiry_time?: Date
    hash?: string
    full_url?: string
}

export class URLShortenerService {
    host: string;

    constructor(host: string = "http://localhost:8000") {
        this.host = host
    }

    async shortenURL(request: ShortenURLRequest): Promise<ShortenURLResponse> {
        const shortenURLPath = this.host + "/shorten/"
        const payload = JSON.stringify(request)
        console.log(payload)
        const response = await fetch(shortenURLPath, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })

        if (Math.floor(response.status / 100) !== 2) {
            throw new Error(response.statusText)
        }

        return response.json()
    }
}

