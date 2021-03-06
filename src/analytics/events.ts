import { AnalyticsEventId, Modifier } from '../data/types'
import TagDataClass from '../data/Tag'
import { PreferencesState } from '../redux/reducers/preferences'

interface SearchEvent {
  id: typeof AnalyticsEventId.SEARCH
  payload: {
    tags: string[]
  }
}

interface TagActivateEvent {
  id: typeof AnalyticsEventId.ADD_TAG
  payload: {
    name: string
    modifier: Modifier | undefined
  }
}

export const searchEvent = (
  activeTags: Record<string, TagDataClass>,
  page_number: number,
  preferences: PreferencesState
) => ({
  id: AnalyticsEventId.SEARCH,
  payload: {
    active_tags: Object.values(activeTags)
      .map((tag) => `${tag.modifier}${tag.name}`)
      .sort(),
    page_number,
    preferences,
  },
})

export const addTagEvent = (tag: TagDataClass) => ({
  id: AnalyticsEventId.ADD_TAG,
  payload: {
    name: tag.name,
    modifier: tag.modifier,
  },
})

export type EventType = SearchEvent | TagActivateEvent
