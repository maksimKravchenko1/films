export function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <span>Mode:</span>
      <span>{process.env.NODE_ENV}</span>
      <div>{process.env.REACT_APP_PUBLIC_URL}</div>
    </div>
  );
}
