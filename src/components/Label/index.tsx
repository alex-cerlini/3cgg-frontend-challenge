import { LabelProps } from './types';
import * as Style from './styles';

function Label({ title, type }: LabelProps) {
  return (
    <Style.Container type={type}>{title.toLocaleUpperCase()}</Style.Container>
  );
}

export default Label;
