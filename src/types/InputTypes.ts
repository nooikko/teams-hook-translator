import { NameValueObject } from '.';

interface InputCommonFields {
  id?: string;
  isRequired?: boolean;
  title: string;
  value?: string;
}

interface TextInput extends InputCommonFields {
  '@type': 'TextInput';
  isMultiline?: boolean;
  maxLength: number;
}

interface DateInput extends InputCommonFields {
  '@type': 'DateInput';
  includeTime: boolean;
}

interface MutlichoiceInput extends InputCommonFields {
  '@type': 'MultichoiceInput';
  choices: NameValueObject[];
  isMultiSelect: boolean;
  style?: 'normal' | 'expanded';
}

export type InputType = TextInput | DateInput | MutlichoiceInput;
