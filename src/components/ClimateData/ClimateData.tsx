type ClimateDataProps = {
  firstPart: string;
  secondPart: string;
  firstPartStyle?: React.CSSProperties;
  secondPartStyle?: React.CSSProperties;
  className: string
};

export default function ClimateData({
  firstPart,
  secondPart,
  firstPartStyle,
  secondPartStyle,
  className
}: ClimateDataProps) {
  return (
    <div className={className}>
      <div style={firstPartStyle}>{firstPart}</div>
      <div style={secondPartStyle}>{secondPart}</div>
    </div>
  );
}
