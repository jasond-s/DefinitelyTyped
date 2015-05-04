
declare module Throng {

    export interface IOptions {
        workers?: number;
        lifetime?: number;
        grace?: number;
    }

    export interface IStatic {
        (startFunction: () => void, settings?: IOptions): void;
    }

}