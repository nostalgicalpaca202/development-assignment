export const _getDurationStr = (ms) => {
    // code snippet modified from https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}