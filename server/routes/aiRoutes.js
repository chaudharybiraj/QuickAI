// import express from "express";
// import { auth } from "../middlewares/auth.js";
// import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from "../controllers/aiController.js";
// import { upload } from "../configs/multer.js";

// const aiRouter = express.Router();

// aiRouter.post('/generate-article', auth, generateArticle)
// aiRouter.post('/generate-blog-titles', auth, generateBlogTitle)
// aiRouter.post('/generate-image', auth, generateImage)

// aiRouter.post('/remove-image-background', upload.single('image'), auth, removeImageBackground)

// aiRouter.post('/remove-image-object', upload.single('image'), auth, removeImageObject)

// aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview)


// export default aiRouter

// import express from "express";
// import { auth } from "../middlewares/auth.js";
// import { 
//   generateArticle, 
//   generateBlogTitle, 
//   generateImage, 
//   removeImageBackground, 
//   removeImageObject, 
//   resumeReview,
//   getCreations  
// } from "../controllers/aiController.js";
// import { upload } from "../configs/multer.js";

// const aiRouter = express.Router();

// aiRouter.get('/get-creations',              auth, getCreations);
// aiRouter.post('/generate-article',          auth, generateArticle);
// aiRouter.post('/generate-blog-titles',      auth, generateBlogTitle);
// aiRouter.post('/generate-images',           auth, generateImage);
// aiRouter.post('/remove-image-background',   upload.single('image'), auth, removeImageBackground);
// aiRouter.post('/remove-image-object',       upload.single('image'), auth, removeImageObject);
// aiRouter.post('/resume-review',             upload.single('resume'), auth, resumeReview);

// export default aiRouter;


import express from "express";
import { auth } from "../middlewares/auth.js";
import { 
  generateArticle, 
  generateBlogTitle, 
  generateImage, 
  removeImageBackground, 
  removeImageObject, 
  resumeReview,
  getCreations,
  getPublishedCreations,
  toggleLikeCreation
} from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

aiRouter.get('/get-creations',              auth, getCreations);
aiRouter.get('/get-published-creations',    auth, getPublishedCreations);
aiRouter.post('/toggle-like-creation',      auth, toggleLikeCreation);
aiRouter.post('/generate-article',          auth, generateArticle);
aiRouter.post('/generate-blog-titles',      auth, generateBlogTitle);
aiRouter.post('/generate-images',           auth, generateImage);
aiRouter.post('/remove-image-background',   upload.single('image'), auth, removeImageBackground);
aiRouter.post('/remove-image-object',       upload.single('image'), auth, removeImageObject);
aiRouter.post('/resume-review',             upload.single('resume'), auth, resumeReview);

export default aiRouter;
