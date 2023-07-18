
const mongoose=require('mongoose')
async function connectToMongoDB() {
    try {
      const uri = 'mongodb+srv://ridafatima:NldN3N92Qe6HOKW5@cluster0.wcwj76u.mongodb.net/';
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
       //findDocuments();
  } catch (error) {
    console.error('Connection error:', error);
  }
}
connectToMongoDB()