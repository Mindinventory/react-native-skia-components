import type { TextStyle, ViewStyle } from 'react-native';

import type { ButtonPresets } from './button';

type soundType =
  | 'caf'
  | 'ttml'
  | 'au'
  | 'ts'
  | 'mqv'
  | 'pls'
  | 'flac'
  | 'dv'
  | 'amr'
  | 'mp1'
  | 'mp3'
  | 'ac3'
  | 'loas'
  | '3gp'
  | 'aifc'
  | 'm2v'
  | 'm2t'
  | 'm4b'
  | 'm2a'
  | 'm4r'
  | 'aa'
  | 'webvtt'
  | 'aiff'
  | 'm4a'
  | 'scc'
  | 'mp4'
  | 'm4p'
  | 'mp2'
  | 'eac3'
  | 'mpa'
  | 'vob'
  | 'scc'
  | 'aax'
  | 'mpg'
  | 'wav'
  | 'mov'
  | 'itt'
  | 'xhe'
  | 'm3u'
  | 'mts'
  | 'mod'
  | 'vtt'
  | 'm4v'
  | '3g2'
  | 'sc2'
  | 'aac'
  | 'mp4'
  | 'vtt'
  | 'm1a'
  | 'mp2'
  | 'avi';

export interface ISound {
  name: string;
  type: soundType;
}
export interface ButtonProps {
  backgroundColor?: string;
  bottomShadowColor?: string;
  depth?: number;
  height?: number;
  isFloating?: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  preset?: ButtonPresets;
  shadowHeight?: number;
  sideShadowColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  titleSize?: number;
  width?: number;
  sound?: ISound;
  isSoundEnable?: boolean;
  onPressOutSoundEnabled?: boolean;
}
