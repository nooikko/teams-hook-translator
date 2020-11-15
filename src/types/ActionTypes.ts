import { NameValueObject, InputType } from '.';

interface OpenUriAction {
  '@type': 'OpenUri';
  name: string;
  targets: {
    os: 'default' | 'iOS' | 'android' | 'windows';
    uri: string;
  }[];
}

interface HttpPostAction {
  '@type': 'HttpPOST';
  name: string;
  target: string;
  headers?: NameValueObject[];
  body: string;
  bodyContentType: 'application/json' | 'application/x-www-form-urlencoded';
}

interface ActionCardAction {
  '@type': 'ActionCard';
  name: string;
  inputs: InputType[];
  actions: ActionType[];
}

export type ActionType = OpenUriAction | HttpPostAction | ActionCardAction;
