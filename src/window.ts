/* eslint-disable solid/reactivity */
type BotProps = {
    chatflowid: string
    apiHost?: string
}

export const init = (props: BotProps) => {
    const element = document.createElement('mavchat')
    Object.assign(element, props)
    document.body.appendChild(element)
}

type MavChat = {
    init: typeof init
}

declare const window:
    | {
          MavChat: MavChat | undefined
      }
    | undefined

export const parseMavChat = () => ({
    init
})

export const injectMavChatInWindow = (bot: MavChat) => {
    if (typeof window === 'undefined') return
    window.MavChat = { ...bot }
}
