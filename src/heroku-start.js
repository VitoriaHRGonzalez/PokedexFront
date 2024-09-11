// /* eslint-disable no-undef */
// import express, { static as expressStatic, json } from 'express';
// import { join } from 'path';
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(json());
// // Your static pre-build assets folder
// app.use(expressStatic(join(__dirname, '..', 'build')));
// // Root Redirects to the pre-build assets
// app.get('/', function(req,res){
//   res.sendFile(join(__dirname, '..', 'build'));
// });
// // Any Page Redirects to the pre-build assets folder index.html that // will load the react app
// app.get('*', function(req,res){
//   res.sendFile(join(__dirname, '..', 'build/index.html'));
// });
// app.listen(port, ()=>{
//   console.log("Server is running on port: ", port)
// })