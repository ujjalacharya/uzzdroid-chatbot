
const {handleResponse} = require("../controllers/chatbot");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hello: "Johnny" });
  });

  app.post("/api/df_text_query", handleResponse);

  app.post("/api/df_event_query", (req, res) => {
    res.send({ do: "event query" });
  });
};
