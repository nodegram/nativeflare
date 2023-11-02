const BASE_URL = process.env.EXPO_PREVIEW_URL;

type Props = {
  url: string;
  height: number;
  width: number;
};

export const ExpoFrame = (props: Props) => {
  if (!BASE_URL) {
    return null;
  }

  return (
    <div style={{ borderRadius: 8, backgroundColor: '#282a36' }}>
      <iframe
        allowTransparency
        src={`${BASE_URL}${props.url}`}
        height={props.height}
        width={props.width}
      />
    </div>
  );
};
