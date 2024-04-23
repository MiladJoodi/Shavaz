export default function persianNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n
      .toLocaleString()
      .replace(/\d/g, x => farsiDigits[x]);
}