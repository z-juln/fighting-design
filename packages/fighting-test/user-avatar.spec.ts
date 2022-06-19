import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FUserAvatar } from '@fighting-design/fighting-components'

describe('FUserAvatar', () => {
  test('class', () => {
    const wrapper = mount(FUserAvatar)
    expect(wrapper.classes()).toContain('f-user-avatar')
  })
})
