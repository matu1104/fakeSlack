# Fake Slack Message

Fake Slack Message is a simple formulary in order to send fake message to slack.

First of all, you need to create a [Slack Incoming Webhook](https://api.slack.com/incoming-webhooks) and get a URL like:
```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

Then, fill out the form:

![Empty From](assets/images/Form.png)

* Incoming Webhook URL: Enter your Slack Incoming webhook URL.
* Chanel/Group Name: Enter your channel name like #general or a group name without the hashtag.
* Fake Name: Enter the sender of the message.
* Fake Emoticon: Enter the image of the message.
* Fake Message: Enter the message.

Example of usage:

If the emoticon of Steve Jobs is loaded in your slack, try sending:
![Example Form](assets/images/Example.png)

And you will get:
![Slack Message](assets/images/Message.png)
