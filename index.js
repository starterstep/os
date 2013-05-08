

module.exports = os();

function os() {
  var ua = navigator.userAgent;
  if (/mac/i.test(ua)) return 'mac';
  if (/win/i.test(ua)) return 'windows';
  if (/linux/i.test(ua)) return 'linux';
  if (/iphone/i.test(ua)) return 'ios';
  if (/ipad/i.test(ua)) return 'ios';
  if (/android/i.test(ua)) return 'android';
}
