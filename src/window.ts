/* eslint-disable solid/reactivity */
type BotProps = {
    chatflowid: string
    apiHost?: string
    chatflowConfig?: Record<string, unknown>
}

export const initFull = (props: BotProps & { id?: string }) => {
    const fullElement = props.id
      ? document.getElementById(props.id)
      : document.querySelector('flowise-fullchatbot')
    if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.')
    Object.assign(fullElement, props)
}

export const init = (props: BotProps) => {
    const element = document.createElement('mav-chat')
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
