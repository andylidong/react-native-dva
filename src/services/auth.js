import { Moment } from '@/utils'

export const login = async () => {
  try {
    await Moment.delay(2000)
    return true
  } catch  {
    return false
  }
}
