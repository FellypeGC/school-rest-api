import app from "./app";

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`CTRL + Click to open in browser: http://localhost:${port}`);
});
