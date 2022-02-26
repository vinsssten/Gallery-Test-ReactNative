export interface ThumbPhoto {
    id: string,
    url: string
}

export interface PhotoResponse {
    id: string,
    urls: {
        thumb: string
    }
}