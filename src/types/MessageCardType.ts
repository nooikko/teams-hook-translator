import { NameValueObject, ActionType } from '.';

export interface MessageCardType {
  '@type': 'MessageCard';
  '@context': 'https://schema.org/extensions';
  correlationId?: string;
  summary: string;
  themeColor?: string;
  title?: string;
  text?: string;
  sections?: {
    title?: string;
    activityImage?: string;
    activityTitle?: string;
    activitySubtitle?: string;
    activityText?: string;
    text?: string;
    facts?: NameValueObject[];
    markdown?: boolean;
  }[];
  potentialAction?: ActionType[];
}
