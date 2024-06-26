import { customElement } from 'solid-element'
import { defaultBotProps } from './constants'
import { Bubble } from './features/bubble'
import { Full } from './features/full'

export const registerWebComponents = () => {
    if (typeof window === 'undefined') return
    customElement('mavchat', defaultBotProps, Bubble)
}
