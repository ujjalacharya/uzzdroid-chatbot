const dialogflow = require("dialogflow");
const config = require("../config/keys");

const sessionClient = new dialogflow.SessionsClient();

const sessionPath = sessionClient.sessionPath(
  config.googleProjectID,
  config.dialogFlowSessionID
);

exports.handleResponse = async (req, res) => {
  try{
    let parameters = {};
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: req.body.text,
        languageCode: config.dialogFlowSessionLanguageCode
      }
    },
    queryParams: {
      payload: {
        data: parameters
      }
    }
  };

  let responses = await sessionClient.detectIntent(request);

  res.send(responses[0].queryResult);
  } catch(e){
    console.log(e)
    res.json(e)
  }
};
