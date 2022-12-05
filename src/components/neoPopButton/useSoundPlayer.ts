import { Alert } from 'react-native';

import SoundPlayer from 'react-native-sound-player';

interface Props {
  isSoundEnable: boolean;
  name: string;
  type: string;
}

export const useSoundPlayer = ({
  isSoundEnable = false,
  name,
  type,
}: Props) => {
  const playSound = () => {
    if (isSoundEnable && name !== '' && type !== '') {
      try {
        SoundPlayer.playSoundFile(name, type);
      } catch (e) {
        Alert.alert('Error playing file: ' + e);
      }
    }
  };
  return {
    playSound,
  };
};
