import { stats } from "../data.js";

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats__inner">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
