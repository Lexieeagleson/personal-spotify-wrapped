import { songData } from "./songData";

export class artistData {
    constructor(
        public artistName: string,
        public occurrence: number,
        public timeListened: number,
        public songData: songData[],
        public expanded?: boolean
    )
    {}
}
