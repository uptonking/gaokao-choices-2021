import * as React from 'react';

import GaokaoChoicesTips from '../pages/gaokao-choices-tips.mdx';

export function SiteHome(props) {
  return (
    <div style={{ flex: `0 0 auto` }}>
      <div
        style={{
          display: `flex`,
          minHeight: `95vh`,
          flexFlow: `wrap column`,
          // justifyContent: `center`,
          // alignItems: `center`,
          marginLeft: 16,
        }}
      >
        <GaokaoChoicesTips />
      </div>
    </div>
  );
}
