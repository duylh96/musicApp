import {Alert} from 'react-native';
export default class Manager {
    constructor(ref) {
        this.ref = ref;
    }
    setRef(ref) {
        this.ref = ref;
    }
    play(song) {
        this
            .ref
            .updateCurrentSong(song);
    }
}