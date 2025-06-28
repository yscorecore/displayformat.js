import { describe, expect, it } from 'vitest'
import { formatValue } from '../src/index'

describe('formatValue', () => {
  it('空值处理', () => {
    expect(formatValue(null, { nullDisplayText: 'N/A' })).toBe('N/A')
    expect(formatValue(undefined, {})).toBe('')
  })

  it('基本字符串格式化', () => {
    expect(formatValue('test', { dataFormatString: 'Prefix {0}' })).toBe('Prefix test')
    expect(formatValue(123, { dataFormatString: '{0}次' })).toBe('123次')
  })

  it('转义字符处理', () => {
    expect(formatValue('value', { dataFormatString: '{{{0}}}' })).toBe('{value}')
    expect(formatValue('demo', { dataFormatString: '\{0\}:{0}' })).toBe('{0}:demo')
  })

  it('数字格式化', () => {
    expect(formatValue(1234.56, { dataFormatString: '{0:N2}' })).toBe('1,234.56')
    expect(formatValue(0.4567, { dataFormatString: '{0:P1}' })).toBe('45.7%')
  })
})