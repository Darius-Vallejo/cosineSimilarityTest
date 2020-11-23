import app from './app';

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}! ${process.env.NODE_ENV}`);
});
