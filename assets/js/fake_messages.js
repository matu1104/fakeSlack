var FakeMessages = (function(){
  var sendMessage = function() {
    var slackWebHook = $('#IncomingWebhookURL').val();
    var slackGroupOrChannel = $('#SlackChannelGroup').val();
    var fakeName = $('#FakeName').val();
    var fakeEmoticon = $('#FakeEmoticon').val();
    var fakeMessage = $('#FakeMessage').val();

    var data = {
      'channel': slackGroupOrChannel,
      'username': fakeName,
      'icon_emoji': fakeEmoticon,
      'text': fakeMessage
    };

    $.post(slackWebHook,'payload=' + JSON.stringify(data), function(){});
  };

  var initialize = function() {
    $('#FakeSubmitionButton').click(function() {
      sendMessage();
      $('#successModal').modal('show');
    });
  };

  return {
    initialize: initialize
  };
})();

$().ready(function(){
  FakeMessages.initialize();
});
