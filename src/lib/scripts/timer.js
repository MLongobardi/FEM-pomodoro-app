export class Timer {
	constructor(minutes = 25) {
		this.startTime = minutes * 60; //in seconds
		this.currentTime = this.startTime;
		this.deltaTime = 0;
        this.running = false;
        this.end = false;
		this.interval = "";
    }
    
    get minutes() {
        return Math.floor(this.currentTime / 60);
    }
    get seconds() {
        return this.currentTime - this.minutes * 60;
    }
    get progress() {
        return 100 * (1 - this.currentTime / this.startTime);
    }
}