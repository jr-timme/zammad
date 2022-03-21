// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import globalClasses from '@common/form/theme/global'
import createTailwindClasses from '@common/form/core/createTailwindClasses'
import { FormThemeClasses } from '@common/types/form'

vi.mock('@formkit/tailwindcss', () => {
  return {
    generateClasses: (classes: FormThemeClasses) => classes,
  }
})

describe('createTailwindClasses', () => {
  it('check that common classes will be returned', () => {
    const classes = createTailwindClasses() as unknown as FormThemeClasses

    expect(classes).toEqual(globalClasses)
  })

  it('check that app specific core classes can be used', () => {
    const customFieldClasses = {
      outer: 'custom-field-outer',
    }

    const classes = createTailwindClasses({
      coreClasses: () => {
        return {
          customField: customFieldClasses,
        }
      },
    }) as unknown as FormThemeClasses

    expect(classes.customField).toEqual(customFieldClasses)
  })

  it('extension modules can be used', () => {
    const customFieldClasses = {
      outer: 'custom-field-outer',
    }

    const classes = createTailwindClasses({
      extensions: {
        customField: {
          default: (classes: FormThemeClasses) => {
            return {
              global: {
                outer: `${classes.global.outer} custom-class`,
              },
              customField: customFieldClasses,
            }
          },
        },
      },
    }) as unknown as FormThemeClasses

    expect(classes.global.outer).toContain(
      'mb-2 formkit-disabled:opacity-30 custom-class',
    )
    expect(classes.customField).toEqual(customFieldClasses)
  })
})
