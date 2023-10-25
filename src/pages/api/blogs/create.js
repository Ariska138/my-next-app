import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/development',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {}
};

connectMongoDB();

const Post = mongoose.model(
  'blog',
  new mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    content: String,
  })
);

export default async function handler(req, res) {
  const { title, content } = req.body;
  // validasi
  if (!title) {
    return res.status(400).json({ error: true, message: 'tidak ada title' });
  }

  if (!content) {
    return res.status(400).json({ error: true, message: 'tidak ada content' });
  }

  if (title < 3 || title > 20) {
    return res.status(400).json({
      error: true,
      message: 'title harus diantar 3 sampai 20 karakter',
    });
  }

  if (content < 3 || content > 50) {
    return res.status(400).json({
      error: true,
      message: 'content harus diantar 3 sampai 50 karakter',
    });
  }

  const post = new Post({ title, content });
  await post.save();
  return res.status(201).json(post);
}
