import type { PropType } from 'vue'
import type { textType } from './interface'

export const Props = {
  /**
   * 类型/主题
   */
  type: {
    type: String as PropType<textType>,
    default: (): textType => 'default',
    validator: (val: textType): boolean => {
      return (['primary', 'success', 'danger', 'warning', 'default', 'info'] as const).includes(
        val
      )
    }
  },
  /**
   * 文字大小
   */
  size: {
    type: String,
    default: (): string => ''
  },
  /**
   * 字体颜色
   */
  color: {
    type: String,
    default: (): string => ''
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否独占一行
   */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 字符间距
   */
  spacing: {
    type: String,
    default: (): string => ''
  },
  /**
   * 行高
   */
  lineHeight: {
    type: String,
    default: (): string => ''
  },
  /**
   * 缩进量
   */
  textIndent: {
    type: String,
    default: (): string => ''
  },
  /**
   * 是否加粗
   */
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 文本修饰
   */
  decoration: {
    type: String,
    default: (): string => ''
  },
  /**
   * 内填充
   */
  padding: {
    type: String,
    default: (): string => ''
  }
} as const
