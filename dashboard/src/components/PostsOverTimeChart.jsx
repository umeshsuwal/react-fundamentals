import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import ChartFigure from './ChartFigure';
import { postsPerMonth } from '../utils/stats';

function PostsOverTimeChart({ posts, monthKeys }) {
  if (posts.length === 0) {
    return <p role="status">No data to chart for the current filters.</p>;
  }

  const data = postsPerMonth(posts, monthKeys);
  const peak = data.reduce((a, b) => (b.posts > a.posts ? b : a));
  const summary = `Line chart of posts published per month, from ${data[0].label} to ${data[data.length - 1].label}. The busiest month is ${peak.label} with ${peak.posts} posts.`;

  return (
    <ChartFigure
      summary={summary}
      caption="Number of posts published each month."
      columnLabels={['Month', 'Posts']}
      rows={data.map((d) => ({ label: d.label, value: d.posts }))}
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 24, right: 16, bottom: 8, left: 0 }}
          accessibilityLayer={false}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" tick={{ fill: '#374151', fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fill: '#374151', fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="posts"
            name="Posts"
            stroke="#1d4ed8"
            strokeWidth={2}
            dot={{ r: 4, fill: '#1d4ed8' }}
          >
            <LabelList dataKey="posts" position="top" fill="#111827" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>
  );
}

export default PostsOverTimeChart;