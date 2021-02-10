const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    <>
      <div>Ez bizony egy kurva jó oldal lett Dávid</div>
      <img
        src="https://dog.ceo/api/breeds/image/random Fetch!
"
      ></img>
    </>
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
