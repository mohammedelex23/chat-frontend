export type MessageType = {
    id: string,
    from: string,
    to: string,
    value: string,
    time: string,
    isRead: boolean
}

export type AudioChunks = Array<Blob>
export type AudioBlobs = Array<Blob>
