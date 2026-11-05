import { getSummary } from '../utils/stats';

function StatCards({ posts }) {
  const { totalPosts, totalComments, average, topAuthor } = getSummary(posts);

  const stats = [
    { label: 'Total posts', value: totalPosts },
    { label: 'Total comments', value: totalComments },
    { label: 'Avg comments per post', value: average },
    { label: 'Top author (by comments)', value: topAuthor },
  ];

  return (
    <dl className="stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default StatCards;