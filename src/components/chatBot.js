
export const chatBot = () => {
    window.botpressWebChat.init({
        "composerPlaceholder": "Chatear con el Bot",
        "botConversationDescription": "Asistente Personal",
        "botId": "8c8b97c0-bf9c-4f18-ac84-21da0c7faa08",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "8c8b97c0-bf9c-4f18-ac84-21da0c7faa08",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/130ab62b-a020-43df-9482-c23f1d15dfcf/v61528/style.css",
        "useSessionStorage": true,
        "showConversationsButton": false,
        "enableTranscriptDownload": false,
        "enableConversationDeletion": false,
        "botName": "Mateo",
    });

    return window.botpressWebChat
}
