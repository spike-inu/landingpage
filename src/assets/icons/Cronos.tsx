import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg
      id="Layer_1"
      width="44"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 2167.7 2502.5"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.st2{fill:#fff}'}</style>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={795.892}
        y1={1699.948}
        x2={795.892}
        y2={1608.748}
        gradientTransform="matrix(27.4398 0 0 -27.4398 -20755.24 46646.219)"
      >
        <stop
          offset={0}
          style={{
            stopColor: '#25376c',
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#1f1f49',
          }}
        />
      </linearGradient>
      <path
        d="M1083.9 0 0 625.6v1251.3l1083.9 625.6 1083.9-625.6V625.6L1083.9 0z"
        style={{
          fill: 'url(#SVGID_1_)',
        }}
      />
      <linearGradient
        id="SVGID_00000007418222533405911760000015435408293652292017_"
        gradientUnits="userSpaceOnUse"
        x1={776.142}
        y1={1608.748}
        x2={776.142}
        y2={1699.948}
        gradientTransform="matrix(27.4398 0 0 -27.4398 -20755.24 46646.219)"
      >
        <stop
          offset={0}
          style={{
            stopColor: '#25376c',
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#1f1f49',
          }}
        />
      </linearGradient>
      <path
        style={{
          fill: 'url(#SVGID_00000007418222533405911760000015435408293652292017_)',
        }}
        d="M1083.9 0 0 625.6v1251.3l1083.9 625.6V0z"
      />
      <path
        className="st2"
        d="M1506.4 540.6H655.8L557 974.1h1053.7l-104.3-433.5zm-699.7 1029v-288.1l-252.4-159.2-285.4 211.3 389.6 677.8H815l183.8-172.9v-85.1l-192.1-183.8z"
      />
      <path className="st2" d="M1358.3 1040H809.5l90.6 241.5-27.4 271.7h422.6l-27.4-271.7 90.4-241.5z" />
      <path
        className="st2"
        d="M1610.7 1119.5 1361 1281.4v288.1l-189.3 183.8v85.1l183.8 170.1h153.7l386.9-675-285.4-214z"
      />
    </svg>
  );
};

export default React.memo(Icon);
