import useMember from "../stores/useMember";

// moveToLogin 함수 정의
export const moveToLogin = (to, from, next) => {
  const { member } = useMember(); // 스토어에서 member 가져오기

  const checkLogin = () => {
    return member.mid ? true : false;
  };

  console.log('move to todo add page: ' + checkLogin());

  if (checkLogin()) {
    next();
  } else {
    next('/login');
  }
};