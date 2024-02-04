import { AtomEffect, atom, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist'; // ✔

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

export const autoLogin = atom<boolean | null>({
  key: 'autoLogin',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const Kakaoid = atom<number | null | undefined>({
  key: 'Kakaoid',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});
