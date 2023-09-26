const million = require("million/compiler");

/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {{
  optimize?: boolean;
  server?: boolean;
  mode?: 'react' | 'preact' | 'react-server' | 'preact-server' | 'vdom';
  mute?: boolean | 'info';
  hmr?: boolean;
  auto?: boolean | {
    threshold?: number;
    rsc?: boolean;
    skip?: (string | RegExp)[];
  };
  _file?: string;
}} */
const millionConfig = {
  auto: { rsc: true },
};

module.exports = million.next(nextConfig, millionConfig);
