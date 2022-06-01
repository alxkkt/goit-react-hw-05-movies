import defaultPoster from '../../default-minimal.jpeg';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const getImgLink = path => (path ? `${IMG_BASE_URL}${path}` : defaultPoster);

export default getImgLink;
