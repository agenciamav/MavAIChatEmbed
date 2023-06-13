<!-- markdownlint-disable MD030 -->

# Mav Chat

Javascript library to display agenciamav chatbot on your website

![Agência Mav](https://github.com/agenciamav/MavChat/blob/main/images/ChatEmbed.gif?raw=true)

Install:

```bash
yarn install
```

Dev:

```bash
yarn dev
```

Build:

```bash
yarn build
```

## Embed in your HTML

### PopUp

```html
<script type="module">
  import MavChat from "https://cdn.jsdelivr.net/npm/mavchat/dist/web.js";
  MavChat.init({
    chatflowid: "<chatflowid>",
    apiHost: "http://localhost:3000",
  });
</script>
```

### FullPage

```html
<script type="module">
  import Chatbot from "./web.js";
  Chatbot.initFull({
    chatflowid: "<chatflowid>",
    apiHost: "http://localhost:3000",
  });
</script>
<flowise-fullchatbot></flowise-fullchatbot>
```

To enable full screen, add `margin: 0` to <code>body</code> style, and confirm you don't set height and width in `chatflowConfig`

```html
<body style="margin: 0">
  <script type="module">
    import Chatbot from "./web.js";
    Chatbot.initFull({
      chatflowid: "<chatflowid>",
      apiHost: "http://localhost:3000",
      chatflowConfig: {
        // height: 700, confirm you don't fix height and with 
        // width: 400,
      }
  });
  </script>
</body>
```

## Configuration

You can also customize chatbot with different configuration

```html
<script type="module">
  import MavChat from "https://cdn.jsdelivr.net/npm/mavchat/dist/web.js";
  MavChat.init({
    chatflowid: "91e9c803-5169-4db9-8207-3c0915d71c5f",
    apiHost: "http://localhost:3000",
    chatflowConfig: {
      // topK: 2
    },
    theme: {
      button: {
        backgroundColor: "#3B81F6",
        right: 20,
        bottom: 20,
        size: "medium",
        iconColor: "white",
        customIconSrc:
          "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
      },
      chatWindow: {
        welcomeMessage: "Hello! This is custom welcome message",
        backgroundColor: "#ffffff",
        height: 700,
        width: 400,
        fontSize: 16,
        poweredByTextColor: "#303235",
        botMessage: {
          backgroundColor: "#f7f8ff",
          textColor: "#303235",
          showAvatar: true,
          avatarSrc:
            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
        },
        userMessage: {
          backgroundColor: "#3B81F6",
          textColor: "#ffffff",
          showAvatar: true,
          avatarSrc:
            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
        },
        textInput: {
          placeholder: "Type your question",
          backgroundColor: "#ffffff",
          textColor: "#303235",
          sendButtonColor: "#3B81F6",
        },
      },
    },
  });
</script>
```

## License

Source code in this repository is made available under the [MIT License](https://github.com/agenciamav/MavChat/blob/main/LICENSE.md).
