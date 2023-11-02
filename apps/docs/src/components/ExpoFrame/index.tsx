import { useState } from 'react';

const BASE_URL = process.env.EXPO_PREVIEW_URL;

type Props = {
  url: string;
  height: number;
  width: number;
};

export const ExpoFrame = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  if (!BASE_URL) {
    return null;
  }

  return (
    <div style={{ position: 'relative', borderRadius: 8, backgroundColor: '#282a36' }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>Loading...</div>
        </div>
      )}
      <iframe
        allowTransparency
        src={`${BASE_URL}${props.url}`}
        height={props.height}
        width={props.width}
        onLoad={handleLoad}
      />
    </div>
  );
};
