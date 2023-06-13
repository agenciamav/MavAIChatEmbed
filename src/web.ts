import { registerWebComponents } from './register'
import { parseMavChat, injectMavChatInWindow } from './window'

registerWebComponents()

const chatbot = parseMavChat()

injectMavChatInWindow(chatbot)

export default chatbot
