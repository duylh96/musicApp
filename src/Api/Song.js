import Sound from 'react-native-sound';
Sound.setCategory('Playback', true);

export default class Song {
    constructor(requireURL) {
        this.song = new Sound(requireURL, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
        });
    }

    play() {
        this
            .song
            .play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
    }

    pause() {
        this
            .song
            .pause();
    }

    stop() {
        this
            .song
            .stop();
    }

    getDuration() {
        return this
            .song
            .getDuration();
    }

    getInstance() {
        return this.song === undefined;
    }
}