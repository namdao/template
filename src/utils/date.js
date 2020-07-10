import moment from 'moment';
import { l10n } from 'languages';

moment.updateLocale(moment.locale(), {
  relativeTime: {
    future: 'trong %s',
    past(number) {
      const splitByDay = number.split(l10n.day);
      const splitByWeeks = number.split(l10n.week);
      if (splitByDay.length > 1) {
        const dayCount = parseInt(splitByDay[0], 10);
        if (dayCount < 7) {
          return l10n.formatString(l10n.some_days_before, { day: dayCount });
        }
      }
      if (splitByWeeks.length > 1) {
        const weekCount = parseInt(splitByDay[0], 10);
        return l10n.formatString(l10n.some_days_before, { week: weekCount });
      }
      return l10n.formatString(l10n.numbber_before, { number });
    },
    // moment can not set language
    // may be swictch case depend localize,
    s: '%d giây',
    m: '1 phút',
    mm: '%d phút',
    h: '1 giờ',
    hh: '%d giờ',
    d: '1 ngày',
    dd: '%d ngày',
    w: '1 tuần',
    ww: '%d tuần',
    M: '1 tháng',
    MM: '%d tháng',
    y: '1 năm',
    yy: '%% năm',
  },
});
export const getDateFromNow = (numberDay, dateTime, distanceFormat = 7) =>
  numberDay > distanceFormat
    ? `${moment.parseZone(dateTime).utcOffset(7).format('DD-MM-YYYY h:mm a')}`
    : `${moment.parseZone(dateTime).utcOffset(7).fromNow()}`;
export const getFromNow = (dateTime) => moment.parseZone(dateTime).utcOffset(7).fromNow();

export const formatDateTime = (dateTime, format = 'DD-MM-YYYY') => moment(dateTime).format(format);
export const formatFullTimeZone = (dateTime) =>
  moment.parseZone(dateTime).utcOffset(7).format('DD-MM-YYYY h:mm a');
export const getTotalDaysFromNow = (date) => {
  const timeNow = moment();
  const dateUtc7 = moment.parseZone(date).utcOffset(7);
  const dateDiff = moment.duration(timeNow.diff(dateUtc7));
  const totalDays = dateDiff.days() + dateDiff.hours() / 24;
  return dateDiff.hours() > 0 ? totalDays.toFixed(1) : totalDays;
};
