type FormatOptions = {
  nullDisplayText?: string;
  dataFormatString?: string;
};

export function formatValue(
  value: any,
  options: FormatOptions
): string {
  if (value == null) return options.nullDisplayText || '';
  
  if (!options.dataFormatString) return String(value);

  // 实现C#格式字符串解析逻辑
  const formatParts = options.dataFormatString
    .split(/(?<!\\)\{(\d+)(?:,(\d+))?(?::([^}]+))?\}/g)
    .filter(Boolean);

  return formatParts.reduce((result, part) => {
    // 处理转义字符和格式占位符
    return result.replace(/\\{/g, '{').replace(/\\}/g, '}');
  }, String(value));
}