
type Token = {
  name: string
} & (
    | { type: 'COLOR'; value: { r: number; g: number; b: number; a: number } }
    | { type: 'FLOAT'; value: number }
  );

declare module '@primer/primitives/dist/figma/themes/*.json' {
  type Theme = Token[];

  const theme: Theme;

  export default theme;
}

declare module '@primer/primitives/dist/figma/scales/*.json' {
  type Scale = Token[];

  const scale: Scale;

  export default scale;
}
