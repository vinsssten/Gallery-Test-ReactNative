export interface ThumbPhoto {
    id: string;
    url: string;
}

export interface ThumbPhotoResponse {
    id: string;
    urls: {
        thumb: string;
    };
}

export interface FullSizePhoto {
    uri: string;
    width: number;
    height: number;
}
