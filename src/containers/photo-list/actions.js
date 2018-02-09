export const GET_PHOTOS = 'GET_PHOTOS';

export const DUMMY = 'DUMMY';

export const getPhotos = () => ({
  type: GET_PHOTOS,
  payload: [1, 2, 3],
});

export const doDummy = () => ({
  type: DUMMY,
  payload: ['foo', 'bar', 'top', 'kek'],
});
