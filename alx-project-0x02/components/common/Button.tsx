import { ButtonProps } from '../../interfaces';
export default function Button({ size, shape, children }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`${size} ${shape}`}>
      {children}
    </button>
  );
}
