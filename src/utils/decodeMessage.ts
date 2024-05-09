import { type Message } from 'ably'

export function decodeMessage (message: Message): Message {
  const utf8decoder = new TextDecoder()

  if (typeof message.data === 'string') {
    return message
  } else {
    return {
      ...message,
      data: utf8decoder.decode(message.data as ArrayBuffer)
    }
  }
}
