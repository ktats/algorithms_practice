// merge ranges

function merge(array) {
    let sortedMeetings = array.sort((a, b) => {
        return a.startTime - b.startTime
    });

    let mergedMeetings = [sortedMeetings[0]];

    for (let i = 1; i < sortedMeetings.length; i++) {
      let currentMeeting = sortedMeetings[i];
      let lastMeeting = mergedMeetings[mergedMeetings.length - 1];
      if (currentMeeting.startTime <= lastMeeting.endTime) {
          lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime)
      } else {
          mergedMeetings.push(currentMeeting);
      }
    }
}