import React from 'react';

const BASE_URL = process.env.EXPO_PREVIEW_URL;

type Props = {
  url: string;
  height: number;
  width: number;
};

export const ExpoFrame = (props: Props) => {
  return (
    <iframe
      src={`${BASE_URL}${props.url}`}
      style={{ borderRadius: 8 }}
      height={props.height}
      width={props.width}
    />
  );
};