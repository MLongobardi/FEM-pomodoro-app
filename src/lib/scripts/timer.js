let tickrate = 50;

export class Timer {
    constructor(minutes = 25, func = () => { }) {
        this.startTime = minutes * 60;
        this.time = minutes * 60;
        this.end = false;
        this.running = false;
        this.deltaTime = 0;
        this.triggerReactivity = func;
    }

    pause() {
        if (!this.running || this.end) return;
        this.running = false;
        clearInterval(this.interval);
    }

    start() {
        if (this.running || this.end) return;
        this.running = true;
        this.interval = setInterval(() => {
            this.deltaTime += tickrate;
            if (this.deltaTime >= 1000) {
                this.time--;
                this.deltaTime = 0;
                if (this.time <= 0) {
                    this.pause();
                    this.time = 0;
                    this.end = true;
                }
                this.triggerReactivity();
            }
        }, tickrate);
    }

    restart() {
        this.time = this.startTime;
        this.end = false;
        this.triggerReactivity();
        this.start();
    }
}