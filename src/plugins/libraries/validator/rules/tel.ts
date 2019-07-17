/**
 * @file 電話番号のルール
 */

export const tel = {
  getMessage: (field): string => 'error tel',
  validate: (value): boolean => /^0\d{9,10}$/.test(value)
}
