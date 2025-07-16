import { SvgIcon, SvgIconProps } from '@mui/material';

export default function UniformCurvedSvgIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 1620 128"
      preserveAspectRatio="none"
      sx={{
        width: '100%',
        height: 'auto',
        display: 'block',
        lineHeight: 0,
        ...props.sx,
      }}
    >
      <path
        d="
          M0,128
          Q810,0 1620,128
          L1620,128
          L0,128
          Z
        "
        fill="currentColor"
      />
    </SvgIcon>
  );
}
