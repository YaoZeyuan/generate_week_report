// 一键生成周报目录
const shell = require("shelljs");
const moment = require("moment");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

const baseWorkDirPath = path.resolve(".");
const YearAt = argv["year"] || moment().year();

for (let monthAt = 1; monthAt <= 12; monthAt++) {
  let strMonthAt = (monthAt + "").padStart(2, 0);
  let dataAtStr = `${YearAt}-${strMonthAt}-01 00:00:00`;
  //   console.log('dataAt => ', dataAtStr)
  let currentMomthMoment = moment(dataAtStr, "YYYY-MM-DD HH:mm:ss").startOf(
    "M"
  );
  for (
    let dayIndex = 1;
    dayIndex < currentMomthMoment.daysInMonth();
    dayIndex++
  ) {
    let strDayIndex = `${dayIndex}`.padStart(2, "0");
    let k = moment(`${YearAt}-${strMonthAt}-${strDayIndex}`).weekday();
    if (k === 4) {
      let initAtStr = `${YearAt}-${strMonthAt}-${strDayIndex} 00:00:00`;
      //   console.log('initAtStr => ', initAtStr)
      let endDayAt = moment(initAtStr, "YYYY-MM-DD HH:mm:ss")
        .add(6, "day")
        .format("DD");
      let strEndDayAt = `${endDayAt}`.padStart(2, "0");
      let targetFloderPath = `${baseWorkDirPath}/工作报告${YearAt}/${strMonthAt}月`;
      targetFloderPath = path.resolve(targetFloderPath);
      shell.mkdir("-p", targetFloderPath);
      let targetFileUri = `${baseWorkDirPath}/工作报告${YearAt}/${strMonthAt}月/${strDayIndex}-${strEndDayAt}.md`;
      targetFileUri = path.resolve(targetFileUri);
      console.log("targetFloderPath => ", targetFloderPath);
      console.log("targetFileUri => ", targetFileUri);
      shell.touch(targetFileUri);
      console.log(targetFileUri);
    }
  }
}
return;
