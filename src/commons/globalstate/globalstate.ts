import { AtomEffect, atom, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist'; // ✔

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist', // 저장될 로컬 스토리지의 키
//   storage: typeof window === 'undefined' ? undefined : localStorage, // SSR 환경에서 오류 방지
// });

// export const isLoggedIn = atom({
//   key: 'isLoggedIn',
//   default: false,
// });

const ssrCompletedState = atom({
  key: 'SsrCompleted',
  default: false,
});

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};
const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

export const isLoggedIn = atom<boolean | null>({
  key: 'isLoggedIn',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const layoutEmail = atom<string | null | undefined>({
  key: 'layoutEmail',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const userEmail = atom<string | null | undefined>({
  key: 'userEmail',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const KakaoLoggedIn = atom<boolean | null>({
  key: 'KakaoLoggedIn',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});
