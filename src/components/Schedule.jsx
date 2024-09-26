import { slice, toLower, union } from 'lodash';
import classNames from 'classnames';
import { getOccHours } from '../utils/utils.js';

const Schedule = ({
  dateNow, city,
  date, month, year,
  hours, setHours,
  minutes, setMinutes,
 }) => {
  const scheduleHours = { start: 8, end: 16 };
  const lunchTime = 13;

  const hoursArr = [];
  for (let i = scheduleHours.start; i <=scheduleHours.end; i++) {
    if (i !== lunchTime) {
      hoursArr.push(`${i}:${'00'}`);
      hoursArr.push(`${i}:${'30'}`);
    }
  };

  const hoursNow = dateNow.getHours();
  const minutesNow = dateNow.getMinutes();
  const occHoursFromDate = date!==dateNow.getDate() ? [] : hoursArr.filter((str) => {
    const time = str.split(':');
    if (hoursNow === Number(time[0])) {
      if (minutesNow > Number(time[1])) return true;
    } else if (hoursNow > Number(time[0])) {
      return true;
    }
  });
  const occHoursFromServer = getOccHours(year, month, date, toLower(city));
  const occHours = union(occHoursFromDate, occHoursFromServer);

  const handleBook = (e) => {
    e.preventDefault();
    const tD = e.target;
    if (!tD.classList.contains('disabled_td')) {
      const value = e.target.textContent.split(':');
      setHours(value[0]);
      setMinutes(value[1]);
    };
  }

  const tableRows = [];
  for (let i=0; i <= (Math.ceil(hoursArr.length / 6)); i++) {
    tableRows.push(
      <tr key={`tr_${i}`}>
        {slice(hoursArr, 6 * i, (6 * i) + 6).map((td) => {
          const [h, m] = [td.split(':')[0], td.split(':')[1]];
          const tdClass = classNames({
            'p-1': true,
            'cursor-pointer': true,
            'disabled_td': occHours.includes(td),
            'selected_td': hours === h && minutes === m,
          });
          return (
          <td key={td} className={tdClass} onClick={handleBook}>
            {td}
          </td>
        )}
        )}
      </tr>
    );
  };

  return (
    <table className='table-fixed md:mt-11 mt-2 md:ml-4 ml-0'>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
};

export default Schedule;
