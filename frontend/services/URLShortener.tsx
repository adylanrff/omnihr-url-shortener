type CreateShortenedURLRequest = {
    full_url: string
}

type CreateShortenedURLResponse = {
    id?: string
    expiry_time?: Date
    hash?: string
    full_url?: string
}

type GetShortenedURLDetailRequest = {
    hash: string
}

type GetShortenedURLDetailResponse = {
    id?: string
    expiry_time?: Date
    hash?: string
    full_url?: string
}

export class URLShortenerService {
    host: string;

    constructor(host: string = process.env.NEXT_PUBLIC_BACKEND_URL || "") {
        this.host = host
    }

    async createShortenedURL(request: CreateShortenedURLRequest): Promise<CreateShortenedURLResponse> {
        const shortenURLPath = this.host + "/shortened_url/"
        const payload = JSON.stringify(request)
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

    async getShortenedURLDetail(request: GetShortenedURLDetailRequest): Promise<GetShortenedURLDetailResponse> {
        const shortenURLPath = this.host + "/shortened_url?hash=" + request.hash
        const response = await fetch(shortenURLPath)
        if (Math.floor(response.status / 100) !== 2) {
            throw new Error(response.statusText)
        }

        return response.json()
    }
}

