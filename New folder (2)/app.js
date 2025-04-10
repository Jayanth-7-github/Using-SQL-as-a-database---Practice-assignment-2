const express=require("express")

const {db}=require("./connection")

const app=express();

const PORT=2938;




const test=async()=>{
    try {
        const cu=await db.getConnection() 
    console.log("database connected successfully🚀")
    } catch (error) {
        console.log("database not connected 😔",error)
    }
    
}
test()

app.get('/', (req, res) => {
    res.send('Hello 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍🤞🤞🤞🤞🤞');
  });

app.listen(PORT, () => {
    try {
      console.log(`App is running on http://localhost:${PORT}`);
    } catch (error) {
      console.error(error);
    }
  });