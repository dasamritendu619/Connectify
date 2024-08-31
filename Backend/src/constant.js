const DB_NAME = 'connectify';
const PORT = process.env.PORT || 8081;
const DB_URL = process.env.MONGO_URI;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

const DEFAULT_AVATAR = 'https://res.cloudinary.com/dqufodszt/image/upload/v1725093845/connectify/images_1_fwrent.png';
const DEFAULT_COVER_PHOTO= 'https://res.cloudinary.com/dqufodszt/image/upload/v1725093845/connectify/group_cover_fzrcgu.webp';
const DEFAULT_GROUP_ICON = 'https://res.cloudinary.com/dqufodszt/image/upload/v1725093845/connectify/GROUP_e56rte.png'; 
const DEFAULT_GROUP_BANNER='https://res.cloudinary.com/dqufodszt/image/upload/v1725093845/connectify/cover_e6txoq.jpg';
const CONNECTIFY_LOGO = 'https://res.cloudinary.com/dqufodszt/image/upload/v1725093846/connectify/Logo_3_du0rui.png'

export { 
    DB_NAME, 
    PORT, 
    DB_URL, 
    CLOUDINARY_CLOUD_NAME, 
    CLOUDINARY_API_KEY, 
    CLOUDINARY_API_SECRET,
    DEFAULT_AVATAR,
    DEFAULT_COVER_PHOTO,
    DEFAULT_GROUP_ICON,
    DEFAULT_GROUP_BANNER,
    CONNECTIFY_LOGO,
};