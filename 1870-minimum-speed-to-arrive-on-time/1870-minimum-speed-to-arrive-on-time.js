/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = (dist, hour) => {
  const canMakeItToOffice = (speed) => {
    let time = 0;
    for (let i = 0; i < dist.length; i++) {
      if (time > hour) return false;
      let tripLength = dist[i];
      let tripTime = tripLength / speed;
      let waitTime = i < dist.length - 1 ? Math.ceil(tripLength / speed) - tripTime : 0;
      time += tripTime + waitTime;
    }
    return time <= hour;
  };

  let left = 1, right = 100000000;
  let minimum = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canMakeItToOffice(mid)) {
      minimum = Math.min(minimum, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return isFinite(minimum) ? minimum : -1;
};









