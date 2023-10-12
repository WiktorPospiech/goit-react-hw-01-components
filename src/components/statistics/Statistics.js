import data from 'components/statistics/data.json';

const StaticticsList = ({ stats }) => {
  return (
    <ul>
      {stats.map(stat => (
        <li>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export default function Statistics() {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <div>
        <StaticticsList stats={data} />
      </div>
    </section>
  );
}
