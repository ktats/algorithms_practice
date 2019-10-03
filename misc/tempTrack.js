class tempTracker {
    constructor() {
        // mode
        this.occurences = new Array(111).fill(0);
        this.maxOcurrences = 0;
        this.mode = null;

        // mean
        this.numberOfEntries = 0;
        this.totalSum = 0;
        this.mean = null;

        this.minTemp = null;
        this.maxTemp = null;
    }

    insert(temp) {
        // Mode
        if (++this.occurences[temp] > this.maxOcurrences) {
            this.maxOcurrences = this.occurences[temp];
            this.mode = temp;
        }

        // Mean
        this.totalSum += temp;
        this.numberOfEntries += 1;
        this.mean = this.totalSum / this.numberOfEntries;

        if (this.minTemp === null || temp < this.minTemp) {
            this.minTemp = temp;
        }

        if (this.maxTemp === null || temp < this.maxTemp) {
            this.maxTemp = temp;
        }
    }


}
