var botId = "{Your GroupMe bot ID}";

function sendText(text){ //Sends Texts
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

function sendImage(text, imageURL){ //Sends text and image
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '","attachments":[{"type":"image","url":"' + imageURL + '"}]}'})
}

function doPost(e) {
  var post = JSON.parse(e.postData.getDataAsString());
  //parse your data here for instance post.name. Look at the JSON you are sent by the form to find the fields. (A useful source for this can be webhook.site)
  let response = ""
  sendText(response)
}
//To make this work click publish -> deploy as Web App -> select yourself to execute as and anyone, including anonymous to access it.
//Use the link this gives as the endpoint/webhook on the wordpress/google form
//Anytime you update the script you must click deploy again and change project version to new.
