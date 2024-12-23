function Stat({ title, value, unit }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-sm font-bold">{title}</span>
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-primary">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm font-light uppercase tracking-wider">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default Stat;
