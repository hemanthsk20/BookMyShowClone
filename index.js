const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

const userRoute = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const path = require("path");



app.use(express.json());
app.use(cors());
app.use(express.static('./public'));
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoutes);
app.use("/api/theatre", theatreRoutes);
app.use("/api/bookings", bookingRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/client/build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     });
// }

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})