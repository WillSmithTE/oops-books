export interface Response {
    responseStatus: ResponseStatus;
    body: Object;
}

export enum ResponseStatus {
    SUCCESS,
    FAIL
}