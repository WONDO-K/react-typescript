interface Props {
  name: string;
  color?: string;
}

export const Hello = ({ name, color = 'blue' }: Props) => {
  return <div style={{ color }}>Hello {name}</div>;
};

// function Hello({ name, color }: Props) {
//     return <div style={{color}}>Hello {name}</div>;
// }

export default Hello; // 디폴트로 내보내기를 했기 때문에 import 할 때 중괄호 없이 불러올 수 있다.
