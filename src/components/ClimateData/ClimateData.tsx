type ClimateDataProps = {
  firstPart: string | number;
  secondPart: string;
} & React.HTMLAttributes<HTMLElement>;

export default function ClimateData({
  firstPart,
  secondPart,
  ...props
}: ClimateDataProps) {
  return (
    <div style={{ display: "flex", ...props.style }} {...props}>
      <div style={{ fontSize: "1em" }}>{firstPart}</div>
      <div style={{ fontSize: "0.55em" }}>{secondPart}</div>
    </div>
  );
}
