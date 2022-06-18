import create from 'zustand';
import produce from 'immer';

export const initialVideos = [];

const useVideoStore = create((set, get) => {
  return {
    videos: initialVideos,
    collectVideo: (video) => {
      return set(produce((draft) => {
        draft.videos.push(video);
      }));
    },
    stopOtherPlayers: (current) => {
      get().videos.forEach((i) => {
        current !== i && i.pause();
      });
    },
  };
});

export default useVideoStore;
