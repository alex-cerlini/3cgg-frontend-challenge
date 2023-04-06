import Container from './styles';
import { LabelProps } from './types';

function Label({ title, type }: LabelProps) {
  return <Container type={type}>{title.toLocaleUpperCase()}</Container>;
}

export default Label;
